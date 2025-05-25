import { useState, type ChangeEvent, type FormEvent } from 'react';
import ProductCard from './components/ProductCard';
import Modal from './components/Ui/Modal';
import { formInputsList, productList } from './data';
import Button from './components/Ui/Button';
import Input from './components/Ui/Input';
import type { IProduct } from './interfaces';

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

  let [isOpen, setIsOpen] = useState(true);

  const renderProducts = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const onCancel = () => {
    setProduct(defaultProduct);
    close();
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(product);
  };

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

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
    </div>
  ));

  return (
    <main className="container mx-auto">
      <Button className="bg-indigo-500" onClick={open}>
        Add
      </Button>

      <Modal isOpen={isOpen} closeModal={close} title="Modal Title">
        <form onSubmit={submitHandler} className="space-y-2">
          {renderFormInputList}
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
