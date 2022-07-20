import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Checkbox from 'components/Form/Checkbox'
import Radio from 'components/Form/Radio'
import { castes } from 'utils/castes'

const Step6 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label>First Runner-up in 2017 Assembly Elections (Party) *</Label>

        <div css={tw`grid grid-cols-1 gap-2`}>
          <Label css={tw`inline-flex space-x-4 items-center`}>
            <Radio
              {...register('firstRunnersAssemblyElections')}
              value="bharatiya"
            />
            <span>Bharatiya Janata Party</span>
          </Label>

          <Label css={tw`inline-flex space-x-4 items-center`}>
            <Radio
              {...register('firstRunnersAssemblyElections')}
              value="national"
            />
            <span>Indian National Congress</span>
          </Label>

          <Label css={tw`inline-flex space-x-4 items-center`}>
            <Radio
              {...register('firstRunnersAssemblyElections')}
              value="bahujan"
            />
            <span>Bahujan samaj party</span>
          </Label>

          <Label css={tw`inline-flex space-x-4 items-center`}>
            <Radio
              {...register('firstRunnersAssemblyElections')}
              value="communist"
            />
            <span>Communist Party of India (Marxist)</span>
          </Label>

          <Label css={tw`inline-flex space-x-4 items-center`}>
            <Radio
              {...register('firstRunnersAssemblyElections')}
              value="independent"
            />
            <span>Independent</span>
          </Label>

          <Label css={tw`inline-flex space-x-4 items-center`}>
            <Radio
              {...register('firstRunnersAssemblyElections')}
              value="other"
            />
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
        <Label>First Runner-up (Candidate) in 2017 Assembly Elections *</Label>
        <Input
          {...register('assemblyProfile')}
          error={!!errors.assemblyProfile}
        />
        <FieldErrorMessage name="assemblyProfile" errors={errors} />
      </div>

      <div css={tw`grid grid-cols-1 gap-2`}>
        <Label>Candidate's caste *</Label>

        {castes.map(caste => {
          const name = caste.charAt(0).toUpperCase() + caste.slice(1)

          return (
            <Label css={tw`inline-flex space-x-4 items-center`} key={caste}>
              <Radio {...register('winnerCaste')} value={caste} />
              <span>{name}</span>
            </Label>
          )
        })}
      </div>

      <div>
        <Label>Asset Value (approximately or declared) *</Label>
        <Input
          {...register('assemblyProfile')}
          error={!!errors.assemblyProfile}
        />
        <FieldErrorMessage name="assemblyProfile" errors={errors} />
      </div>

      <div css={tw`grid grid-cols-1 gap-2`}>
        <Label>
          What do you think is the main cause of loss (Choose any 3 reasons) *
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

export default Step6
