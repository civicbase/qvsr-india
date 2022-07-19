import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import Button from 'components/Button'

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

export default Footer
