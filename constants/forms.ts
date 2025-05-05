export const AUTH_FORM_TYPES = {
  SIGN_IN: 'sign-in',
  SIGN_UP: 'sign-up',
} as const;

export const INPUT_TYPES = {
  TEXT: 'text',
  EMAIL: 'email',
  PASSWORD: 'password',
} as const;

export const FIELD_NAMES = {
  EMAIL: 'email',
  PASSWORD: 'password',
  USERNAME: 'username',
  CONFIRM_PASSWORD: 'confirmPassword',
} as const;

export const FIELD_LABELS = {
  [FIELD_NAMES.EMAIL]: 'Email',
  [FIELD_NAMES.PASSWORD]: 'Password',
  [FIELD_NAMES.USERNAME]: 'Username',
  [FIELD_NAMES.CONFIRM_PASSWORD]: 'Confirm Password',
} as const;

export const FIELD_PLACEHOLDERS = {
  [FIELD_NAMES.EMAIL]: 'Type your email',
  [FIELD_NAMES.PASSWORD]: 'Enter your password',
  [FIELD_NAMES.USERNAME]: 'Type your username',
  [FIELD_NAMES.CONFIRM_PASSWORD]: 'Confirm your password',
} as const;

export type InputType = (typeof INPUT_TYPES)[keyof typeof INPUT_TYPES];
export type AuthFormType =
  (typeof AUTH_FORM_TYPES)[keyof typeof AUTH_FORM_TYPES];
