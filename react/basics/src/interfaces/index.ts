export interface IUser {
  email: string;
  pass: string;
  username: string;
}

export interface IFormInput {
  label: string;
  type: string;
  name: keyof IUser;
  id: string;
}
