import tw from 'twin.macro'
import Button from 'components/Button'
import { useState } from 'react'

const Footer = ({
  onPrevious,
  onNext,
  onStopRecording,
  hidePrevious = false,
  hideNext = false,
  isSubmitStep = false,
}: {
  onPrevious: () => void
  onNext: () => void
  onStopRecording: () => void
  hidePrevious: boolean
  hideNext: boolean
  isSubmitStep: boolean
}) => {
  const [stopRecording, setStopRecording] = useState(false)

  const handleStopRecording = () => {
    setStopRecording(true)
    onStopRecording()
  }

  return (
    <div
      css={[tw`flex justify-evenly mt-3`, hidePrevious && tw`justify-center`]}
    >
      {!hidePrevious && (
        <Button variant="secondary" onClick={onPrevious}>
          Previous
        </Button>
      )}
      {!hideNext && (
        <Button variant="primary" onClick={onNext}>
          {hidePrevious ? 'Start Survey' : 'Next'}
        </Button>
      )}

      {isSubmitStep && !stopRecording && (
        <Button variant="primary" onClick={handleStopRecording}>
          Stop Recording
        </Button>
      )}

      {isSubmitStep && stopRecording && (
        <Button variant="tertiary" type="submit">
          Submit
        </Button>
      )}
    </div>
  )
}

export default Footer
