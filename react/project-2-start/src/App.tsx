import { useState, type ChangeEvent, type FormEvent } from 'react';
import ProductCard from './components/ProductCard';
import Modal from './components/Ui/Modal';
import { colors, formInputsList, productList } from './data';
import Button from './components/Ui/Button';
import Input from './components/Ui/Input';
import type { IProduct } from './interfaces';
import { productValidation } from './validation';
import ErrorMessage from './components/ErrorMessage';
import CircleColor from './components/CircleColor';

const App = () => {
  const defaultProduct = {
    title: '',
    description: '',
    imageURL: '',
    price: '',
    colors: [],
    category: {
      name: '',
      imageURL: '',
    },
  };
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    imageURL: '',
    price: '',
  });

  const [isOpen, setIsOpen] = useState(true);

  const renderProducts = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const onCancel = () => {
    setProduct(defaultProduct);
    close();
  };

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { title, description, imageURL, price } = product;

    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });

    const hasErrorMsg =
      Object.values(errors).some((value) => value === '') &&
      Object.values(errors).every((value) => value === '');

    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    //submit
    console.log('sssssssssS', errors);
  };

  const renderFormInputList = formInputsList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-[3px] text-sm font-medium text-grey-700"
      >
        {input.label}
      </label>
      <Input
        value={product[input.name]}
        onChange={onChangeHandler}
        id={input.id}
        name={input.name}
        type={input.type}
      />
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));

  const renderProductColors = colors.map((color) => (
    <CircleColor color={color} key={color} />
  ));

  return (
    <main className="container mx-auto">
      <Button className="bg-indigo-500" onClick={open}>
        Add
      </Button>

      <Modal isOpen={isOpen} closeModal={close} title="Modal Title">
        <form onSubmit={submitHandler} className="space-y-2">
          {renderFormInputList}
          <div className="flex gap-2 items-center my-2">
            {renderProductColors}
          </div>
          <div className="flex gap-2">
            <Button className="bg-indigo-500">Submit</Button>
            <Button className="bg-gray-300" onClick={onCancel}>
              cancel
            </Button>
          </div>
        </form>
      </Modal>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 gap-4 m-5">
        {renderProducts}
      </div>
    </main>
  );
};

export default App;
