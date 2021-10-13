import { Header } from "../organisms/Header";
import { CharacterCard } from "../molecules/CharacterCard";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const ViewCharacter = () => {
  const { id } = useParams();
  const characters = useSelector(
    (state) => state.characters.queries["getCharactersList(undefined)"].data
  );
  const character = characters[id];

  const {
    name,
    id: characterId,
    image,
    species,
    gender,
    status,
    origin: { name: originName },
  } = character || {
    name: "",
    id: "",
    image: "",
    species: "",
    gender: "",
    status: "",
    origin: {
      name: "",
    },
  };

  return (
    <div className="container">
      <Header />
      <section className="container" id="main">
        <div
          className="d-flex align-items-start justify-content-center gap-4"
          style={{ marginTop: "2rem" }}
        >
          {character ? (
            <>
              <CharacterCard name={name} id={characterId} imageSrc={image} />
              <div>
                <p className="text-wrap fs-6">
                  <strong>Gender:</strong> {gender}
                </p>
                <p className="text-wrap fs-6">
                  <strong>Status:</strong> {status}
                </p>
                <p className="text-wrap fs-6" style={{ maxWidth: "15rem" }}>
                  <strong>Origin:</strong> {originName}
                </p>
                <p className="text-wrap fs-6">
                  <strong>Species:</strong> {species}
                </p>
              </div>
            </>
          ) : (
            <div>Not found</div>
          )}
        </div>
      </section>
    </div>
  );
};
