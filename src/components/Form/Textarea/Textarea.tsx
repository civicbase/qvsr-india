import tw, { styled } from 'twin.macro'

const Textarea = styled.textarea<{ error?: boolean; modified?: boolean }>(
  ({ error, modified }) => [
    tw`block p-2.5 w-full text-sm text-gray-900 bg-white`,
    tw`focus:!outline-none focus:(!ring-2 !ring-blue-300 !border-blue-300)`,
    tw`rounded-md border-2 border-gray-200`,
    modified && tw`border-indigo-600 border-opacity-60`,
    error &&
      tw`border-error-300 border-opacity-60 focus:(ring-2 ring-red-300 border-red-300)`,
  ],
)

export default Textarea
