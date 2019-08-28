export interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  contacts?: string[];
  role?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
