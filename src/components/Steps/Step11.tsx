import tw from 'twin.macro'
import { useFormContext } from 'react-hook-form'
import Label from 'components/Form/Label'
import Radio from 'components/Form/Radio'
import Input from 'components/Form/Input'
import FieldErrorMessage from 'components/Form/FieldErrorMessage'
import { isDisabledOption } from 'utils/isDisabledOption'
import Checkbox from 'components/Form/Checkbox'

const Step11 = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const parties = [
    'Nationalist Congress Party',
    'Independent',
    'Indian National Congress',
    'Aam Aadmi Party',
    'Bharatiya Janata Party',
    'Bahujan samaj party',
    'Indian Tribal Party',
    'Other',
  ]

  const stateWinner = watch('step11.stateWinner.party')
  const constituencyWinner = watch('step11.constituencyWinner.party')

  return (
    <div css={tw`grid grid-cols-1 gap-6`}>
      <div>
        <Label>
          In your opinion, which party will win the next assembly election in
          the state? *
        </Label>

        <div css={tw`grid grid-cols-1 gap-2`}>
          {parties.map(party => (
            <Label css={tw`inline-flex space-x-4 items-center`} key={party}>
              <Radio {...register('step11.stateWinner.party')} value={party} />
              <span>{party}</span>
            </Label>
          ))}

          {stateWinner === 'Other' && (
            <Input {...register('step11.stateWinner.other')} />
          )}
        </div>

        <FieldErrorMessage name="step11.stateWinner.party" errors={errors} />
      </div>

      <div>
        <Label>
          In your opinion, which party will win the next assembly election in
          this constituency? *
        </Label>

        <div css={tw`grid grid-cols-1 gap-2`}>
          {parties.map(party => (
            <Label css={tw`inline-flex space-x-4 items-center`} key={party}>
              <Radio
                {...register('step11.constituencyWinner.party')}
                value={party}
              />
              <span>{party}</span>
            </Label>
          ))}

          {constituencyWinner === 'Other' && (
            <Input {...register('step11.constituencyWinner.other')} />
          )}
        </div>

        <FieldErrorMessage
          name="step11.constituencyWinner.party"
          errors={errors}
        />
      </div>

      <div css={tw`grid grid-cols-1 gap-2`}>
        <Label>
          Rank the party's winning ability, in your opinion, from 1 to 3 just
          write the number in the box) *
        </Label>

        {parties.map(party => {
          const disabled = isDisabledOption(party, parties, 3)

          return (
            <Label key={party} css={tw`inline-flex space-x-4 items-center`}>
              <Checkbox
                {...register(`step11.abilityWinner.${party}`)}
                value={party}
                disabled={disabled}
              />
              <span>{party}</span>
            </Label>
          )
        })}

        <FieldErrorMessage name="step5.winReasons" errors={errors} />
      </div>
    </div>
  )
}

export default Step11
