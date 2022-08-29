import Conjoint from 'methods/Conjoint'
import Likert from 'methods/Likert'
import Quadratic from 'methods/Quadratic'
import { memo } from 'react'
import { useFormContext } from 'react-hook-form'
import { keyIssues } from 'utils/keyIssues'

const Step7 = () => {
  const { getValues } = useFormContext()

  const booth = getValues('step2.booth')

  switch (booth) {
    case 'booth 1 (Quadratic)':
      return <Quadratic qs={keyIssues} />
    case 'booth 2 (Conjoint)': {
      return <Conjoint qs={keyIssues} />
    }
    case 'booth 3 (Likert)':
      return <Likert qs={keyIssues} />
    default:
      return <Quadratic qs={keyIssues} />
  }
}

export default memo(Step7)
