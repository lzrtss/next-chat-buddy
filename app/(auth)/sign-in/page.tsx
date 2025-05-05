import AuthForm from '@/components/auth/AuthForm';
import { AUTH_FORM_TYPES } from '@/constants/forms';

function SignIn() {
  return (
    <div className="m-4">
      <AuthForm type={AUTH_FORM_TYPES.SIGN_IN} />
    </div>
  );
}

export default SignIn;
