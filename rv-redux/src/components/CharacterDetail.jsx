import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { selectedCharacter } from "../redux/actions/characterActions";

const CharacterDetail = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const character = useSelector((state) => state.selectedCharacter);
  // fetch the product
  const fetchProduct = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${id}`);
      dispatch(selectedCharacter(data));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (id && id !== "") fetchProduct();
  }, [id]);
  const { title, category, description, price, image } = character;
  return (
    <div className="container mx-auto">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="w-3/5 shadow-lg h-auto text-purple-700 bg-white rounded-md p-2 mx-auto">
            <img src={image} alt="img Item" className="h-60 w-auto mx-auto " />
            <h3 className="text-lg font-bold text-center my-2 mt-9">{title}</h3>
            <p className="text-base text-gray-800 p-3 antialiased flex-wrap capitalize leading-normal ">
              {description}
            </p>
            <p>{price}</p>
            <p>{category}</p>
          </div>
          <Link to="/">
            <button
              type="button"
              className="bg-blue-700 px-4 py-1 rounded-md text-white font-bold"
            >
              Back
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default CharacterDetail;
