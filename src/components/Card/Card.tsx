import tw, { styled } from 'twin.macro'

const Card = styled.div(() => [
  tw`flex flex-col overflow-hidden`,
  tw`my-0 sm:my-16`,
  tw`h-full w-full`,
  tw`p-6 max-w-lg bg-white rounded-none border border-gray-200 shadow-md sm:rounded-lg`,
])

export default Card
