import { Header } from "../organisms/Header";
import { CharacterCard } from "../molecules/CharacterCard";
import { useParams } from "react-router-dom";
import { useGetCharacterByIdQuery } from "../features/characters/characters-slice";
import { CubeGrid } from "../atoms/CubeGrid";

export const ViewCharacter = () => {
  const { id } = useParams();
  const {
    data: {
      name,
      id: characterId,
      image,
      species,
      gender,
      status,
      origin: { name: originName },
    } = {
      name: "",
      id: "",
      image: "",
      species: "",
      gender: "",
      status: "",
      origin: {
        name: "",
      },
    },
    isFetching,
  } = useGetCharacterByIdQuery(id);

  return (
    <div className="container">
      <Header />
      <section className="container" id="main">
        <div
          className="d-flex align-items-start justify-content-center gap-4"
          style={{ marginTop: "2rem" }}
        >
          {isFetching ? (
            <div style={{ marginTop: "6rem" }}>
              <CubeGrid />
            </div>
          ) : (
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
          )}
        </div>
      </section>
    </div>
  );
};
