'use client';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import FormField from '@/components/forms/FormField';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import {
  SIGN_IN_DEFAULT_VALUES,
  signInFormSchema,
  SignInFormSchemaType,
} from '@/lib/schemas/authFormSchema';
import { TEXTS } from '@/constants/texts';

interface SignInFormProps {
  onSubmit: (values: SignInFormSchemaType) => Promise<void>;
}

function SignInForm({ onSubmit }: SignInFormProps) {
  const form = useForm<SignInFormSchemaType>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: SIGN_IN_DEFAULT_VALUES,
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
          type="email"
          name="email"
          label="Email"
          placeholder="Type your email"
        />
        <FormField
          control={form.control}
          type="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
        />
        {/* TODO: create custom Button component */}
        <Button
          type="submit"
          disabled={!form.formState.isValid || form.formState.isSubmitting}
          className="w-full min-h-10 px-5 bg-primary/90 text-dark-100 hover:bg-primary rounded-md text-secondary font-bold cursor-pointer disabled:cursor-not-allowed"
        >
          {TEXTS.SIGN_IN_FORM.SUBMIT_BUTTON}
        </Button>

        <p className="text-center">
          {TEXTS.SIGN_IN_FORM.SIGN_UP_TEXT}{' '}
          <Link href={'/sign-up'} className="ml-1 font-medium text-blue-500">
            {TEXTS.SIGN_IN_FORM.SIGN_UP_LINK}
          </Link>
        </p>
      </form>
    </Form>
  );
}

export default SignInForm;
