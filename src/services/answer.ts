import client from './api'

export const uploadRecord = (file: Blob) =>
  client(`uploadRecord`, {
    body: file,
    headers: { 'content-type': 'multipart/form-data' },
  })

export const createAnswer = (answer: any, file: Blob) => {
  return uploadRecord(file).then(recording =>
    client('createIndiaAnswer', { body: { ...answer, recording } }),
  )
}
