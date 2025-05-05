'use client'; // TODO: remove this when useRouter is not used in the component

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import SignInForm from '@/components/auth/SignInForm';
import SignUpForm from '@/components/auth/SignUpForm';
import {
  SignInFormSchemaType,
  SignUpFormSchemaType,
} from '@/lib/schemas/authFormSchema';
import { TEXTS } from '@/constants/texts';

interface AuthFormProps {
  type: 'sign-in' | 'sign-up';
}

function AuthForm({ type }: AuthFormProps) {
  const router = useRouter(); // TODO: move into a custom hook

  const isSignUp = type === 'sign-up';

  async function handleSignIn(values: SignInFormSchemaType): Promise<void> {
    try {
      console.log('Sign in:', values);
      // TODO: add sign in logic

      toast.success('Sign in successful');
      router.push('/'); // TODO: replace with a constant
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(`Error signing in: ${error.message}`);
      } else {
        toast.error('An unknown error occurred');
      }
    }
  }

  async function handleSignUp(values: SignUpFormSchemaType): Promise<void> {
    try {
      console.log(values);
      // TODO: add sign up logic

      toast.success('Account successfully created. Please sign in');
      router.push('/sign-in'); // TODO: replace with a constant
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(`Error signing up: ${error.message}`);
      } else {
        toast.error('An unknown error occurred');
      }
    }
  }

  return (
    <div className="w-fit lg:min-w-[480px] p-0.5 rounded-2xl dark-gradient border-1 border-primary/20">
      <div className="min-h-full flex flex-col gap-4 px-10 py-14 rounded-2xl">
        <div className="flex flex-col items-center gap-2 mb-4">
          <h1 className="text-2xl font-semibold text-neutral-100">
            {TEXTS.AUTH_FORM.HEADER}
          </h1>
          <h2 className="text-xl font-medium text-neutral-100">
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
