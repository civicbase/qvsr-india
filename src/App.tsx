import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import PagesLayout from 'layout/Pages'
import validation from './validation'
import Content from 'components/Content'
import Geolocation from 'components/Geolocation'
import useGeolocation from 'hooks/use-geolocation'
import Footer from 'components/Footer'
import Recorder, { RecorderMessage } from 'components/Recorder'
import Header from 'components/Header'
import useAsync from 'hooks/use-async'
import { createAnswer } from 'services/answer'
import { transform } from 'transform'

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
  recording: null | Blob
  method: null | 'quadratic' | 'likert' | 'conjoint'
}

const App = () => {
  const [step, setStep] = useState(1)
  const [userGesture, setUserGesture] = useState(false)
  const { latitude, longitude, error } = useGeolocation(userGesture)
  const { run } = useAsync()

  const methods = useForm<FormValues>({
    defaultValues: {
      recording: null,
    },
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
          const recording = values.recording

          if (recording) {
            const answer = transform(values)

            run(
              createAnswer(
                { ...answer, geolocation: { latitude, longitude } },
                recording,
              ),
            )
          }

          setStep(13)
        })}
      >
        <PagesLayout
          content={<Content step={step} />}
          header={<Header />}
          footer={
            <Footer
              onPrevious={handlePrevious}
              onNext={handleNext}
              hideNext={step === 12 || step === 13}
              isSubmitStep={step === 12}
              hidePrevious={
                step === 1 ||
                step === 2 ||
                step === 3 ||
                step === 11 ||
                step === 12 ||
                step === 13
              }
              isStart={step === 1}
            />
          }
          recording={
            <RecorderMessage>
              <Recorder />
            </RecorderMessage>
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
