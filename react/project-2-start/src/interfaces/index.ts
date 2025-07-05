export interface IInputs {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}

export interface IProduct extends IInputs {
  id?: string;
  colors: string[];
  category: {
    name: string;
    imageURL: string;
  };
}

export interface IFormInput {
  id: string;
  name: keyof IInputs;
  label: string;
  type: string;
}

export interface ICategory {
  id: string;
  name: string;
  imageURL: string;
}
