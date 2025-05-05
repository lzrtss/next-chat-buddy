import AuthForm from '@/components/auth/AuthForm';
import { AUTH_FORM_TYPES } from '@/constants/forms';

function SignUp() {
  return (
    <div className="m-4">
      <AuthForm type={AUTH_FORM_TYPES.SIGN_UP} />;
    </div>
  );
}

export default SignUp;
