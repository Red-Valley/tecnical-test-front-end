import { Link } from "react-router-dom";

export const Character = ({ character }) => {
  const { id, name, image, status, species, type, gender, location, origin } =
    character;

  return (
    <div className="col col-sm-10 col-md-6 col-lg-4">
      <div className="card mb-4 shadow">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{species}</p>
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
          <p className="card-text">{species}</p>
          <Link to={/character/ + id} className="btn btn-primary">
            See info...
          </Link>
        </div>
      </div>
    </div>
  );
};
