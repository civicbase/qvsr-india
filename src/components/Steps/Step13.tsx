import tw from 'twin.macro'

const Step13 = () => {
  return (
    <div css={tw`flex space-x-4 mobile:(flex-col space-x-0 space-y-4)`}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/drinkingwater.jpg`}
        alt="driking_water"
        css={tw`w-1/2 mobile:w-full`}
      />
      <img
        src={`${process.env.PUBLIC_URL}/assets/partynational.jpg`}
        alt="party_national"
        css={tw`w-1/2 mobile:w-full`}
      />
    </div>
  )
}

export default Step13
