import logo from "../images/logoBrand.jpg";
import { FaUserAlt } from "react-icons/fa";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light shadow">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo Image" width={60} height={40} />
          CharactersRicky
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="p-2 logButton rounded-circle nav-link btn btn-primary text-white"
                href="/"
                role="button"
              >
                <FaUserAlt />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
