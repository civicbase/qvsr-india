import Conjoint from 'methods/Conjoint'
import Quadratic from 'methods/Quadratic'
import { keyIssues } from 'utils/keyIssues'

const Step7 = () => {
  return (
    <div>
      {/* <Quadratic qs={keyIssues} /> */}
      <Conjoint qs={keyIssues} />
    </div>
  )
}

export default Step7
