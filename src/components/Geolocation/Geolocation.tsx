import tw from 'twin.macro'
import useGeolocation from 'hooks/use-geolocation'

const GeolocationMessage = () => {
  const { error } = useGeolocation()

  return (
    <div
      css={tw`backdrop-blur-3xl absolute w-full h-full left-0 bg-white bg-opacity-90 flex justify-center items-center flex-col z-50`}
    >
      Please enable the navigator geolocation to continue
      {error && <div>Reason: {(error as any).message}</div>}
    </div>
  )
}

export default GeolocationMessage
