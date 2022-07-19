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
  surveyor: string | null
  assemblyArea: string | null
  parliamentaryArea: string | null
}

const App = () => {
  const [step, setStep] = useState(1)
  const { latitude, longitude } = useGeolocation()
  const { recorderState, ...handlers }: UseRecorder = useRecorder()

  const methods = useForm<FormValues>({
    defaultValues: {
      surveyor: null,
    },
    resolver: zodResolver(validation),
  })

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }
  const handleNext = () => {
    setStep(step + 1)
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
          footer={<Footer onPrevious={handlePrevious} onNext={handleNext} />}
          recording={
            !recorderState.initRecording && (
              <RecorderMessage>
                <Recorder recorderState={recorderState} handlers={handlers} />{' '}
              </RecorderMessage>
            )
          }
          geolocation={(!latitude || !longitude) && <Geolocation />}
        />
      </form>
    </FormProvider>
  )
}

export default App
