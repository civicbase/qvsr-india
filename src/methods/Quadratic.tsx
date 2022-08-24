import DynamicBar from 'components/DynamicBar'
import { Headline } from 'components/Typography'
import Vote from 'components/Vote'
import useQuadratic from 'hooks/use-quadratic'
import tw from 'twin.macro'

const Quadratic = ({ qs }: { qs: any[] }) => {
  const credits = 100
  const survey = {
    setup: {
      credits,
    },
    quadratic: qs.map((q: string) => ({
      statement: q,
    })),
  }

  const { questions, availableCredits, vote, canVote } = useQuadratic(survey)

  return (
    <div>
      <div css={tw`sticky top-0 z-20 mb-7 bg-white`}>
        <DynamicBar
          total={credits}
          availableCredits={availableCredits}
          language="Credits"
        />
      </div>

      {questions.map((question, index) => {
        const canVoteUp = canVote(index, 1)
        const canVoteDown = canVote(index, -1)

        return (
          <div key={question.statement} css={tw`flex w-full flex-col`}>
            <Headline css={tw`mb-4 flex`}>
              {index + 1}.&nbsp;
              {question.statement}
            </Headline>

            <div css={tw`flex justify-center mt-12`}>
              <Vote
                thumbsDown="Agree"
                thumbsUp="Disagree"
                total={credits}
                handleVote={(direction: number) => vote(index, direction)}
                vote={question.vote}
                creditSpent={question.credits}
                canVoteUp={canVoteUp}
                canVoteDown={canVoteDown}
                token="Credits"
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Quadratic
