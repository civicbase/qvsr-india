import tw from 'twin.macro'
import Button from 'components/Button'

const Footer = ({
  onPrevious,
  onNext,
  hidePrevious = false,
  hideNext = false,
}: {
  onPrevious: () => void
  onNext: () => void
  hidePrevious: boolean
  hideNext: boolean
}) => {
  return (
    <div css={[tw`flex justify-between`, hidePrevious && tw`justify-end`]}>
      {!hidePrevious && (
        <Button variant="primary" onClick={onPrevious}>
          Previous
        </Button>
      )}
      {!hideNext && (
        <Button variant="primary" onClick={onNext}>
          Next
        </Button>
      )}

      {false && (
        <Button variant="primary" type="submit">
          Submit
        </Button>
      )}
    </div>
  )
}

export default Footer
