import { useDispatch, useSelector } from "react-redux";
import { Product } from "./Character";
import axios from "axios";
import { useEffect, useState } from "react";
// Action types
import { setProducts } from "../redux/actions/characterActions";
import { Loading } from "./Loading";

const CharacterList = () => {
  // Hooks
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  //   fetch products

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        dispatch(setProducts(response.data));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto">
      {loading ? (
        <Loading />
      ) : (
        <div className="grid sm:grid-cols-2  lg:grid-cols-3 gap-4">
          <Product />
        </div>
      )}
    </div>
  );
};

export default CharacterList;
