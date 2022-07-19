import { SetRecorder } from 'components/Recorder'

export async function startRecording(setRecorderState: SetRecorder) {
  try {
    const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    })

    setRecorderState((prevState: any) => {
      return {
        ...prevState,
        initRecording: true,
        mediaStream: stream,
      }
    })
  } catch (err) {
    console.log(err)
  }
}

export function pauseRecording(recorder: MediaRecorder | null) {
  if (recorder?.state !== 'inactive') recorder?.pause()
}

export function resumeRecording(recorder: MediaRecorder | null) {
  if (recorder?.state !== 'inactive') recorder?.resume()
}

export function saveRecording(recorder: MediaRecorder | null) {
  if (recorder?.state !== 'inactive') recorder?.stop()
}

export const getFileBlob = (url: string, cb: (blob: Blob) => void) => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.responseType = 'blob'
  xhr.addEventListener('load', function () {
    cb(xhr.response)
  })
  xhr.send()
}

export const blobToBase64 = (blob: Blob) => {
  const reader = new FileReader()

  reader.readAsDataURL(blob)

  return new Promise(resolve => {
    reader.onloadend = () => {
      resolve(reader.result)
    }
  })
}
