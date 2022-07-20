import tw, { styled, css, theme } from 'twin.macro'

const Button = styled.button.attrs(({ type = 'button' }) => ({ type }))(
  ({ variant }: { variant: 'primary' | 'secondary' }) => [
    // The common button styles added with the tw import
    tw`px-8 py-2 rounded focus:outline-none transform duration-75`,

    // Use the variant grouping feature to add variants to multiple classes
    tw`hocus:(scale-105)`,

    // Use props to conditionally style your components
    variant === 'primary' && tw`bg-brand text-white border-brand`,

    // Combine regular css with tailwind classes within backticks
    variant === 'secondary' && [
      css`
        box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
      `,
      tw`border-2`,
    ],

    // The theme import can supply values from your tailwind.config.js
    css`
      color: ${theme`colors.white`};
    `,
  ],
)

export default Button
