import tw from 'twin.macro'
import { useState } from 'react'
import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'components'
import PagesLayout from 'layout/Pages'
import Steps from 'components/Steps'
import validation from './validation'

const Content = ({ step }: { step: number }) => {
  return (
    <div css={tw`relative`}>
      <Steps id={step} />
    </div>
  )
}

const Footer = ({
  onPrevious,
  onNext,
}: {
  onPrevious: () => void
  onNext: () => void
}) => {
  const {
    trigger,
    formState: { errors },
  } = useFormContext()

  const handleNext = () => {
    trigger().then(isValid => {
      if (isValid) {
        onNext()
      }
    })
  }

  return (
    <div css={tw`flex justify-between`}>
      <Button variant="primary" onClick={onPrevious}>
        Previus
      </Button>
      <Button variant="primary" onClick={handleNext}>
        Next
      </Button>
    </div>
  )
}

interface FormValues {
  surveyor: string | null
  assemblyArea: string | null
  parliamentaryArea: string | null
}

const App = () => {
  const [step, setStep] = useState(1)
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
        />
      </form>
    </FormProvider>
  )
}

export default App
