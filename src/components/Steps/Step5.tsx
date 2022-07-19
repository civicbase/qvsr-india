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
            <Radio {...register('winners2017')} value="bharatiya" />
            <span>Bharatiya Janata Party</span>
          </Label>

          <Label css={tw`inline-flex space-x-4 items-center`}>
            <Radio {...register('winners2017')} value="national" />
            <span>Indian National Congress</span>
          </Label>

          <Label css={tw`inline-flex space-x-4 items-center`}>
            <Radio {...register('winners2017')} value="bahujan" />
            <span>Bahujan samaj party</span>
          </Label>

          <Label css={tw`inline-flex space-x-4 items-center`}>
            <Radio {...register('winners2017')} value="communist" />
            <span>Communist Party of India (Marxist)</span>
          </Label>

          <Label css={tw`inline-flex space-x-4 items-center`}>
            <Radio {...register('winners2017')} value="independent" />
            <span>Independent</span>
          </Label>

          <Label css={tw`inline-flex space-x-4 items-center`}>
            <Radio {...register('winners2017')} value="other" />
            <span>Other</span>
          </Label>
        </div>
      </div>

      <div>
        <Label>Vote Share (in porcentage)*</Label>
        <Input
          {...register('assemblyProfile', { valueAsNumber: true })}
          error={!!errors.assemblyProfile}
          type="number"
        />
        <FieldErrorMessage name="assemblyProfile" errors={errors} />
      </div>

      <div>
        <Label>Current MLA (full name) *</Label>
        <Input
          {...register('assemblyProfile')}
          error={!!errors.assemblyProfile}
        />
        <FieldErrorMessage name="assemblyProfile" errors={errors} />
      </div>

      <div css={tw`grid grid-cols-1 gap-2`}>
        <Label>Current MLA caste</Label>

        {castes.map(caste => {
          const name = caste.charAt(0).toUpperCase() + caste.slice(1)

          return (
            <Label css={tw`inline-flex space-x-4 items-center`}>
              <Radio {...register('winnerCaste')} value={caste} />
              <span>{name}</span>
            </Label>
          )
        })}
      </div>

      <div>
        <Label>Evaluate the performance of the sitting MLA (1-5) *</Label>

        <Rating />
      </div>

      <div>
        <Label>
          Whether the current MLA holds any position or profile in the current
          government (mention the profile if yes, otherwise write NA)*
        </Label>

        <div css={tw`grid grid-cols-1 gap-2`}>
          <Label css={tw`inline-flex space-x-4 items-center`}>
            <Radio {...register('isMLAholdsPosition')} value="yes" />
            <span>Yes</span>
          </Label>

          <Label css={tw`inline-flex space-x-4 items-center`}>
            <Radio {...register('isMLAholdsPosition')} value="no" />
            <span>No</span>
          </Label>
        </div>
      </div>

      <div css={tw`grid grid-cols-1 gap-2`}>
        <Label>
          What was the main reason in the win (select up to 3 reasons)*
        </Label>

        <Label css={tw`inline-flex space-x-4 items-center`}>
          <Checkbox {...register('majorCastes.brahmin', { required: true })} />
          <span>Strong opposition</span>
        </Label>

        <Label css={tw`inline-flex space-x-4 items-center`}>
          <Checkbox {...register('majorCastes.brahmin', { required: true })} />
          <span>Caste factor</span>
        </Label>

        <Label css={tw`inline-flex space-x-4 items-center`}>
          <Checkbox {...register('majorCastes.brahmin', { required: true })} />
          <span>Party worker</span>
        </Label>

        <Label css={tw`inline-flex space-x-4 items-center`}>
          <Checkbox {...register('majorCastes.brahmin', { required: true })} />
          <span>Candidate's image</span>
        </Label>

        <Label css={tw`inline-flex space-x-4 items-center`}>
          <Checkbox {...register('majorCastes.brahmin', { required: true })} />
          <span>Party national leadership</span>
        </Label>

        <Label css={tw`inline-flex space-x-4 items-center`}>
          <Checkbox {...register('majorCastes.brahmin', { required: true })} />
          <span>Local leadership</span>
        </Label>

        <Label css={tw`inline-flex space-x-4 items-center`}>
          <Checkbox {...register('majorCastes.brahmin', { required: true })} />
          <span>Other</span>
        </Label>
      </div>
    </div>
  )
}

export default Step5
