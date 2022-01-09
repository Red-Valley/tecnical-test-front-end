import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Character = () => {
  const characters = useSelector((state) => state.allCharacters.characters);
  console.log(characters);

  return (
    <>
      {characters.results?.map(
        ({ id, name, price, image, species, status }) => (
          <div
            key={id}
            className="w-auto shadow-lg h-auto text-purple-700 bg-white rounded-md p-2"
          >
            <Link to={`character/${id}`}>
              <div>
                <img
                  src={image}
                  alt="img Item"
                  className="h-60 w-auto mx-auto rounded-md  shadow shadow-purple-900 transition-all duration-500 ease-in-out hover:scale-105"
                />
                <h3 className="text-lg font-bold text-center my-2 mt-9">
                  {name}
                </h3>
                <p className="text-base text-gray-800 p-3 antialiased flex-wrap capitalize leading-normal ">
                  {species}
                </p>
                <p>{price}</p>
                <p>{status}</p>
              </div>
            </Link>
          </div>
        )
      )}
    </>
  );
};
