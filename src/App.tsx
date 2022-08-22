import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import PagesLayout from 'layout/Pages'
import validation from './validation'
import Content from 'components/Content'
import Geolocation from 'components/Geolocation'
import useGeolocation from 'hooks/use-geolocation'
import Footer from 'components/Footer'
import Recorder, { RecorderMessage, UseRecorder } from 'components/Recorder'
import useRecorder from 'hooks/use-recorder'
import Header from 'components/Header'
import useAsync from 'hooks/use-async'
import { createAnswer } from 'services/answer'

interface FormValues {
  recording: boolean
  step1: {
    surveyor?: string
  }
  step2: {
    assemblyArea?: string
    parliamentaryArea?: string
  }
  step3: {
    assemblyProfile?: string
    voterPopulation?: number
    maleVoterPopulation?: number
    femaleVoterPopulation?: number
    avarageVotingPercentage?: number
    numberBooths?: number
  }
  step4: {
    majorCastes: {
      [caste: string]: {
        selected?: string
        percentage?: number
      }
    }
  }
  step5: {
    winners2017?: string
    voteShare?: number
    currentMLA: {
      name?: string
      caste?: string
      performance?: number
      hasPosition?: string
    }
  }
}

const App = () => {
  const [step, setStep] = useState(1)
  const [userGesture, setUserGesture] = useState(false)
  const { latitude, longitude, error } = useGeolocation(userGesture)
  const { recorderState, saveRecording, ...handlers }: UseRecorder =
    useRecorder()
  const { run } = useAsync()

  const methods = useForm<FormValues>({
    defaultValues: {
      recording: false,
    },
    resolver: zodResolver(validation),
  })

  const recording = methods.watch('recording')

  console.log('recording', recording)

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }
  const handleNext = () => {
    methods.trigger(`step${step}` as any).then(isValid => {
      if (isValid) {
        setStep(step + 1)
      }
    })
  }

  const handleStopRecording = () => {
    saveRecording()
    methods.setValue('recording', true)
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(values => {
          console.log('values', values)

          if (recorderState.blob) {
            run(createAnswer(values, recorderState.blob))
          }

          setStep(12)
        })}
      >
        <PagesLayout
          content={<Content step={step} />}
          header={<Header />}
          footer={
            <Footer
              onPrevious={handlePrevious}
              onStopRecording={handleStopRecording}
              onNext={handleNext}
              hideNext={step === 11 || step === 12}
              isSubmitStep={step === 11}
              hidePrevious={step === 1 || step === 12}
            />
          }
          recording={
            !recorderState.initRecording &&
            !recording && (
              <RecorderMessage>
                <Recorder
                  recorderState={recorderState}
                  handlers={{ ...handlers, saveRecording }}
                />
              </RecorderMessage>
            )
          }
          geolocation={
            (!latitude || !longitude) && (
              <Geolocation
                handleShareGeolocation={() => setUserGesture(true)}
                error={error}
              />
            )
          }
        />
      </form>
    </FormProvider>
  )
}

export default App
