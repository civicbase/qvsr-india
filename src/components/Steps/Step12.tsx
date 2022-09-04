import Conjoint from 'methods/Conjoint'
import Likert from 'methods/Likert'
import Quadratic from 'methods/Quadratic'
import { memo } from 'react'
import { useFormContext } from 'react-hook-form'
import { reasonsToVoteACandidate } from 'utils/keyIssues'

const Step12 = () => {
  const { getValues } = useFormContext()

  const booth = getValues('step2.booth')

  switch (booth) {
    case 'booth 1 (Quadratic)':
      return <Quadratic qs={reasonsToVoteACandidate} step="step12" />
    case 'booth 2 (Conjoint)':
      return <Conjoint qs={reasonsToVoteACandidate} step="step12" />
    case 'booth 3 (Likert)':
      return <Likert qs={reasonsToVoteACandidate} step="step12" />
    default:
      return <Quadratic qs={reasonsToVoteACandidate} step="step12" />
  }
}

export default memo(Step12)
