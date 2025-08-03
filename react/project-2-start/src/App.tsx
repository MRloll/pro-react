import { useState, type ChangeEvent, type FormEvent } from 'react';
import ProductCard from './components/ProductCard';
import Modal from './components/Ui/Modal';
import { categories, colors, formInputsList, productList } from './data';
import Button from './components/Ui/Button';
import Input from './components/Ui/Input';
import type { IProduct } from './interfaces';
import { productValidation } from './validation';
import ErrorMessage from './components/ErrorMessage';
import CircleColor from './components/CircleColor';
import Select from './components/Ui/Select';
import { v4 as uuid } from 'uuid';

const App = () => {
  const defaultProduct = {
    title: '',
    description: '',
    imageURL:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    price: '',
    colors: [],
    category: {
      name: '',
      imageURL: '',
    },
  };
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    imageURL: '',
    price: '',
    colors: '',
  });
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const renderProducts = products.map((product) => (
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
      colors: tempColors,
    });

    const hasErrorMsg =
      Object.values(errors).some((value) => value === '') &&
      Object.values(errors).every((value) => value === '');

    if (!hasErrorMsg) {
      setErrors({
        ...errors,
        colors: errors.colors.toString(),
      });
      return;
    }

    //submit
    setProducts((prev) => [
      {
        ...product,
        colors: tempColors,
        category: selectedCategory,
        id: uuid(),
      },
      ...prev,
    ]);
    setTempColors([]);
    setProduct(defaultProduct);
    close();
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
    <CircleColor
      color={color}
      key={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColors((prev) => prev.filter((c) => c !== color));
          return;
        }
        setTempColors((prev) => [...prev, color]);
        setErrors({
          ...errors,
          colors: '',
        });
      }}
    />
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
          <ErrorMessage msg={errors.colors} />
          <div className="flex gap-2 items-center my-2">
            {tempColors.map((color) => (
              <span key={color} style={{ backgroundColor: color }}>
                {color}
              </span>
            ))}
          </div>
          <Select
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />
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
