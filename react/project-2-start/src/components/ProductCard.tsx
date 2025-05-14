import Image from "./Image";
import Button from "./Ui/Button";
import type { IProduct } from "../interfaces";
import { textSlicer } from "../utils/functions";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { imageURL, price, description, title } = product;
  return (
    <div className="border rounded-md p-2 flex flex-col">
      <Image className="rounded-2xl" alt="asd" imageURL={imageURL} />
      <h3>{title} </h3>
      <p>{textSlicer(description, 50)}</p>
      <div className="flex gap-2 items-center my-2">
        <span className="w-5 h-5 rounded-full bg-red-400"></span>
        <span className="w-5 h-5 rounded-full bg-yellow-400"></span>
        <span className="w-5 h-5 rounded-full bg-red-400"></span>
      </div>
      <div className="flex items-center justify-between">
        <span>{price}</span>

        <Image
          className="rounded-full w-10 h-10"
          alt="asd"
          imageURL="https://placehold.co/200x200"
        />
      </div>
      <div className="flex gap-4 mt-5">
        <Button
          onClick={() => {
            console.log("delete");
          }}
          className="bg-red-500 "
        >
          Delete
        </Button>
        <Button className="bg-indigo-500 ">Edit</Button>
      </div>
    </div>
  );
};

export default ProductCard;
