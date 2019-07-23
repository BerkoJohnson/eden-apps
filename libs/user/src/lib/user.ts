export interface User {
  name: string;
  email: string;
  password: string;
  contacts?: string[];
  role?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
