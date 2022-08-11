import tw, { styled } from 'twin.macro'

const Button = styled.button.attrs(({ type = 'button' }) => ({ type }))(
  ({ variant }: { variant: 'primary' | 'secondary' }) => [
    // The common button styles added with the tw import
    tw`px-8 py-2 rounded focus:outline-none transform duration-75`,

    // Use the variant grouping feature to add variants to multiple classes
    tw`hocus:(scale-105)`,

    // Use props to conditionally style your components
    variant === 'primary' && tw`bg-brand border-brand text-white`,

    // Combine regular css with tailwind classes within backticks
    variant === 'secondary' && [tw`border-2 text-brand border-brand`],
  ],
)

export default Button
