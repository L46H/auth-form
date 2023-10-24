export interface CurrentUser {
  username: string;
  email: string;
  bio: string | null;
  image: string | null;
  token: string;
}