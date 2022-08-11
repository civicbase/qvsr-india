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

      {false && (
        <Button variant="primary" type="submit">
          Submit
        </Button>
      )}
    </div>
  )
}

export default Footer
