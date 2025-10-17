import { productList } from "../store/productlist";
import "./App.css";
import Product from "./components/Product";
import { useSelector } from "./reduxContext";

export const App = () => {
  const state = useSelector((state) => state.productList);
  const cartItem = useSelector((state) => state);
  console.log(cartItem);
  return (
    <>
      <div className="w-250 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {state.map(({ id, title, price, image, rating }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            image={image}
            rating={rating.rate}
          />
        ))}
      </div>
    </>
  );
};
