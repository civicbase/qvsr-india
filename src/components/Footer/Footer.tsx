import tw from 'twin.macro'
import Button from 'components/Button'
import { useEffect, useState } from 'react'
import { useRecorder } from 'context/Recorder'
import { useFormContext } from 'react-hook-form'

const Footer = ({
  onPrevious,
  onNext,
  hidePrevious = false,
  hideNext = false,
  isSubmitStep = false,
  isStart,
}: {
  onPrevious: () => void
  onNext: () => void
  hidePrevious: boolean
  hideNext: boolean
  isSubmitStep: boolean
  isStart?: boolean
}) => {
  const { recorderState, saveRecording } = useRecorder()
  const [stopRecording, setStopRecording] = useState(false)
  const { setValue } = useFormContext()

  useEffect(() => {
    if (recorderState.blob) {
      setValue('recording', recorderState.blob)
    }
  }, [recorderState])

  const handleStopRecording = () => {
    saveRecording()
    setStopRecording(true)
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
          {isStart ? 'Start Survey' : 'Next'}
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
