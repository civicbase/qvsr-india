import Button from 'components/Button'
import Card from 'components/Card'
import Typography from 'components/Typography'
import { useState } from 'react'
import tw from 'twin.macro'

const Option = ({
  title,
  text,
  selected,
  handleSelection,
}: {
  title: string
  text: string
  selected: boolean
  handleSelection: () => void
}) => {
  return (
    <Card
      css={[
        tw`flex p-0 rounded cursor-pointer hover:(outline-none ring-2 ring-brand)`,
        selected && tw`ring-2 ring-brand`,
      ]}
      onClick={handleSelection}
    >
      <Typography
        css={[
          tw`flex justify-center border-b-2 border-gray-100 py-2 text-gray-500`,
          selected && tw`border-brand`,
        ]}
      >
        {title}
      </Typography>

      <div css={tw`flex-1 flex flex-col justify-between`}>
        <Typography css={tw`flex justify-center items-center flex-1`}>
          {text}
        </Typography>

        <div
          css={[
            tw`flex justify-center py-1 text-brand hover:(bg-brand text-white)`,
            selected && tw`bg-brand text-white`,
          ]}
        >
          {selected ? 'CHOSEN' : 'CHOOSE'}
        </div>
      </div>
    </Card>
  )
}

const Conjoint = ({ qs }: { qs: any[] }) => {
  const [selected, setSelected] = useState(0)

  return (
    <div css={tw`grid grid-cols-2 gap-4`}>
      {qs.map((question, index) => (
        <Option
          title={`Option ${index + 1}`}
          text={question}
          selected={selected == index + 1}
          handleSelection={() => setSelected(index + 1)}
        />
      ))}
    </div>
  )
}

export default Conjoint
