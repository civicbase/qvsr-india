import tw from 'twin.macro'
import Dropdown from 'components/Dropdown'
import Label from 'components/Form/Label'
import { Controller, useFormContext } from 'react-hook-form'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import assemblyAreas from 'utils/assemblyAreas'
import parliamentaryAreas from 'utils/parliamentaryAreas'

const Step2 = () => {
  const booth = [
    'booth1',
    'booth2',
    'booth3',
    'booth4',
    'booth5',
    'booth6',
    'booth7',
    'booth8',
    'booth9',
    'booth10',
    'booth11',
    'booth12',
    'booth13',
    'booth14',
    'booth15',
    'booth16',
    'booth17',
    'booth18',
    'booth19',
    'booth20',
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
          name="step2.assemblyArea"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={assemblyAreas}
              value={field.value}
              onChange={field.onChange}
              placeholder="Select assembly area"
              error={!!errors?.step2?.assemblyArea}
            />
          )}
        />
        <FieldErrorMessage name="step2.assemblyArea" errors={errors} />
      </div>

      <div>
        <Label>Parliamentary Area *</Label>
        <Controller
          name="step2.parliamentaryArea"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={parliamentaryAreas}
              value={field.value}
              onChange={field.onChange}
              placeholder="Select parliamentary area"
              error={!!errors?.step2?.parliamentaryArea}
            />
          )}
        />
        <FieldErrorMessage name="step2.parliamentaryArea" errors={errors} />
      </div>

      <div>
        <Label>Booth *</Label>
        <Controller
          name="step2.booth"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={booth}
              value={field.value}
              onChange={field.onChange}
              placeholder="Select booth"
              error={!!errors?.step2?.booth}
            />
          )}
        />
        <FieldErrorMessage name="step2.booth" errors={errors} />
      </div>
    </div>
  )
}

export default Step2
