import { useState, useEffect } from 'react'
import {
  startRecording,
  saveRecording,
  pauseRecording,
  resumeRecording,
} from 'utils/recorderControls'
import {
  Recorder,
  Interval,
  AudioTrack,
  MediaRecorderEvent,
} from 'components/Recorder'

const initialState: Recorder = {
  recordingMinutes: 0,
  recordingSeconds: 0,
  initRecording: false,
  mediaStream: null,
  mediaRecorder: null,
  audio: null,
  blob: null,
}

export default function useRecorder() {
  const [recorderState, setRecorderState] = useState<Recorder>(initialState)

  useEffect(() => {
    const MAX_RECORDER_TIME = 30
    let recordingInterval: Interval = null

    if (recorderState.initRecording)
      recordingInterval = setInterval(() => {
        setRecorderState((prevState: Recorder) => {
          const state = recorderState.mediaRecorder?.state

          if (prevState && !(state === 'paused')) {
            if (
              prevState.recordingMinutes === MAX_RECORDER_TIME &&
              prevState.recordingSeconds === 0
            ) {
              typeof recordingInterval === 'number' &&
                clearInterval(recordingInterval)
              return prevState
            }

            if (
              prevState.recordingSeconds >= 0 &&
              prevState.recordingSeconds < 59
            )
              return {
                ...prevState,
                recordingSeconds: prevState.recordingSeconds + 1,
              }
            else if (prevState.recordingSeconds === 59)
              return {
                ...prevState,
                recordingMinutes: prevState.recordingMinutes + 1,
                recordingSeconds: 0,
              }
            else return prevState
          } else {
            return prevState
          }
        })
      }, 1000)
    else
      typeof recordingInterval === 'number' && clearInterval(recordingInterval)

    return () => {
      typeof recordingInterval === 'number' && clearInterval(recordingInterval)
    }
  })

  useEffect(() => {
    setRecorderState(prevState => {
      if (prevState.mediaStream)
        return {
          ...prevState,
          mediaRecorder: new MediaRecorder(prevState.mediaStream),
        }
      else return prevState
    })
  }, [recorderState.mediaStream])

  useEffect(() => {
    const recorder = recorderState.mediaRecorder
    let chunks: Blob[] = []

    if (recorder) {
      recorder.onpause = () => {
        setRecorderState((prevState: Recorder) => ({
          ...prevState,
          mediaRecorder: recorder,
        }))
      }
    }

    if (recorder && recorder.state === 'inactive') {
      recorder.start()

      recorder.ondataavailable = (e: MediaRecorderEvent) => {
        chunks.push(e.data)
      }

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' })
        chunks = []

        setRecorderState((prevState: Recorder) => {
          if (prevState.mediaRecorder)
            return {
              ...initialState,
              blob,
              audio: window.URL.createObjectURL(blob),
            }
          else return initialState
        })
      }
    }

    return () => {
      if (recorder)
        recorder.stream
          .getAudioTracks()
          .forEach((track: AudioTrack) => track.stop())
    }
  }, [recorderState.mediaRecorder])

  return {
    recorderState,
    startRecording: () => startRecording(setRecorderState),
    cancelRecording: () => setRecorderState(initialState),
    saveRecording: () => saveRecording(recorderState.mediaRecorder),
    pauseRecording: () => pauseRecording(recorderState.mediaRecorder),
    resumeRecording: () => resumeRecording(recorderState.mediaRecorder),
  }
}
