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
        {...register('step1.surveyor', { required: true })}
        error={!!errors?.step1?.surveyor}
      />
      <FieldErrorMessage name="step1.surveyor" errors={errors} />
    </div>
  )
}

export default Step1
