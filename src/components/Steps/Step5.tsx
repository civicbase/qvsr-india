import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Checkbox from 'components/Form/Checkbox'
import Radio from 'components/Form/Radio'
import { castes } from 'utils/castes'
import Rating from 'components/Rating'

const Step5 = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label>Winners of 2017 assembly elections *</Label>

        <div css={tw`grid grid-cols-1 gap-2`}>
          <Label css={tw`inline-flex space-x-4 items-center`}>
            <Radio {...register('step5.winners2017')} value="bharatiya" />
            <span>Bharatiya Janata Party</span>
          </Label>

          <Label css={tw`inline-flex space-x-4 items-center`}>
            <Radio {...register('step5.winners2017')} value="national" />
            <span>Indian National Congress</span>
          </Label>

          <Label css={tw`inline-flex space-x-4 items-center`}>
            <Radio {...register('step5.winners2017')} value="bahujan" />
            <span>Bahujan samaj party</span>
          </Label>

          <Label css={tw`inline-flex space-x-4 items-center`}>
            <Radio {...register('step5.winners2017')} value="communist" />
            <span>Communist Party of India (Marxist)</span>
          </Label>

          <Label css={tw`inline-flex space-x-4 items-center`}>
            <Radio {...register('step5.winners2017')} value="independent" />
            <span>Independent</span>
          </Label>

          <Label css={tw`inline-flex space-x-4 items-center`}>
            <Radio {...register('step5.winners2017')} value="other" />
            <span>Other</span>
          </Label>
        </div>

        <FieldErrorMessage name="step5.winners2017" errors={errors} />
      </div>

      <div>
        <Label>Vote Share (in porcentage)*</Label>
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
            <Label css={tw`inline-flex space-x-4 items-center`} key={caste}>
              <Radio {...register('step5.currentMLA.caste')} value={caste} />
              <span>{name}</span>
            </Label>
          )
        })}

        <FieldErrorMessage name="step5.currentMLA.caste" errors={errors} />
      </div>

      <div>
        <Label>Evaluate the performance of the sitting MLA (1-5) *</Label>

        <Rating {...register('step5.currentMLA.performance')} />

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
          <Label css={tw`inline-flex space-x-4 items-center`}>
            <Radio {...register('step5.currentMLA.hasPosition')} value="yes" />
            <span>Yes</span>
          </Label>

          <Label css={tw`inline-flex space-x-4 items-center`}>
            <Radio {...register('step5.currentMLA.hasPosition')} value="no" />
            <span>No</span>
          </Label>
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

        <Label css={tw`inline-flex space-x-4 items-center`}>
          <Checkbox {...register(`step5.winReasons[strong opposition]`)} />
          <span>Strong opposition</span>
        </Label>

        <Label css={tw`inline-flex space-x-4 items-center`}>
          <Checkbox {...register(`step5.winReasons[a]`)} />
          <span>Caste factor</span>
        </Label>

        <Label css={tw`inline-flex space-x-4 items-center`}>
          <Checkbox {...register(`step5.winReasons[a]`)} />
          <span>Party worker</span>
        </Label>

        <Label css={tw`inline-flex space-x-4 items-center`}>
          <Checkbox {...register(`step5.winReasons[a]`)} />
          <span>Candidate's image</span>
        </Label>

        <Label css={tw`inline-flex space-x-4 items-center`}>
          <Checkbox {...register(`step5.winReasons[a]`)} />
          <span>Party national leadership</span>
        </Label>

        <Label css={tw`inline-flex space-x-4 items-center`}>
          <Checkbox {...register(`step5.winReasons[a]`)} />
          <span>Local leadership</span>
        </Label>

        <Label css={tw`inline-flex space-x-4 items-center`}>
          <Checkbox {...register(`step5.winReasons[a]`)} />
          <span>Other</span>
        </Label>
      </div>
    </div>
  )
}

export default Step5
