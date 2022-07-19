import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Textarea from 'components/Form/Textarea'

const Step3 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label>Assembly Profile</Label>

        <Textarea
          {...register('assemblyProfile')}
          error={!!errors.assemblyProfile}
          rows={4}
        />
        <FieldErrorMessage name="assemblyProfile" errors={errors} />
      </div>

      <div>
        <Label>Voter Population *</Label>
        <Input
          {...register('voterPopulation', {
            required: true,
            valueAsNumber: true,
          })}
          error={!!errors.voterPopulation}
          type="number"
        />
        <FieldErrorMessage name="voterPopulation" errors={errors} />
      </div>

      <div>
        <Label>Male Voter Population *</Label>
        <Input
          {...register('maleVoterPopulation', {
            required: true,
            valueAsNumber: true,
          })}
          error={!!errors.maleVoterPopulation}
          type="number"
        />
        <FieldErrorMessage name="maleVoterPopulation" errors={errors} />
      </div>

      <div>
        <Label>Female Voter Population *</Label>
        <Input
          {...register('femaleVoterPopulation', {
            required: true,
            valueAsNumber: true,
          })}
          error={!!errors.femaleVoterPopulation}
          type="number"
        />
        <FieldErrorMessage name="femaleVoterPopulation" errors={errors} />
      </div>

      <div>
        <Label>Avarage voting percentage *</Label>
        <Input
          {...register('avarageVotingPercentage', { valueAsNumber: true })}
          error={!!errors.avarageVotingPercentage}
          type="number"
        />
        <FieldErrorMessage name="avarageVotingPercentage" errors={errors} />
      </div>

      <div>
        <Label>Number of Booths *</Label>
        <Input
          {...register('numberBooths', { valueAsNumber: true })}
          error={!!errors.numberBooths}
          type="number"
        />
        <FieldErrorMessage name="numberBooths" errors={errors} />
      </div>
    </div>
  )
}

export default Step3
