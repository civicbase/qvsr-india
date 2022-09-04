import Conjoint from 'methods/Conjoint'
import Likert from 'methods/Likert'
import Quadratic from 'methods/Quadratic'
import { memo } from 'react'
import { useFormContext } from 'react-hook-form'
import { keyIssues } from 'utils/keyIssues'

const Step11 = () => {
  const { getValues } = useFormContext()

  const booth = getValues('step2.booth')

  switch (booth) {
    case 'booth 1 (Quadratic)':
      return <Quadratic qs={keyIssues} step="step11" />
    case 'booth 2 (Conjoint)':
      return <Conjoint qs={keyIssues} step="step11" />
    case 'booth 3 (Likert)':
      return <Likert qs={keyIssues} step="step11" />
    default:
      return <Quadratic qs={keyIssues} step="step11" />
  }
}

export default memo(Step11)
