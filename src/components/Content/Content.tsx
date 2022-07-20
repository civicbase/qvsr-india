import tw from 'twin.macro'
import Steps from 'components/Steps'

const Content = ({ step }: { step: number }) => {
  return (
    <div css={tw`relative mb-8`}>
      <Steps id={step} />
    </div>
  )
}

export default Content
