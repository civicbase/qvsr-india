import tw from 'twin.macro'
import Dropdown from 'components/Dropdown'
import Label from 'components/Form/Label'
import { Controller, useFormContext } from 'react-hook-form'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import assemblyAreas from 'utils/assemblyAreas'
import parliamentaryAreas from 'utils/parliamentaryAreas'
import { useEffect } from 'react'

const Step2 = () => {
  const booth = [
    'booth 1 (Quadratic)',
    'booth 2 (Conjoint)',
    'booth 3 (Likert)',
    'booth 4',
    'booth 5',
    'booth 6',
    'booth 7',
    'booth 8',
    'booth 9',
    'booth 10',
    'booth 11',
    'booth 12',
    'booth 13',
    'booth 14',
    'booth 15',
    'booth 16',
    'booth 17',
    'booth 18',
    'booth 19',
    'booth 20',
  ]

  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext()

  const selectedBooth: string = watch('step2.booth')

  useEffect(() => {
    if (selectedBooth) {
      switch (selectedBooth) {
        case 'booth 1 (Quadratic)':
          setValue('method', 'quadratic')
          break
        case 'booth 2 (Conjoint)':
          setValue('method', 'conjoint')
          break
        case 'booth 3 (Likert)':
          setValue('method', 'likert')
          break

        default:
          setValue('method', 'quadratic')
      }
    }
  }, [selectedBooth])

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
