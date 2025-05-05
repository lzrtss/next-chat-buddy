import { z } from 'zod';

const baseAuthSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .max(100, { message: 'Email must not exceed 100 characters' })
    .transform(val => val.toLowerCase().trim()),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .max(50, { message: 'Password must not exceed 50 characters' })
    .regex(/[A-Z]/, {
      message: 'Password must contain at least one uppercase letter',
    })
    .regex(/[a-z]/, {
      message: 'Password must contain at least one lowercase letter',
    })
    .regex(/[0-9]/, { message: 'Password must contain at least one number' })
    .regex(/[!@#$%^&*()_,.?":{}|<>]/, {
      message: 'Password must contain at least one special character',
    }),
});

export const signUpFormSchema = baseAuthSchema
  .extend({
    username: z
      .string()
      .min(2, { message: 'Username must be at least 2 characters' })
      .max(50, { message: 'Username must not exceed 50 characters' })
      .regex(/^[a-zA-Z0-9_-]+$/, {
        message:
          'Username can only contain letters, numbers, underscores, and hyphens',
      })
      .trim(),
    confirmPassword: z
      .string()
      .min(8, { message: 'Confirm password must be at least 8 characters' }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const signInFormSchema = baseAuthSchema;

export type SignUpFormSchemaType = z.infer<typeof signUpFormSchema>;
export type SignInFormSchemaType = z.infer<typeof signInFormSchema>;

export const SIGN_IN_DEFAULT_VALUES: SignInFormSchemaType = {
  email: '',
  password: '',
};

export const SIGN_UP_DEFAULT_VALUES: SignUpFormSchemaType = {
  ...SIGN_IN_DEFAULT_VALUES,
  confirmPassword: '',
  username: '',
};
