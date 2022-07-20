import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import Checkbox from 'components/Form/Checkbox'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import { castes } from 'utils/castes'

const Step4 = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const step = watch('step4')

  return (
    <div css={tw`grid grid-cols-1 gap-2`}>
      <Label>
        Please select the major castes and mention the number in percentage *
      </Label>

      {castes.map((caste: string) => {
        const name = caste.charAt(0).toUpperCase() + caste.slice(1)

        return (
          <div key={caste}>
            <Label css={tw`inline-flex space-x-4 items-center`}>
              <Checkbox {...register(`step4.majorCastes[${caste}].selected`)} />
              <span>{name}</span>
            </Label>

            {step && step.majorCastes && step.majorCastes[caste].selected && (
              <Input
                {...register(`step4.majorCastes[${caste}].percentage`, {
                  required: true,
                  valueAsNumber: true,
                })}
                error={
                  !!errors.step4?.majorCastes &&
                  !!errors.step4?.majorCastes[caste]?.percentage
                }
                type="number"
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Step4
