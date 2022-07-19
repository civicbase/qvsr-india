import tw from 'twin.macro'
import Dropdown from 'components/Dropdown'
import Label from 'components/Form/Label'
import { Controller, useFormContext } from 'react-hook-form'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'

const Step2 = () => {
  const assemblyAreas = [
    'Agree/Disagree',
    'Favor/Opose',
    'Aprove/Reject',
    'Aye/Nay',
    'Custom',
  ]

  const parliamentaryAreas = [
    'Agree/Disagree',
    'Favor/Opose',
    'Aprove/Reject',
    'Aye/Nay',
    'Custom',
  ]

  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label>Assembly Area *</Label>
        <Controller
          name="assemblyArea"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={assemblyAreas}
              value={field.value}
              onChange={field.onChange}
              placeholder="Select assembly area"
              // error={errors?.assemblyArea}
            />
          )}
        />
        <FieldErrorMessage name="assemblyArea" errors={errors} />
      </div>

      <div>
        <Label>Parliamentary Area *</Label>
        <Controller
          name="parliamentaryArea"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={parliamentaryAreas}
              value={field.value}
              onChange={field.onChange}
              placeholder="Select parliamentary area"
              // error={errors?.parliamentaryArea}
            />
          )}
        />
        <FieldErrorMessage name="parliamentaryArea" errors={errors} />
      </div>
    </div>
  )
}

export default Step2
