import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import Typography from 'components/Typography'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'

const Likert = ({ qs, step }: { qs: any[]; step: string }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const options = [
    'Strongly Disagree',
    'Disagree',
    'Neutral',
    'Agree',
    'Strongly Agree',
  ]

  return (
    <div css={tw`flex flex-col items-center`}>
      {qs.map(attribute => (
        <div key={attribute} css={tw`my-6`}>
          <div css={tw`mb-2`}>
            <Typography css={tw`font-bold`}>{attribute}</Typography>
          </div>
          <div css={tw`flex space-x-4`}>
            {options.map(option => (
              <Label
                css={tw`flex flex-col space-y-2 items-center select-none`}
                key={option}
              >
                <Radio {...register(`${step}.${attribute}`)} value={option} />
                <span css={tw`text-center`}>{option}</span>
              </Label>
            ))}
          </div>
        </div>
      ))}

      <FieldErrorMessage name={step} errors={errors} />
    </div>
  )
}

export default Likert
