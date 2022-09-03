import tw from 'twin.macro'
import React from 'react'
import Card from 'components/Card'

type PagesLayoutProps = {
  header: React.ReactNode
  footer: React.ReactNode
  content: React.ReactNode
  geolocation?: React.ReactNode
  recording?: React.ReactNode
}

const styles = {
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center h-screen w-screen`,
    hasBackground && tw`bg-gradient-to-b from-brand via-bgColor11 to-brand2`,
  ],
}

const PagesLayout = ({
  footer,
  content,
  geolocation,
  header,
  recording,
}: PagesLayoutProps) => {
  return (
    <div css={styles.container({ hasBackground: true })}>
      <Card css={tw`relative`}>
        {header}
        {geolocation}
        {recording}
        <div id="content" css={tw`flex-1 overflow-y-auto px-4 py-2`}>
          {content}
        </div>
        <div css={tw`justify-end`}>{footer}</div>
      </Card>
    </div>
  )
}

export default PagesLayout
