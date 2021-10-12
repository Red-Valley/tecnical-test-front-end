import { Link } from "../atoms/Link";
import { Search } from "../molecules/Search";

export const Header = () => {
  const handleSearch = () => {};
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <Link href="/">
          <h1 className="h4">Brand</h1>
        </Link>
        <div class="d-flex" id="navbarSupportedContent">
          <Search onSearch={handleSearch} />
        </div>
      </div>
    </nav>
  );
};
