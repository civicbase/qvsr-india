import * as z from 'zod'
import { castes } from 'utils/castes'

const validationSchema = z.object({
  step1: z.object({
    surveyor: z
      .string()
      .trim()
      .min(1, { message: 'Surveyors full name is required' }),
  }),
  step2: z.object({
    assemblyArea: z
      .string({ invalid_type_error: 'Select an assembly area' })
      .min(1, { message: 'Select an assembly area' }),
    parliamentaryArea: z
      .string({ invalid_type_error: 'Select a parliamentary area' })
      .min(1, { message: 'Select a parliamentary area' }),
  }),
  step3: z.object({
    assemblyProfile: z.string().optional(),
    voterPopulation: z
      .number({ invalid_type_error: 'Expected number, received nan' })
      .nonnegative({ message: 'Number must be greater than or equal to 0' }),
    maleVoterPopulation: z
      .number({ invalid_type_error: 'Expected number, received nan' })
      .nonnegative({ message: 'Number must be greater than or equal to 0' }),
    femaleVoterPopulation: z
      .number({ invalid_type_error: 'Expected number, received nan' })
      .nonnegative({ message: 'Number must be greater than or equal to 0' }),
    avarageVotingPercentage: z
      .number({ invalid_type_error: 'Expected number, received nan' })
      .nonnegative({ message: 'Number must be greater than or equal to 0' }),
    numberBooths: z
      .number({ invalid_type_error: 'Expected number, received nan' })
      .nonnegative({ message: 'Number must be greater than or equal to 0' }),
  }),
  step4: z.object({
    majorCastes: z.any(), // TODO validation
  }),
  step5: z.object({
    winners2017: z.string({
      invalid_type_error: 'Select a winner of 2017 assembly elections',
    }),
    voteShare: z
      .number({ invalid_type_error: 'Expected number, received nan' })
      .nonnegative({ message: 'Number must be greater than or equal to 0' }),
    currentMLA: z.object({
      name: z
        .string({
          invalid_type_error: 'Please fill this field',
        })
        .min(1, { message: 'Please fill this field' }),
      caste: z.string({
        invalid_type_error: 'Select current MLA caste',
      }),
      performance: z
        .number({ invalid_type_error: 'Expected number, received nan' })
        .nonnegative({ message: 'Number must be greater than or equal to 0' }),
      hasPosition: z.string({ invalid_type_error: 'Please select on option' }),
    }),
  }),
  step6: z.object({
    firstRunnersAssemblyElections: z.object({
      party: z.string().min(1, { message: 'Please fill this field' }),
      candidate: z.string().min(1, { message: 'Please fill this field' }),
      candidateCaste: z.string({
        invalid_type_error: 'Please fill this field',
      }),
    }),
    voteShare: z
      .number({ invalid_type_error: 'Expected number, received nan' })
      .nonnegative({ message: 'Number must be greater than or equal to 0' }),

    assetValue: z
      .number({ invalid_type_error: 'Expected number, received nan' })
      .nonnegative({ message: 'Number must be greater than or equal to 0' }),

    lossReason: z.any(), // TODO
  }),
})

export default validationSchema
