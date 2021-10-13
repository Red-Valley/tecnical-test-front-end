import { Link } from "react-router-dom";
import { Search } from "../molecules/Search";

export const Header = () => {
  const handleSearch = (s) => {
    console.log(s);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link to="/">
          <h1 className="h4">Brand</h1>
        </Link>
        <div style={{ marginTop: "1rem" }} id="search-wrapper">
          <Search onSearch={handleSearch} />
        </div>
      </div>
    </nav>
  );
};
