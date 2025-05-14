interface IProps {
  imageURL: string;
  alt: string;
  className?: string;
}

const Image = ({ alt, imageURL, className }: IProps) => {
  return <img src={imageURL} alt={alt} className={className}></img>;
};

export default Image;
