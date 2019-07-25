export interface Token {
  email: string;
  password?: string;
  role: string;
  iat: number;
  exp: number;
}
