import { useEffect } from 'react'
import * as Section from '.'

type StepsProps = {
  id: number
}

const Steps = ({ id }: StepsProps) => {
  useEffect(() => {
    const body = document.querySelector('#content')

    if (body) {
      body.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }, [id])

  switch (id) {
    case 1:
      return <Section.Step1 />
    case 2:
      return <Section.Step2 />
    case 3:
      return <Section.Step3 />
    case 4:
      return <Section.Step4 />
    case 5:
      return <Section.Step5 />
    case 6:
      return <Section.Step6 />
    case 7:
      return <Section.Step7 />
    case 8:
      return <Section.Step8 />
    case 9:
      return <Section.Step9 />
    case 10:
      return <Section.Step10 />
    case 11:
      return <Section.Step11 />
    case 12:
      return <Section.Step12 />
    case 13:
      return <Section.Step13 />
    default:
      return <div>Error</div>
  }
}

export default Steps
