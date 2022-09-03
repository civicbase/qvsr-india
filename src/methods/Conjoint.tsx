import Card from 'components/Card'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Typography from 'components/Typography'
import { memo, useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'

const Option = ({
  title,
  content,
  selected,
  handleSelection,
}: {
  title: string
  content: string[]
  selected: boolean
  handleSelection: () => void
}) => {
  return (
    <Card
      css={[
        tw`flex p-0 rounded cursor-pointer hover:(outline-none ring-2 ring-brand)`,
        tw`mobile:(m-4)`,
        selected && tw`ring-2 ring-brand`,
      ]}
      onClick={handleSelection}
    >
      <Typography
        css={[
          tw`flex justify-center border-b-2 border-gray-100 py-2 text-gray-500 bg-gray-50`,
        ]}
      >
        {title}
      </Typography>

      <div css={tw`flex-1 flex flex-col justify-between`}>
        <div
          css={tw`h-24 flex flex-col justify-center items-center text-center`}
        >
          {content.map(option => (
            <Typography key={option}>{option}</Typography>
          ))}
        </div>

        <div
          css={[
            tw`flex justify-center py-1 text-brand hover:(bg-brand text-white)`,
            selected && tw`bg-brand text-white`,
          ]}
        >
          {selected ? 'CHOSEN' : 'CHOOSE'}
        </div>
      </div>
    </Card>
  )
}

const Conjoint = ({ qs, step }: { qs: any[]; step: string }) => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext()

  const preferences = watch(`${step}.preferences`)

  const chunk = (arr: any, n: number) => {
    var r = Array(Math.ceil(arr.length / n)).fill(0)
    return r.map((e, i) => arr.slice(i * n, i * n + n))
  }

  const handleSelection = (pair: string[], questionIndex: number) => {
    setValue(`${step}.preferences.${questionIndex}`, pair)
  }

  const questions = useMemo(() => {
    const temp = []
    const shuffledQuestions = qs.sort(() => 0.5 - Math.random())
    const range = shuffledQuestions.slice(0, 6)

    for (let index = 0; index < 5; index++) {
      const pair = chunk(
        range.sort(() => 0.5 - Math.random()),
        3,
      )

      temp.push(pair)
    }

    setValue(`${step}.questions`, temp)
    return temp
  }, [])

  return (
    <div>
      <div css={tw`text-center`}>
        <Typography>
          Given each group which of these policy combinations do you prefer?
        </Typography>
      </div>

      {questions.map((pair: string[][], set: number) => {
        return (
          <div
            css={tw`flex mobile:space-x-0 space-x-6`}
            key={JSON.stringify(pair)}
          >
            {pair.map((p, index) => {
              let selected = false

              if (preferences && preferences[set]) {
                selected =
                  JSON.stringify(p) === JSON.stringify(preferences[set])
              }

              return (
                <Option
                  key={JSON.stringify(p)}
                  title={`Option ${index + 1}`}
                  content={p}
                  selected={selected}
                  handleSelection={() => handleSelection(p, set)}
                />
              )
            })}
          </div>
        )
      })}

      <FieldErrorMessage name={step} errors={errors} />
    </div>
  )
}

export default memo(Conjoint)
