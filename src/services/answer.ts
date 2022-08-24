import client from './api'
import ShortUniqueId from 'short-unique-id'

const uid = new ShortUniqueId({ length: 16 })

export const uploadRecord = (file: Blob, fileId: string) =>
  client(`uploadRecord/${fileId}`, {
    body: file,
    headers: { 'content-type': 'multipart/form-data' },
  })

export const createAnswer = (answer: any, file: Blob) => {
  const fileId = uid()

  const p1 = uploadRecord(file, fileId)
  const p2 = client('createIndiaAnswer', {
    body: { ...answer, recordId: fileId },
  })

  return Promise.all([p1, p2])
}
