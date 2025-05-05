export const TEXTS = {
  AUTH_FORM: {
    HEADER: 'ChatAI',
    SUBHEADER: 'Chat with your AI Buddy',
  },
  SIGN_UP_FORM: {
    TITLE: 'Create your account',
    USERNAME_LABEL: 'Username',
    EMAIL_LABEL: 'Email',
    PASSWORD_LABEL: 'Password',
    CONFIRM_PASSWORD_LABEL: 'Confirm Password',
    SUBMIT_BUTTON: 'Create an account',
    SIGN_IN_LINK: 'Sign in',
    SIGN_IN_TEXT: 'Already have an account?',
  },
  SIGN_IN_FORM: {
    TITLE: 'Log in to your account',
    EMAIL_LABEL: 'Email',
    PASSWORD_LABEL: 'Password',
    SUBMIT_BUTTON: 'Sign in',
    SIGN_UP_LINK: 'Create an account',
    SIGN_UP_TEXT: 'No account yet?',
  },
} as const;

export type Texts = typeof TEXTS;
