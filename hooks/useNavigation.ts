import { useRouter } from 'next/navigation';

import { ROUTES } from '@/constants/routes';

export function useAuthNavigation() {
  const router = useRouter();

  return {
    redirectToHome: () => router.push(ROUTES.HOME),
    redirectToSignIn: () => router.push(ROUTES.SIGN_IN),
    redirectToSignUp: () => router.push(ROUTES.SIGN_UP),
  };
}
