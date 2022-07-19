import tw, { styled } from 'twin.macro'

const Radio = styled.input.attrs({ type: 'radio' })<{
  error?: boolean
  modified?: boolean
}>(() => [
  tw`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`,
])

export default Radio