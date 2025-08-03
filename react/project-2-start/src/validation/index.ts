import type { IInputs } from '../interfaces';

export const productValidation = (product: IInputs) => {
  const errors: IInputs = {
    title: '',
    description: '',
    imageURL: '',
    price: '',
    colors: '',
  };

  const validUrl = /(https?:\/\/[^\s]+)/g.test(product.imageURL);

  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = 'titel not valid';
  }

  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 80
  ) {
    errors.description = 'description not valid';
  }

  if (!product.imageURL.trim() || !validUrl) {
    errors.imageURL = 'image url not valid';
  }

  if (!product.price.trim() || isNaN(Number(product.price))) {
    errors.price = 'Price not valid';
  }

  if (!product.colors.length) {
    console.log('sssssssssssssss');
    errors.colors = 'please select at least one color';
  }

  return errors;
};
