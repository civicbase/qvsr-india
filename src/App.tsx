import tw from 'twin.macro'
import { Button, Logo } from './components'
import 'styled-components/macro'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-blue-500 to-pink-300`,
  ],
}

const App = () => (
  <div css={styles.container({ hasBackground: true })}>
    <div css={tw`flex flex-col justify-center h-full gap-y-5`}>
      <Button variant="primary">Submit</Button>
      <Button variant="secondary">Cancel</Button>
    </div>

    <div css={tw`bg-yellow-200`}>filho da puta</div>
    <Logo />
  </div>
)

export default App
