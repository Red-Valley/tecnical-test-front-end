import { Link } from "react-router-dom";

export const Character = ({ character }) => {
  const { id, name, image, status, species, type, gender, location, origin } =
    character;

  return (
    <div className="col col-sm-10 col-md-6 col-lg-4">
      <div className="card mb-4 shadow card-effect bg-gradient bg-dark text-white">
        <img src={image} className="card-img-top" alt={name} />
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
            <span className="badge bg-warning fw-bold h4">{location.name}</span>
          </p>
          <Link to={/character/ + id} className="btn btn-primary">
            See info...
          </Link>
        </div>
      </div>
    </div>
  );
};
