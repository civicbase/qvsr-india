import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Checkbox from 'components/Form/Checkbox'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import { isDisabledOption } from 'utils/isDisabledOption'

const Step8 = () => {
  const bjpCandidates = [
    'Number one candidate name',
    `No. 2 candidate's name`,
    'Name of the number three candidate',
  ]

  const bjpCandidatesCastes = [
    `Number one candidate's caste`,
    `No. 2 candidate's caste`,
    `No. 3 candidate's caste`,
  ]

  const bjpCandidatesDesc = [
    `Number one candidate`,
    `Number two candidate`,
    `Number three candidate`,
  ]

  const bjpCandidatesProfession = [
    `Number one candidate's profession`,
    `No. 2 candidate's profession`,
    `Number three candidate's profession`,
  ]

  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const candidates = watch('step8.bjpCandidates')
  const castes = watch('step8.bjpCandidatesCastes')
  const candidateWealth = watch('step8.bjpCandidatesWealth')
  const popular = watch('step8.bjpCandidatesPopularity')
  const profession = watch('step8.bjpCandidatesProfession')
  const posts = watch('step8.bjpCandidatesPost')
  const winnableCandidate = watch('step8.winnableCandidate')

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
              <Label css={tw`inline-flex space-x-4 items-center`}>
                <Checkbox
                  {...register(`step8.bjpCandidates.${index}.selected`)}
                />
                <span>{candidate}</span>
              </Label>

              {candidates && candidates[index].selected && (
                <Input
                  {...register(`step8.bjpCandidates.${index}.name`, {
                    required: true,
                  })}
                />
              )}
            </div>
          )
        })}

        <FieldErrorMessage name="step8.bjpCandidates" errors={errors} />
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
                  {...register(`step8.bjpCandidatesCastes.${index}.selected`)}
                />
                <span>{candidate}</span>
              </Label>

              {castes && castes[index].selected && (
                <Input
                  {...register(`step8.bjpCandidatesCastes.${index}.caste`, {
                    required: true,
                  })}
                />
              )}
            </div>
          )
        })}
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
              <Label css={tw`inline-flex space-x-4 items-center`}>
                <Checkbox
                  {...register(`step8.bjpCandidatesWealth.${index}.selected`)}
                />
                <span>{candidate}</span>
              </Label>

              {candidateWealth && candidateWealth[index].selected && (
                <Input
                  {...register(`step8.bjpCandidatesWealth.${index}.desc`, {
                    required: true,
                  })}
                />
              )}
            </div>
          )
        })}
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
              <Label css={tw`inline-flex space-x-4 items-center`}>
                <Checkbox
                  {...register(
                    `step8.bjpCandidatesPopularity.${index}.selected`,
                  )}
                />
                <span>{candidate}</span>
              </Label>

              {popular && popular[index].selected && (
                <Input
                  {...register(`step8.bjpCandidatesPopularity.${index}.desc`, {
                    required: true,
                  })}
                />
              )}
            </div>
          )
        })}
      </div>

      <div>
        <Label>Profession of the candidate (Please mention the exact) *</Label>

        {bjpCandidatesProfession.map((candidate: string, index: number) => {
          return (
            <div key={candidate}>
              <Label css={tw`inline-flex space-x-4 items-center`}>
                <Checkbox
                  {...register(
                    `step8.bjpCandidatesProfession.${index}.selected`,
                  )}
                />
                <span>{candidate}</span>
              </Label>

              {profession && profession[index].selected && (
                <Input
                  {...register(
                    `step8.bjpCandidatesProfession.${index}.profession`,
                    {
                      required: true,
                    },
                  )}
                />
              )}
            </div>
          )
        })}
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
                  {...register(`step8.winnableCandidate`)}
                  value={desc}
                  disabled={disabled}
                />
                <span>{desc}</span>
              </Label>
            </div>
          )
        })}
      </div>

      <div>
        <Label>
          Whether the candidate holds any post in the Party/Government Write the
          name of the post in the box, otherwise write NA) *
        </Label>
        {bjpCandidatesDesc.map((candidate: string, index: number) => {
          return (
            <div key={candidate}>
              <Label css={tw`inline-flex space-x-4 items-center`}>
                <Checkbox
                  {...register(`step8.bjpCandidatesPost.${index}.selected`)}
                />
                <span>{candidate}</span>
              </Label>

              {posts && posts[index].selected && (
                <Input
                  {...register(`step8.bjpCandidatesPost.${index}.post`, {
                    required: true,
                  })}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Step8
