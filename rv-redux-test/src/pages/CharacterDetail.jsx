import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchAsyncCharacterById } from "../features/characters/charactersSlice";

export const CharacterDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchAsyncCharacterById(id));
  }, [dispatch]);

  const character = useSelector((state) => state.characters.selectedCharacter);
  const isLoading = useSelector((state) => state.characters.loading);
  const { name, status, species, location, origin, image } = character;
  return (
    <div className="card-container">
      {
        // If characters are loading, show a loading message
        isLoading ? (
          <div
            className="d-flex justify-content-center mx-auto text-primary"
            style={{ width: "25rem", marginTop: "5rem", height: "15rem" }}
          >
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div
            className="card mb-4 shadow card-effect bg-gradient bg-dark text-white"
            style={{ maxWidth: "778px", margniTop: "5rem" }}
          >
            <div className="row">
              <div className="col-4">
                <img src={image} className="card-img-top" alt={name} />
              </div>
              <div className="col-8">
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <div className="d-flex">
                    <p className="card-text me-5">Specie: {species}</p>
                    <p className="card-text">
                      Status:{" "}
                      <span
                        className={`badge ${
                          status === "Alive"
                            ? "bg-success"
                            : status === "Dead"
                            ? "bg-danger"
                            : "bg-secondary"
                        }`}
                      >
                        {status}
                      </span>
                    </p>
                  </div>
                  <p className="card-text">
                    Last Location:{" "}
                    <span className="badge bg-warning fw-bold h4">
                      {location.name}
                    </span>
                  </p>
                  <Link to={/character/ + id} className="btn btn-primary">
                    See info...
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};
