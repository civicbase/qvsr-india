import { useState } from 'react'
import tw, { theme } from 'twin.macro'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Rating = () => {
  const [rate, setRate] = useState(0)

  return (
    <div css={tw`flex justify-center  p-8 pb-2 w-auto space-x-3`}>
      <button onClick={() => setRate(1)}>
        {rate >= 1 ? (
          <AiFillStar size={22} color={theme`colors.bgColor9`} />
        ) : (
          <AiOutlineStar size={22} />
        )}
      </button>

      <button onClick={() => setRate(2)}>
        {rate >= 2 ? (
          <AiFillStar size={22} color={theme`colors.bgColor9`} />
        ) : (
          <AiOutlineStar size={22} />
        )}
      </button>

      <button onClick={() => setRate(3)}>
        {rate >= 3 ? (
          <AiFillStar size={22} color={theme`colors.bgColor9`} />
        ) : (
          <AiOutlineStar size={22} />
        )}
      </button>

      <button onClick={() => setRate(4)}>
        {rate >= 4 ? (
          <AiFillStar size={22} color={theme`colors.bgColor9`} />
        ) : (
          <AiOutlineStar size={22} />
        )}
      </button>

      <button onClick={() => setRate(5)}>
        {rate >= 5 ? (
          <AiFillStar size={22} color={theme`colors.bgColor9`} />
        ) : (
          <AiOutlineStar size={22} />
        )}
      </button>
    </div>
  )
}

export default Rating
