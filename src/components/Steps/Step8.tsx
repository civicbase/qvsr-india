import { useFormContext } from 'react-hook-form'
import tw from 'twin.macro'
import Input from 'components/Form/Input'
import Label from 'components/Form/Label'
import Checkbox from 'components/Form/Checkbox'

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

  const candidates = watch('bjpCandidates')
  const castes = watch('bjpCandidatesCastes')
  const profession = watch('bjpCandidatesProfession')
  const posts = watch('bjpCandidatesPost')

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
                <Checkbox {...register(`bjpCandidates.${index}.selected`)} />
                <span>{candidate}</span>
              </Label>

              {candidates && candidates[index].selected && (
                <Input
                  {...register(`bjpCandidates.${index}.name`, {
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
          Please mention the caste of the candidates in that order *
        </Label>

        {bjpCandidatesCastes.map((candidate: string, index: number) => {
          return (
            <div key={candidate}>
              <Label css={tw`inline-flex space-x-4 items-center`}>
                <Checkbox
                  {...register(`bjpCandidatesCastes.${index}.selected`)}
                />
                <span>{candidate}</span>
              </Label>

              {castes && castes[index].selected && (
                <Input
                  {...register(`bjpCandidatesCastes.${index}.caste`, {
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
                  {...register(`bjpCandidatesWealth.${index}.selected`)}
                />
                <span>{candidate}</span>
              </Label>
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
                  {...register(`bjpCandidatesPopularity.${index}.selected`)}
                />
                <span>{candidate}</span>
              </Label>
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
                  {...register(`bjpCandidatesProfession.${index}.selected`)}
                />
                <span>{candidate}</span>
              </Label>

              {profession && profession[index].selected && (
                <Input
                  {...register(`bjpCandidatesProfession.${index}.profession`, {
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
          In your opinion, if candidate is given ticket then who is more
          winnable (choose any one) *
        </Label>
        TODO
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
                  {...register(`bjpCandidatesPost.${index}.selected`)}
                />
                <span>{candidate}</span>
              </Label>

              {posts && posts[index].selected && (
                <Input
                  {...register(`bjpCandidatesPost.${index}.post`, {
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
