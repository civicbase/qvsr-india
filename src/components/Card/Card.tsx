import tw, { styled } from 'twin.macro'

const Card = styled.div(() => [
  tw`flex flex-col overflow-hidden`,
  tw`my-0 sm:my-8`,
  tw`h-full w-full`,
  tw`p-3 md:p-6 max-w-2xl bg-white rounded-none border border-gray-200 shadow-md sm:rounded-lg`,
])

export default Card
