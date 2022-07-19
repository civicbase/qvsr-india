import { useFormContext } from 'react-hook-form'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'

const Step1 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div>
      <Label>Name of Surveyor (full name)*</Label>
      <Input
        {...register('surveyor', { required: true })}
        error={!!errors.surveyor}
        autoFocus
      />
      <FieldErrorMessage name="surveyor" errors={errors} />
    </div>
  )
}

export default Step1
