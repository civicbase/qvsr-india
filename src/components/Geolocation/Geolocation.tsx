import tw from 'twin.macro'
import Button from 'components/Button'

type GeolocationMessageProps = {
  error?: GeolocationPositionError
  handleShareGeolocation: () => void
}

const GeolocationMessage = ({
  error,
  handleShareGeolocation,
}: GeolocationMessageProps) => {
  return (
    <div
      css={tw`backdrop-blur-3xl absolute w-full h-full left-0 bg-white bg-opacity-90 flex justify-center items-center flex-col z-50`}
    >
      <img
        src={`${process.env.PUBLIC_URL}/assets/location.png`}
        alt="location"
      />
      <Button
        variant="primary"
        onClick={handleShareGeolocation}
        css={tw`flex items-center`}
      >
        Enable Location
      </Button>
      {error && <div>Reason: {error.message}</div>}
    </div>
  )
}

export default GeolocationMessage
