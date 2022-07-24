import { useState } from 'react'
import tw, { theme } from 'twin.macro'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { useFormContext } from 'react-hook-form'

const FillStar = () => <AiFillStar size={22} color={theme`colors.bgColor9`} />
const UnfillStar = () => <AiOutlineStar size={22} />

const Rating = ({ ...props }) => {
  const [rate, setRate] = useState(0)
  const { setValue } = useFormContext()

  const handleRateChange = (newRate: number) => {
    setRate(newRate)
    setValue(props.name, newRate)
  }

  return (
    <div css={tw`flex justify-center  p-8 pb-2 w-auto space-x-3`}>
      {[1, 2, 3, 4, 5].map(i => (
        <button onClick={() => handleRateChange(i)} type="button" key={i}>
          {rate >= i ? <FillStar /> : <UnfillStar />}
        </button>
      ))}
    </div>
  )
}

export default Rating
