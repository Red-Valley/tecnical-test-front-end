import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export const Character = () => {
  const characters = useSelector((state) => state.allCharacters.characters);
  console.log(characters);

  return (
    <>
      <SearchBar />
      {characters.results?.map(
        ({ id, name, image, species, status, gender, origin }) => (
          <div
            key={id}
            className=" shadow-lg  text-purple-700 bg-white rounded-md p-2"
          >
            <div className="flex flex-col md:flex-row bg-gray-800 rounded-md shadow-md">
              <div className="shadow-lg  md:w-auto  rounded-md ">
                <img
                  src={image}
                  alt="img Item"
                  className=" rounded h-60 w-auto mx-auto   "
                />
              </div>
              <div className="text-white p-4">
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
                <p>
                  <span className="text-gray-600 font-base">Origin: </span>{" "}
                  {origin.name}
                </p>
                <Link to={`character/${id}`}>
                  <button className="btn btn-warning">Details...</button>
                </Link>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};
