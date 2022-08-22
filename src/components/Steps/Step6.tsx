import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Checkbox from 'components/Form/Checkbox'
import Radio from 'components/Form/Radio'
import { castes } from 'utils/castes'
import parties from 'utils/parties'
import reasons from 'utils/reasons'
import { isDisabledOption } from 'utils/isDisabledOption'

const Step6 = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const lossreasons = watch('step6.lossReason')
  const party = watch('step6.firstRunnersAssemblyElections.party')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label>First Runner-up in 2017 Assembly Elections (Party) *</Label>

        <div css={tw`grid grid-cols-1 gap-2`}>
          {parties.map(party => (
            <Label css={tw`inline-flex space-x-4 items-center`} key={party}>
              <Radio
                {...register('step6.firstRunnersAssemblyElections.party')}
                value={party}
              />
              <span>{party}</span>
            </Label>
          ))}

          {party === 'Other' && (
            <Input {...register('step6.firstRunnersAssemblyElections.other')} />
          )}
        </div>

        <FieldErrorMessage
          name="step6.firstRunnersAssemblyElections.party"
          errors={errors}
        />
      </div>

      <div>
        <Label>Vote Share (in porcentage)*</Label>
        <Input
          {...register('step6.voteShare', {
            valueAsNumber: true,
            required: true,
          })}
          error={!!errors.step6?.voteShare}
          type="number"
        />
        <FieldErrorMessage name="step6.voteShare" errors={errors} />
      </div>

      <div>
        <Label>First Runner-up (Candidate) in 2017 Assembly Elections *</Label>
        <Input
          {...register('step6.firstRunnersAssemblyElections.candidate')}
          error={!!errors.step6?.firstRunnersAssemblyElections?.candidate}
        />
        <FieldErrorMessage
          name="step6.firstRunnersAssemblyElections.candidate"
          errors={errors}
        />
      </div>

      <div css={tw`grid grid-cols-1 gap-2`}>
        <Label>Candidate's caste *</Label>

        {castes.map(caste => {
          const name = caste.charAt(0).toUpperCase() + caste.slice(1)

          return (
            <Label css={tw`inline-flex space-x-4 items-center`} key={caste}>
              <Radio
                {...register(
                  'step6.firstRunnersAssemblyElections.candidateCaste',
                )}
                value={caste}
              />
              <span>{name}</span>
            </Label>
          )
        })}

        <FieldErrorMessage
          name="step6.firstRunnersAssemblyElections.canditateCaste"
          errors={errors}
        />
      </div>

      <div>
        <Label>Asset Value (approximately or declared) *</Label>
        <Input
          {...register('step6.assetValue', {
            valueAsNumber: true,
            required: true,
          })}
          type="number"
          error={!!errors.step6?.assetValue}
        />
        <FieldErrorMessage name="step6.assetValue" errors={errors} />
      </div>

      <div css={tw`grid grid-cols-1 gap-2`}>
        <Label>
          What do you think is the main cause of loss (Choose any 3 reasons) *
        </Label>

        {reasons.map(reason => {
          const disabled = isDisabledOption(reason, lossreasons, 3)

          return (
            <Label key={reason} css={tw`inline-flex space-x-4 items-center`}>
              <Checkbox
                {...register(`step6.lossReason`)}
                value={reason}
                disabled={disabled}
              />
              <span>{reason}</span>
            </Label>
          )
        })}
      </div>

      <FieldErrorMessage name="step6.lossReason" errors={errors} />
    </div>
  )
}

export default Step6
