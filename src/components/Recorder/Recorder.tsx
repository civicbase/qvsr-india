import { IconButton } from 'components/Button'
import { useRecorder } from 'context/Recorder'
import { BsStop } from 'react-icons/bs'
import tw, { theme } from 'twin.macro'

const VoiceRecorder = () => {
  const { recorderState, startRecording, saveRecording } = useRecorder()
  const { initRecording } = recorderState

  const state: string = recorderState.mediaRecorder?.state || ''

  const handleRecording = () => {
    startRecording()
  }

  return (
    <div css={tw`flex justify-center mt-4`}>
      <div css={tw`flex`}>
        {initRecording && state === 'paused' && (
          <IconButton
            onClick={saveRecording}
            css={[tw`focus:ring-0 outline-none rounded-full h-12 w-12 mr-4`]}
            style={{
              background:
                'linear-gradient(135deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25))',
              boxShadow:
                '12px 12px 16px 0 rgba(0, 0, 0, 0.25), -8px -8px 12px 0 rgba(255, 255, 255, 0.3)',
            }}
          >
            <BsStop size={24} color={theme`colors.bgColor0`} />
          </IconButton>
        )}
        <IconButton
          onClick={handleRecording}
          css={[tw`focus:ring-0 outline-none rounded-full h-12 w-12 relative`]}
          style={{
            background:
              'linear-gradient(135deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25))',
            boxShadow:
              '12px 12px 16px 0 rgba(0, 0, 0, 0.25), -8px -8px 12px 0 rgba(255, 255, 255, 0.3)',
          }}
        >
          <div css={[tw`rounded-full bg-red-500 h-3 w-3`]} />
        </IconButton>
      </div>
    </div>
  )
}

export default VoiceRecorder
