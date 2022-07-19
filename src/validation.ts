import * as z from 'zod'

const validationSchema = z.object({
  surveyor: z.string().nonempty('Surveyors full name is required'),
})

export default validationSchema
