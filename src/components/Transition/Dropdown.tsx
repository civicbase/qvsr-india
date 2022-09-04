import { Transition } from '@headlessui/react'
import { ReactNode } from 'react'
import tw, { styled } from 'twin.macro'

const StyledTransition = styled(Transition)`
  &.leave {
    ${tw`transition ease-in duration-100`}
  }
  &.leaveFrom {
    ${tw`opacity-100`}
  }
  &.leaveTo {
    ${tw`opacity-0`}
  }
`

const Dropdown = ({ children }: { children: ReactNode }) => {
  return <StyledTransition>{children}</StyledTransition>
}

export default Dropdown
