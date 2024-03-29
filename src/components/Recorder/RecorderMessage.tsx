import { Subtitle } from 'components/Typography'
import { useRecorder } from 'context/Recorder'
import React from 'react'
import tw from 'twin.macro'

const RecorderMessage = ({ children }: { children: React.ReactNode }) => {
  const { recorderState } = useRecorder()

  if (recorderState.initRecording || recorderState.blob) {
    return null
  }

  return (
    <div
      css={tw`backdrop-blur-3xl absolute w-full h-full left-0 bg-white bg-opacity-90 flex justify-center items-center flex-col z-40`}
    >
      <div css={tw`text-center absolute top-10 mx-10`}>
        <Subtitle>
          Primary Research Himachal Pradesh Assembly Election 2022
        </Subtitle>
      </div>
      Please start the recording
      {children}
    </div>
  )
}

export default RecorderMessage
