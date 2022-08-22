import tw from 'twin.macro'
import Label from 'components/Form/Label'
import { useFormContext } from 'react-hook-form'
import Checkbox from 'components/Form/Checkbox'
import Input from 'components/Form/Input'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import bjpCandidates from 'utils/bjpCandidates'
import bjpCandidatesCastes from 'utils/bjpCandidatesCastes'
import bjpCandidatesDesc from 'utils/bjpCandidatesDesc'
import bjpCandidatesProfession from 'utils/bjpCandidatesProfession'
import { isDisabledOption } from 'utils/isDisabledOption'

const Step9 = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const candidates = watch('step9.bjpCandidates')
  const castes = watch('step9.bjpCandidatesCastes')
  const candidateWealth = watch('step9.bjpCandidatesWealth')
  const popular = watch('step9.bjpCandidatesPopularity')
  const profession = watch('step9.bjpCandidatesProfession')
  const winnableCandidate = watch('step9.winnableCandidate')
  const posts = watch('step9.bjpCandidatesPost')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label>Who in your opinion can be nominated from Congress? *</Label>

        {bjpCandidates.map((candidate: string, index: number) => {
          return (
            <div key={candidate}>
              <Label css={tw`inline-flex space-x-4 items-center`}>
                <Checkbox
                  {...register(`step9.bjpCandidates.${index}.selected`)}
                />
                <span>{candidate}</span>
              </Label>

              {candidates && candidates[index].selected && (
                <Input
                  {...register(`step9.bjpCandidates.${index}.name`, {
                    required: true,
                  })}
                />
              )}
            </div>
          )
        })}

        <FieldErrorMessage name="step9.bjpCandidates" errors={errors} />
      </div>

      <div>
        <Label>
          Please mention the caste of the candidates in that order *
        </Label>

        {bjpCandidatesCastes.map((candidate: string, index: number) => {
          return (
            <div key={candidate}>
              <Label css={tw`inline-flex space-x-4 items-center`}>
                <Checkbox
                  {...register(`step9.bjpCandidatesCastes.${index}.selected`)}
                />
                <span>{candidate}</span>
              </Label>

              {castes && castes[index].selected && (
                <Input
                  {...register(`step9.bjpCandidatesCastes.${index}.caste`, {
                    required: true,
                  })}
                />
              )}
            </div>
          )
        })}

        <FieldErrorMessage name="step9.bjpCandidatesCastes" errors={errors} />
      </div>

      <div>
        <Label>
          Please rank the candidate in terms of wealth and resources (eg first
          select the number 2 candidate if he is more wealthy, and select others
          in that order) *
        </Label>

        {bjpCandidatesDesc.map((candidate: string, index: number) => {
          return (
            <div key={candidate}>
              <Label css={tw`inline-flex space-x-4 items-center`}>
                <Checkbox
                  {...register(`step9.bjpCandidatesWealth.${index}.selected`)}
                />
                <span>{candidate}</span>
              </Label>

              {candidateWealth && candidateWealth[index].selected && (
                <Input
                  {...register(`step9.bjpCandidatesWealth.${index}.name`, {
                    required: true,
                  })}
                />
              )}
            </div>
          )
        })}

        <FieldErrorMessage name="step9.bjpCandidatesWealth" errors={errors} />
      </div>

      <div>
        <Label>
          Please rank the candidate in terms of popularity and visibility (eg
          first select the number 3 candidate if he is more wealthy, and select
          others in that order) *
        </Label>

        {bjpCandidatesDesc.map((candidate: string, index: number) => {
          return (
            <div key={candidate}>
              <Label css={tw`inline-flex space-x-4 items-center`}>
                <Checkbox
                  {...register(
                    `step9.bjpCandidatesPopularity.${index}.selected`,
                  )}
                />
                <span>{candidate}</span>
              </Label>

              {popular && popular[index].selected && (
                <Input
                  {...register(`step9.bjpCandidatesPopularity.${index}.name`, {
                    required: true,
                  })}
                />
              )}
            </div>
          )
        })}

        <FieldErrorMessage
          name="step9.bjpCandidatesPopularity"
          errors={errors}
        />
      </div>

      <div>
        <Label>Profession of the candidate (Please mention the exact) *</Label>

        {bjpCandidatesProfession.map((candidate: string, index: number) => {
          return (
            <div key={candidate}>
              <Label css={tw`inline-flex space-x-4 items-center`}>
                <Checkbox
                  {...register(
                    `step9.bjpCandidatesProfession.${index}.selected`,
                  )}
                />
                <span>{candidate}</span>
              </Label>

              {profession && profession[index].selected && (
                <Input
                  {...register(
                    `step9.bjpCandidatesProfession.${index}.profession`,
                    {
                      required: true,
                    },
                  )}
                />
              )}
            </div>
          )
        })}
        <FieldErrorMessage
          name="step9.bjpCandidatesProfession"
          errors={errors}
        />
      </div>

      <div>
        <Label>
          In your opinion, if candidate is given ticket then who is more
          winnable (choose any one) *
        </Label>

        {bjpCandidatesDesc.map(desc => {
          const disabled = isDisabledOption(desc, winnableCandidate, 1)

          return (
            <div key={desc}>
              <Label css={tw`inline-flex space-x-4 items-center`}>
                <Checkbox
                  {...register(`step9.winnableCandidate`)}
                  value={desc}
                  disabled={disabled}
                />
                <span>{desc}</span>
              </Label>
            </div>
          )
        })}

        <FieldErrorMessage name="step9.winnableCandidate" errors={errors} />
      </div>

      <div>
        <Label>
          Whether the candidate holds any position in the party Write the name
          of the post in the box, otherwise write NA) *
        </Label>

        {bjpCandidatesDesc.map((candidate: string, index: number) => {
          return (
            <div key={candidate}>
              <Label css={tw`inline-flex space-x-4 items-center`}>
                <Checkbox
                  {...register(`step9.bjpCandidatesPost.${index}.selected`)}
                />
                <span>{candidate}</span>
              </Label>

              {posts && posts[index].selected && (
                <Input
                  {...register(`step9.bjpCandidatesPost.${index}.post`, {
                    required: true,
                  })}
                />
              )}
            </div>
          )
        })}

        <FieldErrorMessage name="step9.bjpCandidatesPost" errors={errors} />
      </div>
    </div>
  )
}

export default Step9
