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
          {...register('step3.assemblyProfile')}
          error={!!errors.step3?.assemblyProfile}
          rows={4}
        />
      </div>

      <div>
        <Label>Voter Population *</Label>

        <Input
          {...register('step3.voterPopulation', {
            required: true,
            valueAsNumber: true,
          })}
          error={!!errors.step3?.voterPopulation}
          type="number"
        />

        <FieldErrorMessage name="step3.voterPopulation" errors={errors} />
      </div>

      <div>
        <Label>Male Voter Population *</Label>

        <Input
          {...register('step3.maleVoterPopulation', {
            required: true,
            valueAsNumber: true,
          })}
          error={!!errors.step3?.maleVoterPopulation}
          type="number"
        />

        <FieldErrorMessage name="step3.maleVoterPopulation" errors={errors} />
      </div>

      <div>
        <Label>Female Voter Population *</Label>

        <Input
          {...register('step3.femaleVoterPopulation', {
            required: true,
            valueAsNumber: true,
          })}
          error={!!errors.step3?.femaleVoterPopulation}
          type="number"
        />

        <FieldErrorMessage name="step3.femaleVoterPopulation" errors={errors} />
      </div>

      <div>
        <Label>Avarage voting percentage *</Label>

        <Input
          {...register('step3.avarageVotingPercentage', {
            valueAsNumber: true,
          })}
          error={!!errors.step3?.avarageVotingPercentage}
          type="number"
        />

        <FieldErrorMessage
          name="step3.avarageVotingPercentage"
          errors={errors}
        />
      </div>

      <div>
        <Label>Number of Booths *</Label>

        <Input
          {...register('step3.numberBooths', { valueAsNumber: true })}
          error={!!errors.step3?.numberBooths}
          type="number"
        />

        <FieldErrorMessage name="step3.numberBooths" errors={errors} />
      </div>
    </div>
  )
}

export default Step3
