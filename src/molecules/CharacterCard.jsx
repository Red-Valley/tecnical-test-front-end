import { Link } from "react-router-dom";

export const CharacterCard = ({ name, imageSrc, id, showLink = false }) => (
  <div className="card shadow-sm">
    {imageSrc ? (
      <img src={imageSrc} className="img-fluid" alt="" />
    ) : (
      <svg
        className="img-fluid"
        width="100%"
        height="225"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Thumbnail"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c"></rect>
        <text x="40%" y="50%" fill="#eceeef" dy=".3em">
          Thumbnail
        </text>
      </svg>
    )}
    <div className="card-body">
      <p className="card-text ms-1">{name}</p>
      <div className="d-flex justify-content-between align-items-center">
        {showLink ? (
          <Link to={`/character/${id}`} className="btn btn-sm btn-primary">
            View
          </Link>
        ) : null}
      </div>
    </div>
  </div>
);
