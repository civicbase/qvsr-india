import { useFormContext } from 'react-hook-form'
import { RadioGroup } from '@headlessui/react'
import { Controller } from 'react-hook-form'
import tw from 'twin.macro'
import Typography from 'components/Typography'
import RadioButton from 'components/Form/Radio'

const Likert = ({ qs }: { qs: any[] }) => {
  const { control } = useFormContext()

  return (
    <div css={tw`flex flex-col items-center`}>
      {qs.map((attribute, index) => (
        <div key={attribute} css={tw`my-6`}>
          <div css={tw`mb-2`}>
            <Typography css={tw`font-bold`}>{attribute}</Typography>
          </div>
          <Controller
            rules={{ required: true }}
            control={control}
            name={`step7.${attribute}`}
            render={({ field }) => (
              <RadioGroup
                {...field}
                id={`step7.${attribute}`}
                css={tw`flex space-x-7 all-child:(text-center font-size[small])`}
              >
                <RadioGroup.Option value={1}>
                  {({ ...props }) => (
                    <>
                      <RadioButton {...props} />
                      <div>Strongly Disagree</div>
                    </>
                  )}
                </RadioGroup.Option>
                <RadioGroup.Option value={2}>
                  {({ ...props }) => (
                    <>
                      <RadioButton {...props} />
                      <div>Disagree</div>
                    </>
                  )}
                </RadioGroup.Option>
                <RadioGroup.Option value={3}>
                  {({ ...props }) => (
                    <>
                      <RadioButton {...props} />
                      <div>Neutral</div>
                    </>
                  )}
                </RadioGroup.Option>
                <RadioGroup.Option value={4}>
                  {({ ...props }) => (
                    <>
                      <RadioButton {...props} />
                      <div>Agree</div>
                    </>
                  )}
                </RadioGroup.Option>
                <RadioGroup.Option value={5}>
                  {({ ...props }) => (
                    <>
                      <RadioButton {...props} />
                      <div>Strongly Agree</div>
                    </>
                  )}
                </RadioGroup.Option>
              </RadioGroup>
            )}
          />
        </div>
      ))}
    </div>
  )
}

export default Likert
