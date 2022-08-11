import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import Checkbox from 'components/Form/Checkbox'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import { castes } from 'utils/castes'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'

const Step4 = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const step = watch('step4')
  const majorCastes = watch('step4.majorCastes')

  const shouldDisableCaste = (caste: string): boolean => {
    if (majorCastes) {
      const count = Object.keys(majorCastes).reduce((val, caste) => {
        if (majorCastes[caste].selected) {
          return val + 1
        }

        return val
      }, 0)

      const found = Object.keys(majorCastes).find(
        (c: string) => c === caste && majorCastes[c].selected,
      )
      if (found) {
        return false
      }

      if (count >= 5) {
        return true
      } else {
        return false
      }
    }

    return false
  }

  return (
    <div css={tw`grid grid-cols-1 gap-2`}>
      <Label>
        Please select the major castes and mention the number in percentage (min
        3) *
      </Label>

      {castes.map((caste: string) => {
        const name = caste.charAt(0).toUpperCase() + caste.slice(1)
        const disabled = shouldDisableCaste(caste)

        return (
          <div key={caste}>
            <Label css={tw`inline-flex space-x-4 items-center`}>
              <Checkbox
                {...register(`step4.majorCastes[${caste}].selected`)}
                disabled={disabled}
              />
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

      <FieldErrorMessage name="step4.majorCastes" errors={errors} />
    </div>
  )
}

export default Step4
