import tw from 'twin.macro'
import Button from 'components/Button'
import { BsGeoAltFill } from 'react-icons/bs'

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
      <Button
        variant="primary"
        onClick={handleShareGeolocation}
        css={tw`flex items-center`}
      >
        <div css={tw`mr-4`}>
          <BsGeoAltFill size={18} />
        </div>
        Share my location
      </Button>
      {error && <div>Reason: {error.message}</div>}
    </div>
  )
}

export default GeolocationMessage
