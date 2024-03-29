import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Checkbox from 'components/Form/Checkbox'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import { isDisabledOption } from 'utils/isDisabledOption'
import bjpCandidates from 'utils/bjpCandidates'
import bjpCandidatesCastes from 'utils/bjpCandidatesCastes'
import bjpCandidatesDesc from 'utils/bjpCandidatesDesc'
import bjpCandidatesProfession from 'utils/bjpCandidatesProfession'

const Step7 = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const candidates = watch('step7.bjpCandidates')
  const castes = watch('step7.bjpCandidatesCastes')
  const candidateWealth = watch('step7.bjpCandidatesWealth')
  const popular = watch('step7.bjpCandidatesPopularity')
  const profession = watch('step7.bjpCandidatesProfession')
  const winnableCandidate = watch('step7.winnableCandidate')
  const posts = watch('step7.bjpCandidatesPost')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label>
          In your opinion, who do you think can be a candidate from BJP (Give
          full name) *
        </Label>
        {bjpCandidates.map((candidate: string, index: number) => {
          return (
            <div key={candidate}>
              <Label css={tw`inline-flex space-x-4 items-center select-none`}>
                <Checkbox
                  {...register(`step7.bjpCandidates.${index}.selected`)}
                />
                <span>{candidate}</span>
              </Label>

              {candidates && candidates[index].selected && (
                <Input
                  {...register(`step7.bjpCandidates.${index}.name`, {
                    required: true,
                  })}
                />
              )}
            </div>
          )
        })}

        <FieldErrorMessage name="step7.bjpCandidates" errors={errors} />
      </div>

      <div>
        <Label>
          Please mention the caste of the candidates in that order *
        </Label>

        {bjpCandidatesCastes.map((candidate: string, index: number) => {
          return (
            <div key={candidate}>
              <Label css={tw`inline-flex space-x-4 items-center select-none`}>
                <Checkbox
                  {...register(`step7.bjpCandidatesCastes.${index}.selected`)}
                />
                <span>{candidate}</span>
              </Label>

              {castes && castes[index].selected && (
                <Input
                  {...register(`step7.bjpCandidatesCastes.${index}.caste`, {
                    required: true,
                  })}
                />
              )}
            </div>
          )
        })}

        <FieldErrorMessage name="step7.bjpCandidatesCastes" errors={errors} />
      </div>

      <div>
        <Label>
          Please rank the candidate in terms of wealth and resources (eg first
          select the number 3 candidate if he is more wealthy, and select others
          in that order) *
        </Label>

        {bjpCandidatesDesc.map((candidate: string, index: number) => {
          return (
            <div key={candidate}>
              <Label css={tw`inline-flex space-x-4 items-center select-none`}>
                <Checkbox
                  {...register(`step7.bjpCandidatesWealth.${index}.selected`)}
                />
                <span>{candidate}</span>
              </Label>

              {candidateWealth && candidateWealth[index].selected && (
                <Input
                  {...register(`step7.bjpCandidatesWealth.${index}.name`, {
                    required: true,
                  })}
                />
              )}
            </div>
          )
        })}

        <FieldErrorMessage name="step7.bjpCandidatesWealth" errors={errors} />
      </div>

      <div>
        <Label>
          Please rank the candidate in terms of popularity and visibility (eg
          first select the number 2 candidate if he is more wealthy, and select
          others in that order) *
        </Label>

        {bjpCandidatesDesc.map((candidate: string, index: number) => {
          return (
            <div key={candidate}>
              <Label css={tw`inline-flex space-x-4 items-center select-none`}>
                <Checkbox
                  {...register(
                    `step7.bjpCandidatesPopularity.${index}.selected`,
                  )}
                />
                <span>{candidate}</span>
              </Label>

              {popular && popular[index].selected && (
                <Input
                  {...register(`step7.bjpCandidatesPopularity.${index}.name`, {
                    required: true,
                  })}
                />
              )}
            </div>
          )
        })}

        <FieldErrorMessage
          name="step7.bjpCandidatesPopularity"
          errors={errors}
        />
      </div>

      <div>
        <Label>Profession of the candidate (Please mention the exact) *</Label>

        {bjpCandidatesProfession.map((candidate: string, index: number) => {
          return (
            <div key={candidate}>
              <Label css={tw`inline-flex space-x-4 items-center select-none`}>
                <Checkbox
                  {...register(
                    `step7.bjpCandidatesProfession.${index}.selected`,
                  )}
                />
                <span>{candidate}</span>
              </Label>

              {profession && profession[index].selected && (
                <Input
                  {...register(
                    `step7.bjpCandidatesProfession.${index}.profession`,
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
          name="step7.bjpCandidatesProfession"
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
              <Label css={tw`inline-flex space-x-4 items-center select-none`}>
                <Checkbox
                  {...register(`step7.winnableCandidate`)}
                  value={desc}
                  disabled={disabled}
                />
                <span>{desc}</span>
              </Label>
            </div>
          )
        })}

        <FieldErrorMessage name="step7.winnableCandidate" errors={errors} />
      </div>

      <div>
        <Label>
          Whether the candidate holds any post in the Party/Government Write the
          name of the post in the box, otherwise write NA) *
        </Label>
        {bjpCandidatesDesc.map((candidate: string, index: number) => {
          return (
            <div key={candidate}>
              <Label css={tw`inline-flex space-x-4 items-center select-none`}>
                <Checkbox
                  {...register(`step7.bjpCandidatesPost.${index}.selected`)}
                />
                <span>{candidate}</span>
              </Label>

              {posts && posts[index].selected && (
                <Input
                  {...register(`step7.bjpCandidatesPost.${index}.post`, {
                    required: true,
                  })}
                />
              )}
            </div>
          )
        })}

        <FieldErrorMessage name="step7.bjpCandidatesPost" errors={errors} />
      </div>
    </div>
  )
}

export default Step7
