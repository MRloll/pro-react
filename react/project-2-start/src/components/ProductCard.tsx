import Image from './Image';
import Button from './Ui/Button';
import type { IProduct } from '../interfaces';
import { textSlicer } from '../utils/functions';
import CircleColor from './CircleColor';

interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEditModal: () => void;
}

const ProductCard = ({ product, setProductToEdit, openEditModal }: IProps) => {
  const { imageURL, price, description, title, colors, category } = product;
  // handlers
  const onEdit = () => {
    setProductToEdit(product);
    openEditModal();
  };
  return (
    <div className="border rounded-md p-2 flex flex-col">
      <Image className="rounded-2xl" alt="asd" imageURL={imageURL} />
      <h3>{title} </h3>
      <p>{textSlicer(description, 50)}</p>
      <div className="flex gap-2 items-center my-2">
        {colors.map((color) => (
          <CircleColor color={color} key={color} />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span>{price}</span>

        <Image
          className="rounded-full w-10 h-10"
          alt="asd"
          imageURL={category.imageURL}
        />
      </div>
      <div className="flex gap-4 mt-5">
        <Button
          onClick={() => {
            console.log('delete');
          }}
          className="bg-red-500"
        >
          Delete
        </Button>
        <Button className="bg-indigo-500" onClick={onEdit}>
          Edit
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
