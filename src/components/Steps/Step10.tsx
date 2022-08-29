import tw from 'twin.macro'
import Label from 'components/Form/Label'
import Checkbox from 'components/Form/Checkbox'
import { useFormContext } from 'react-hook-form'
import Input from 'components/Form/Input'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'

const Step10 = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const possibleCandidates = [
    'Name of possible candidate of Aam Aadmi Party',
    'Name of possible candidate of Nationalist Congress Party',
    'Name of probable candidate from Bharatiya Tribal Party',
    'Name of possible candidate of Bahujan Samaj Party',
    'Name of potential candidate from independent',
    'Name of potential other candidate',
  ]

  const candidates = watch('step10.possibleCandidates')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label>
          In your opinion, who can be the candidates of the following party -
          Minimum 2 names (full name) *
        </Label>

        {possibleCandidates.map((candidate: string, index: number) => {
          return (
            <div key={candidate}>
              <Label css={tw`inline-flex space-x-4 items-center select-none`}>
                <Checkbox
                  {...register(`step10.possibleCandidates.${index}.selected`)}
                />
                <span>{candidate}</span>
              </Label>

              {candidates && candidates[index].selected && (
                <Input
                  {...register(`step10.possibleCandidates.${index}.candidate`, {
                    required: true,
                  })}
                />
              )}
            </div>
          )
        })}

        <FieldErrorMessage name="step10.possibleCandidates" errors={errors} />
      </div>
    </div>
  )
}

export default Step10
