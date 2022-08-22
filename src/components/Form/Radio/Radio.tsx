import tw, { styled } from 'twin.macro'

const Radio = styled.input.attrs({ type: 'radio' })<{
  error?: boolean
  modified?: boolean
}>(() => [
  tw`w-4 h-4 !text-brand bg-gray-100 border-gray-300 focus:!ring-brand focus:ring-2`,
])

export default Radio
