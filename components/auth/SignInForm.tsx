'use client';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import CustomButton from '@/components/forms/CustomButton';
import FormField from '@/components/forms/FormField';
import { Form } from '@/components/ui/form';
import {
  SIGN_IN_DEFAULT_VALUES,
  signInFormSchema,
  SignInFormSchemaType,
} from '@/lib/schemas/authFormSchema';
import { TEXTS } from '@/constants/texts';
import { ROUTES } from '@/constants/routes';
import {
  FIELD_LABELS,
  FIELD_NAMES,
  FIELD_PLACEHOLDERS,
  INPUT_TYPES,
} from '@/constants/forms';

interface SignInFormProps {
  onSubmit: (values: SignInFormSchemaType) => Promise<void>;
}

function SignInForm({ onSubmit }: SignInFormProps) {
  const form = useForm<SignInFormSchemaType>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: SIGN_IN_DEFAULT_VALUES,
    mode: 'onChange',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        role="form"
        autoComplete="off"
        aria-labelledby="sign-in-title"
        className="w-full space-y-6"
      >
        <h3
          id="sign-in-title"
          className="text-center text-lg font-medium text-neutral-100"
        >
          {TEXTS.SIGN_IN_FORM.TITLE}
        </h3>

        <FormField
          control={form.control}
          type={INPUT_TYPES.EMAIL}
          name={FIELD_NAMES.EMAIL}
          label={FIELD_LABELS[FIELD_NAMES.EMAIL]}
          placeholder={FIELD_PLACEHOLDERS[FIELD_NAMES.EMAIL]}
        />
        <FormField
          control={form.control}
          type={INPUT_TYPES.PASSWORD}
          name={FIELD_NAMES.PASSWORD}
          label={FIELD_LABELS[FIELD_NAMES.PASSWORD]}
          placeholder={FIELD_PLACEHOLDERS[FIELD_NAMES.PASSWORD]}
        />

        <CustomButton
          disabled={!form.formState.isValid || form.formState.isSubmitting}
          className="mt-4"
        >
          {TEXTS.SIGN_IN_FORM.SUBMIT_BUTTON}
        </CustomButton>

        <p className="text-center">
          {TEXTS.SIGN_IN_FORM.SIGN_UP_TEXT}{' '}
          <Link
            href={ROUTES.SIGN_UP}
            className="ml-1 font-medium text-blue-500"
          >
            {TEXTS.SIGN_IN_FORM.SIGN_UP_LINK}
          </Link>
        </p>
      </form>
    </Form>
  );
}

export default SignInForm;
