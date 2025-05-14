import ProductCard from "./components/ProductCard";
import { productList } from "./data";
const App = () => {
  const renderProducts = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 gap-4  m-5">
        {renderProducts}
      </div>
    </div>
  );
};

export default App;
