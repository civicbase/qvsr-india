import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Checkbox from 'components/Form/Checkbox'
import Radio from 'components/Form/Radio'
import { castes } from 'utils/castes'
import Rating from 'components/Rating'
import reasons from 'utils/reasons'
import parties from 'utils/parties'
import { isDisabledOption } from 'utils/isDisabledOption'

const Step5 = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const winReasons = watch('step5.winReasons')
  const winners2017 = watch('step5.winners2017.party')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label>Winners of 2017 assembly elections *</Label>

        <div css={tw`grid grid-cols-1 gap-2`}>
          {parties.map(party => (
            <Label
              css={tw`inline-flex space-x-4 items-center select-none`}
              key={party}
            >
              <Radio {...register('step5.winners2017.party')} value={party} />
              <span>{party}</span>
            </Label>
          ))}

          {winners2017 === 'Other' && (
            <Input {...register('step5.winners2017.other')} />
          )}
        </div>

        <FieldErrorMessage name="step5.winners2017.party" errors={errors} />
      </div>

      <div>
        <Label>Vote Share (in percentage)*</Label>
        <Input
          {...register('step5.voteShare', {
            valueAsNumber: true,
            required: true,
          })}
          error={!!errors.step5?.voteShare}
          type="number"
        />
        <FieldErrorMessage name="step5.voteShare" errors={errors} />
      </div>

      <div>
        <Label>Current MLA (full name) *</Label>
        <Input
          {...register('step5.currentMLA.name')}
          error={!!errors.step5?.currentMLA?.name}
        />
        <FieldErrorMessage name="step5.currentMLA.name" errors={errors} />
      </div>

      <div css={tw`grid grid-cols-1 gap-2`}>
        <Label>Current MLA caste</Label>

        {castes.map(caste => {
          const name = caste.charAt(0).toUpperCase() + caste.slice(1)

          return (
            <Label
              css={tw`inline-flex space-x-4 items-center select-none`}
              key={caste}
            >
              <Radio {...register('step5.currentMLA.caste')} value={caste} />
              <span>{name}</span>
            </Label>
          )
        })}

        <FieldErrorMessage name="step5.currentMLA.caste" errors={errors} />
      </div>

      <div>
        <Label>Evaluate the performance of the sitting MLA (1-5) *</Label>

        <Rating name="step5.currentMLA.performance" />

        <FieldErrorMessage
          name="step5.currentMLA.performance"
          errors={errors}
        />
      </div>

      <div>
        <Label>
          Whether the current MLA holds any position or profile in the current
          government (mention the profile if yes, otherwise write NA)*
        </Label>

        <div css={tw`grid grid-cols-1 gap-2`}>
          <Label css={tw`inline-flex space-x-4 items-center select-none`}>
            <Radio {...register('step5.currentMLA.hasPosition')} value="yes" />
            <span>Yes</span>
          </Label>

          <Label css={tw`inline-flex space-x-4 items-center select-none`}>
            <Radio {...register('step5.currentMLA.hasPosition')} value="no" />
            <span>No</span>
          </Label>

          <Input {...register('step5.currentMLA.profile')} />
        </div>

        <FieldErrorMessage
          name="step5.currentMLA.hasPosition"
          errors={errors}
        />
      </div>

      <div css={tw`grid grid-cols-1 gap-2`}>
        <Label>
          What was the main reason in the win (select up to 3 reasons)*
        </Label>

        {reasons.map(reason => {
          const disabled = isDisabledOption(reason, winReasons, 3)

          return (
            <Label
              key={reason}
              css={tw`inline-flex space-x-4 items-center select-none`}
            >
              <Checkbox
                {...register(`step5.winReasons`)}
                value={reason}
                disabled={disabled}
              />
              <span>{reason}</span>
            </Label>
          )
        })}

        <FieldErrorMessage name="step5.winReasons" errors={errors} />

        {winReasons &&
          winReasons?.find((reason: string) => reason === 'Other') && (
            <Input {...register('step5.winReasonsOther')} />
          )}
      </div>
    </div>
  )
}

export default Step5
