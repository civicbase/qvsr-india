import tw, { styled } from 'twin.macro'

const Button = styled.button.attrs(({ type = 'button' }) => ({ type }))(
  ({ variant }: { variant: 'primary' | 'secondary' | 'tertiary' }): any => [
    // The common button styles added with the tw import
    tw`px-8 py-2 rounded focus:outline-none transform duration-75 select-none`,

    // Use the variant grouping feature to add variants to multiple classes
    tw`hocus:(bg-opacity-95)`,

    // Use props to conditionally style your components
    variant === 'primary' && tw`bg-brand border-brand text-white`,
    variant === 'secondary' && tw`hocus:(bg-brand bg-opacity-10)`,

    // Combine regular css with tailwind classes within backticks
    variant === 'secondary' && [tw`border-2 text-brand border-brand`],
    variant === 'tertiary' && [tw`bg-brand2 text-white`],
  ],
)

export default Button
