'use client';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import CustomButton from '@/components/forms/CustomButton';
import FormField from '@/components/forms/FormField';
import { Form } from '@/components/ui/form';
import {
  SIGN_UP_DEFAULT_VALUES,
  signUpFormSchema,
  SignUpFormSchemaType,
} from '@/lib/schemas/authFormSchema';
import { TEXTS } from '@/constants/texts';
import { ROUTES } from '@/constants/routes';
import {
  FIELD_LABELS,
  FIELD_NAMES,
  FIELD_PLACEHOLDERS,
  INPUT_TYPES,
} from '@/constants/forms';

interface SignUpFormProps {
  onSubmit: (values: SignUpFormSchemaType) => Promise<void>;
}

function SignUpForm({ onSubmit }: SignUpFormProps) {
  const form = useForm<SignUpFormSchemaType>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: SIGN_UP_DEFAULT_VALUES,
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
        aria-labelledby="sign-up-title"
        className="w-full space-y-6"
      >
        <h3
          id="sign-up-title"
          className="text-center text-lg font-medium text-neutral-100"
        >
          {TEXTS.SIGN_UP_FORM.TITLE}
        </h3>

        <FormField
          control={form.control}
          name={FIELD_NAMES.USERNAME}
          label={FIELD_LABELS[FIELD_NAMES.USERNAME]}
          placeholder={FIELD_PLACEHOLDERS[FIELD_NAMES.USERNAME]}
        />
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
        <FormField
          control={form.control}
          type={INPUT_TYPES.PASSWORD}
          name={FIELD_NAMES.CONFIRM_PASSWORD}
          label={FIELD_LABELS[FIELD_NAMES.CONFIRM_PASSWORD]}
          placeholder={FIELD_PLACEHOLDERS[FIELD_NAMES.CONFIRM_PASSWORD]}
        />

        <CustomButton
          disabled={!form.formState.isValid || form.formState.isSubmitting}
          className="mt-4"
        >
          {TEXTS.SIGN_IN_FORM.SUBMIT_BUTTON}
        </CustomButton>

        <p className="text-center">
          {TEXTS.SIGN_UP_FORM.SIGN_IN_TEXT}{' '}
          <Link
            href={ROUTES.SIGN_IN}
            className="ml-1 font-medium text-blue-500"
          >
            {TEXTS.SIGN_UP_FORM.SIGN_IN_LINK}
          </Link>
        </p>
      </form>
    </Form>
  );
}

export default SignUpForm;
