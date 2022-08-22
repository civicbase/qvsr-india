interface Request {
  body?: any
  headers?: HeadersInit
  method?: 'DELETE'
}

// const baseEnpoint = 'http://localhost:5001/civic-base/us-central1/app'
const baseEnpoint = 'https://us-central1-civic-base.cloudfunctions.net/app'

const client = async (endpoint: string, { body, ...other }: Request = {}) => {
  const headers: HeadersInit = { 'content-type': 'application/json' }

  //   if (storage.hasToken()) {
  //     headers.Authorization = `Bearer ${storage.getToken()}`
  //   }

  const config: RequestInit = {
    method: body ? 'POST' : 'GET',
    ...other,
    headers: {
      ...headers,
      ...other.headers,
    },

    credentials: 'include',
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  return window
    .fetch(`${baseEnpoint}/${endpoint}`, config)
    .then(async response => {
      const data = await response.json()

      if (response.ok) {
        return data
      } else {
        return Promise.reject(data)
      }
    })
}

export default client
