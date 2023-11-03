export interface SignupCredentials {
  user: {
    username?: string | null;
    email?: string | null;
    password?: string | null;
    passwordConfirmation?: string | null;
  };
}
