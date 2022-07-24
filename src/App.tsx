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

interface FormValues {
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
  const { recorderState, ...handlers }: UseRecorder = useRecorder()

  const methods = useForm<FormValues>({
    defaultValues: {},
    resolver: zodResolver(validation),
  })

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

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(values => {
          console.log('values', values)
        })}
      >
        <PagesLayout
          content={<Content step={step} />}
          footer={
            <Footer
              onPrevious={handlePrevious}
              onNext={handleNext}
              hideNext={false}
              hidePrevious={step === 1}
            />
          }
          recording={
            !recorderState.initRecording && (
              <RecorderMessage>
                <Recorder recorderState={recorderState} handlers={handlers} />{' '}
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
