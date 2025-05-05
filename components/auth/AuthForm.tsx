'use client';

import { toast } from 'sonner';

import SignInForm from '@/components/auth/SignInForm';
import SignUpForm from '@/components/auth/SignUpForm';
import { useAuthNavigation } from '@/hooks/useNavigation';
import { handleError } from '@/lib/utils';
import {
  SignInFormSchemaType,
  SignUpFormSchemaType,
} from '@/lib/schemas/authFormSchema';
import { AUTH_FORM_TYPES, AuthFormType } from '@/constants/forms';
import { TEXTS } from '@/constants/texts';

interface AuthFormProps {
  type: AuthFormType;
}

function AuthForm({ type }: AuthFormProps) {
  const { redirectToHome, redirectToSignIn } = useAuthNavigation();

  const isSignUp = type === AUTH_FORM_TYPES.SIGN_UP;

  async function handleSignIn(values: SignInFormSchemaType): Promise<void> {
    try {
      console.log('Sign in:', values);
      // TODO: add sign in logic

      toast.success('Sign in successful');
      redirectToHome();
    } catch (error: unknown) {
      handleError(error, 'signing in');
    }
  }

  async function handleSignUp(values: SignUpFormSchemaType): Promise<void> {
    try {
      console.log(values);
      // TODO: add sign up logic

      toast.success('Account successfully created. Please sign in');
      redirectToSignIn();
    } catch (error: unknown) {
      handleError(error, 'signing up');
    }
  }

  return (
    <div className="w-fit lg:min-w-md p-2 rounded-2xl dark-gradient border-1 border-primary/20">
      <div className="min-h-full flex flex-col gap-4 px-8 max-sm:px-2 max-md:px-4 max-lg:px-6 py-14 max-sm:py-8 max-md:py-10 max-lg:py-12 rounded-2xl">
        <div className="flex flex-col items-center gap-2 mb-4">
          <h1 className="text-center text-2xl font-semibold text-neutral-100">
            {TEXTS.AUTH_FORM.HEADER}
          </h1>
          <h2 className="text-center text-xl font-medium text-neutral-100">
            {TEXTS.AUTH_FORM.SUBHEADER}
          </h2>
        </div>

        {isSignUp ? (
          <SignUpForm onSubmit={handleSignUp} />
        ) : (
          <SignInForm onSubmit={handleSignIn} />
        )}
      </div>
    </div>
  );
}

export default AuthForm;
