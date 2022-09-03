import * as z from 'zod'

const validationSchema = z
  .object({
    recording: z.instanceof(Blob).nullable(),
    method: z.string(),
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
      booth: z
        .string({ invalid_type_error: 'Select booth' })
        .min(1, { message: 'Select booth' }),
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
      majorCastes: z.any().refine(
        castes => {
          const count = Object.keys(castes).reduce((val, caste) => {
            if (castes[caste].selected) {
              return val + 1
            }

            return val
          }, 0)

          return count >= 3 && count <= 5
        },
        { message: 'Select min 3 and max 5 castes' },
      ),
    }),
    step5: z.object({
      winners2017: z.object({
        party: z.string({
          invalid_type_error: 'Select a winner of 2017 assembly elections',
        }),
        other: z.string().optional(),
      }),
      winReasons: z
        .string()
        .array()
        .min(1, { message: 'Please select at least 3 reasons' }),
      winReasonsOther: z.string().optional(),
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
          .number({ invalid_type_error: 'Please evaluate the performance' })
          .nonnegative({
            message: 'Number must be greater than or equal to 0',
          }),
        hasPosition: z.string({
          invalid_type_error: 'Please select on option',
        }),
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
    step7: z.object({
      bjpCandidates: z
        .object({
          selected: z.boolean(),
          name: z.string().optional(),
        })
        .array()
        .refine(candidates => candidates.find(({ selected }) => selected), {
          message: 'Please select at least 1 option',
        }),
      bjpCandidatesCastes: z
        .object({
          selected: z.boolean(),
          caste: z.string().optional(),
        })
        .array()
        .refine(candidates => candidates.find(({ selected }) => selected), {
          message: 'Please select at least 1 option',
        }),
      bjpCandidatesWealth: z
        .object({
          selected: z.boolean(),
          name: z.string().optional(),
        })
        .array()
        .refine(candidates => candidates.find(({ selected }) => selected), {
          message: 'Please select at least 1 option',
        }),
      bjpCandidatesPopularity: z
        .object({
          selected: z.boolean(),
          name: z.string().optional(),
        })
        .array()
        .refine(candidates => candidates.find(({ selected }) => selected), {
          message: 'Please select at least 1 option',
        }),
      bjpCandidatesProfession: z
        .object({
          selected: z.boolean(),
          profession: z.string().optional(),
        })
        .array()
        .refine(candidates => candidates.find(({ selected }) => selected), {
          message: 'Please select at least 1 option',
        }),
      winnableCandidate: z.string().array().min(1),
      bjpCandidatesPost: z
        .object({
          selected: z.boolean(),
          post: z.string().optional(),
        })
        .array()
        .refine(candidates => candidates.find(({ selected }) => selected), {
          message: 'Please select at least 1 option',
        }),
    }),
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
      bjpCandidatesCastes: z
        .object({
          selected: z.boolean(),
          caste: z.string().optional(),
        })
        .array()
        .refine(candidates => candidates.find(({ selected }) => selected), {
          message: 'Please select at least 1 option',
        }),
      bjpCandidatesWealth: z
        .object({
          selected: z.boolean(),
          name: z.string().optional(),
        })
        .array()
        .refine(candidates => candidates.find(({ selected }) => selected), {
          message: 'Please select at least 1 option',
        }),
      bjpCandidatesPopularity: z
        .object({
          selected: z.boolean(),
          name: z.string().optional(),
        })
        .array()
        .refine(candidates => candidates.find(({ selected }) => selected), {
          message: 'Please select at least 1 option',
        }),
      bjpCandidatesProfession: z
        .object({
          selected: z.boolean(),
          profession: z.string().optional(),
        })
        .array()
        .refine(candidates => candidates.find(({ selected }) => selected), {
          message: 'Please select at least 1 option',
        }),
      winnableCandidate: z.string().array().min(1),
      bjpCandidatesPost: z
        .object({
          selected: z.boolean(),
          post: z.string().optional(),
        })
        .array()
        .refine(candidates => candidates.find(({ selected }) => selected), {
          message: 'Please select at least 1 option',
        }),
    }),
    step9: z.object({
      possibleCandidates: z
        .object({
          selected: z.boolean(),
          candidate: z.string().optional(),
        })
        .array()
        .refine(candidates => candidates.find(({ selected }) => selected), {
          message: 'Please select at least 1 option',
        }),
    }),
    step10: z.any(),
    step11: z.any(), // TODO
    step12: z.any(),
    step13: z.any(),
  })
  .refine(
    ({ step11, method }) => {
      if (method === 'conjoint' && step11?.preferences) {
        return Object.keys(step11.preferences).length === 5
      }
      return true
    },
    {
      message: 'You must select 1 options for each group',
      path: ['step11'],
    },
  )
  .refine(
    ({ step12, method }) => {
      if (method === 'conjoint' && step12?.preferences) {
        return Object.keys(step12.preferences).length === 5
      }
      return true
    },
    {
      message: 'You must select 1 option for each group',
      path: ['step12'],
    },
  )
  .refine(
    ({ step11, method }) => {
      if (method === 'quadratic' && step11) {
        let credits = 0
        step11.forEach((e: any) => {
          credits = credits + e.credits
        })

        return credits !== 0
      }

      return true
    },
    {
      message: 'You must vote at least one issue',
      path: ['step11'],
    },
  )
  .refine(
    ({ step12, method }) => {
      if (method === 'quadratic' && step12) {
        let credits = 0
        step12.forEach((e: any) => {
          credits = credits + e.credits
        })

        return credits !== 0
      }
      return true
    },
    {
      message: 'You must vote at least one issue',
      path: ['step12'],
    },
  )
  .refine(
    ({ step11, method }) => {
      let flag = true
      if (method === 'likert' && step11) {
        Object.values(step11).forEach(o => {
          if (!o) {
            flag = false
          }
        })
      }
      return flag
    },
    {
      message: 'For each issue you must select an option',
      path: ['step11'],
    },
  )
  .refine(
    ({ step12, method }) => {
      let flag = true
      if (method === 'likert' && step12) {
        Object.values(step12).forEach(o => {
          if (!o) {
            flag = false
          }
        })
      }
      return flag
    },
    {
      message: 'For each issue you must select an option',
      path: ['step12'],
    },
  )

export default validationSchema
