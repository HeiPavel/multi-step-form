import {z} from 'zod'

export const schema = z.object({
  name: z.string()
    .min(1, {message: 'This field is required'})
    .max(60, {message: 'Maximum length of Full name is 60 letters.'})
    .refine(
      string => string.split(' ').filter(name => name).length >= 2,
      'First and Last names required splited by space.'
    )
    .refine(
      string => string.split(' ').filter(name => name).every(name => name.length >= 2),
      'Each name should have 2 or more letters.'
    )
    .refine(
      string => /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/.test(string),
      "Only letters, spaces, apostrophes (') and hyphens (-) are allowed."
    ),
  email: z.string()
    .min(1, {message: 'This field is required'})
    .max(128, {message: 'Max length 128 characters.'})
    .email(),
  phoneNumber: z.string()
    .min(1, {message: 'This field is required'})
    .regex(
      /^\+(?=(?:\D*\d){10,12}\D*$)[0-9 ]+$/,
      { message: 'Invalid phone number format' }
    ),
  plan: z.enum(['arcade', 'advanced', 'pro']),
  isAnnually: z.boolean(),
  add: z.array(z.enum(['service', 'storage', 'profile']))
})

export type UserData = z.infer<typeof schema>

export type FieldNames = keyof UserData

export type IsFieldRequired = {
  [key in keyof UserData]: boolean
}

export const isFieldRequired: IsFieldRequired = {
  name: true,
  email: true,
  phoneNumber: true,
  plan: false,
  isAnnually: false,
  add: false
}

export const fieldsByStep: FieldNames[][] = [
  ['name', 'email', 'phoneNumber'],
  ['plan', 'isAnnually'],
  ['add'],
  []
]

export type ValueFromField<T> = T extends readonly any[] ? T[number] : T

export type ServicePriceType<T extends keyof Pick<UserData, 'plan' | 'add'>> = {
  [K in ValueFromField<UserData[T]>]: number 
}

export const planPrice: ServicePriceType<'plan'> = {
  arcade: 9,
  advanced: 12,
  pro: 15
}

export const addPrice: ServicePriceType<'add'> = {
  service: 1,
  storage: 2,
  profile: 2
}