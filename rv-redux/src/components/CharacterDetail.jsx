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
  const { name, image, species, status, gender, origin, location } = character;
  return (
    <div className="container mx-auto grid place-items-center">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-col md:flex-row bg-gray-800 rounded-md shadow-md">
            <div className="shadow-lg  md:w-auto  rounded-md ">
              <img
                src={image}
                alt="img Item"
                className=" rounded h-auto w-auto mx-auto   "
              />
            </div>
            <div className="text-white p-4 w-80">
              <h3 className="text-lg font-bold my-2 mt-9">{name}</h3>
              <p className="text-base antialiased flex-wrap capitalize leading-normal m-0 ">
                <span className="text-gray-600 font-base">Specie:</span>{" "}
                {species}
              </p>
              <p className="m-0">
                <span className="text-gray-600 font-base">Gender:</span>{" "}
                {gender}
              </p>
              <p className="m-0">
                <span className="text-gray-600 font-base">Status: </span>
                <span
                  className={`${
                    status === "Alive"
                      ? "text-green-800"
                      : status === "Dead"
                      ? "text-red-800"
                      : "text-gray-700"
                  } capitalize font-bold text-lg`}
                >
                  {status}
                </span>{" "}
              </p>
              <p className="m-0">
                <span className="text-gray-600 font-base">Origin: </span>{" "}
                {origin.name}
              </p>
              <p>
                <span className="text-gray-600 font-base">Last Location:</span>{" "}
                {location.name}
              </p>
            </div>
          </div>
          <Link to="/">
            <button
              type="button"
              className="bg-blue-700 px-4 py-1 rounded-md text-white font-bold mt-3"
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
