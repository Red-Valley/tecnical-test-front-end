import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const Character = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);

  return (
    <>
      {products.map(
        ({ id, title, price, image, description, category, rating }) => (
          <div className="w-auto shadow-lg h-auto text-purple-700 bg-white rounded-md p-2">
            <Link to={`/product/${id}`}>
              <div key={id}>
                <img
                  src={image}
                  alt="img Item"
                  className="h-60 w-auto mx-auto "
                />
                <h3 className="text-lg font-bold text-center my-2 mt-9">
                  {title}
                </h3>
                <p className="text-base text-gray-800 p-3 antialiased flex-wrap capitalize leading-normal ">
                  {description}
                </p>
                <p>{price}</p>
                <p>{category}</p>
              </div>
            </Link>
          </div>
        )
      )}
    </>
  );
};
