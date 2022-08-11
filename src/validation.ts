import * as z from 'zod'

const validationSchema = z.object({
  // step1: z.object({
  //   surveyor: z
  //     .string()
  //     .trim()
  //     .min(1, { message: 'Surveyors full name is required' }),
  // }),
  // step2: z.object({
  //   assemblyArea: z
  //     .string({ invalid_type_error: 'Select an assembly area' })
  //     .min(1, { message: 'Select an assembly area' }),
  //   parliamentaryArea: z
  //     .string({ invalid_type_error: 'Select a parliamentary area' })
  //     .min(1, { message: 'Select a parliamentary area' }),
  // }),
  // step3: z.object({
  //   assemblyProfile: z.string().optional(),
  //   voterPopulation: z
  //     .number({ invalid_type_error: 'Expected number, received nan' })
  //     .nonnegative({ message: 'Number must be greater than or equal to 0' }),
  //   maleVoterPopulation: z
  //     .number({ invalid_type_error: 'Expected number, received nan' })
  //     .nonnegative({ message: 'Number must be greater than or equal to 0' }),
  //   femaleVoterPopulation: z
  //     .number({ invalid_type_error: 'Expected number, received nan' })
  //     .nonnegative({ message: 'Number must be greater than or equal to 0' }),
  //   avarageVotingPercentage: z
  //     .number({ invalid_type_error: 'Expected number, received nan' })
  //     .nonnegative({ message: 'Number must be greater than or equal to 0' }),
  //   numberBooths: z
  //     .number({ invalid_type_error: 'Expected number, received nan' })
  //     .nonnegative({ message: 'Number must be greater than or equal to 0' }),
  // }),
  // step4: z.object({
  //   majorCastes: z.any().refine(
  //     castes => {
  //       const count = Object.keys(castes).reduce((val, caste) => {
  //         if (castes[caste].selected) {
  //           return val + 1
  //         }

  //         return val
  //       }, 0)

  //       return count >= 3 && count <= 5
  //     },
  //     { message: 'Select min 3 and max 5 castes' },
  //   ),
  // }),
  // step5: z.object({
  //   winners2017: z.object({
  //     party: z.string({
  //       invalid_type_error: 'Select a winner of 2017 assembly elections',
  //     }),
  //     other: z.string().optional(),
  //   }),
  //   winReasons: z
  //     .string()
  //     .array()
  //     .min(1, { message: 'Please select at least 3 reasons' }),
  //   winReasonsOther: z.string().optional(),
  //   voteShare: z
  //     .number({ invalid_type_error: 'Expected number, received nan' })
  //     .nonnegative({ message: 'Number must be greater than or equal to 0' }),
  //   currentMLA: z.object({
  //     name: z
  //       .string({
  //         invalid_type_error: 'Please fill this field',
  //       })
  //       .min(1, { message: 'Please fill this field' }),
  //     caste: z.string({
  //       invalid_type_error: 'Select current MLA caste',
  //     }),
  //     performance: z
  //       .number({ invalid_type_error: 'Please evaluate the performance' })
  //       .nonnegative({ message: 'Number must be greater than or equal to 0' }),
  //     hasPosition: z.string({ invalid_type_error: 'Please select on option' }),
  //   }),
  // }),
  // step6: z.object({
  //   firstRunnersAssemblyElections: z.object({
  //     party: z.string().min(1, { message: 'Please fill this field' }),
  //     candidate: z.string().min(1, { message: 'Please fill this field' }),
  //     candidateCaste: z.string({
  //       invalid_type_error: 'Please fill this field',
  //     }),
  //   }),
  //   voteShare: z
  //     .number({ invalid_type_error: 'Expected number, received nan' })
  //     .nonnegative({ message: 'Number must be greater than or equal to 0' }),

  //   assetValue: z
  //     .number({ invalid_type_error: 'Expected number, received nan' })
  //     .nonnegative({ message: 'Number must be greater than or equal to 0' }),

  //   lossReason: z.any(), // TODO
  // }),
  step8: z.object({
    bjpCandidates: z
      .object({
        selected: z.boolean(),
        name: z.string().optional(),
      })
      .array()
      .refine(candidates => candidates.find(({ selected }) => selected), {
        message: 'Please select at least 1 option',
      }),
  }),
})

export default validationSchema
