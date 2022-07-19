import tw, { styled } from 'twin.macro'

const IconButton = styled.button.attrs(
  ({ type = 'button', tabIndex = -1 }) => ({
    type,
    tabIndex,
  }),
)(() => [
  tw`rounded-lg p-2.5 inline-flex items-center justify-center text-gray-500 outline-none`,
  tw`hover:(outline-none bg-gray-100)`,
  tw`focus:(outline-none ring-gray-200 ring-inset ring-4)`,
  tw`dark:(text-gray-400 focus:ring-gray-700 hover:bg-gray-700)`,
])

export default IconButton
