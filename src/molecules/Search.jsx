import { Button } from "../atoms/Button";
import { InputText } from "../atoms/InputText";
import { FormItem } from "./FormItem";
import { useInput } from "../hooks/useInput";
import "../styles/scss/molecules/search.scss";

export const Search = ({ onSearch }) => {
  const { bind, value, reset } = useInput("");

  const handleSearch = () => {
    onSearch(value);
  };

  const handleClear = () => {
    reset();
    onSearch("");
  };

  return (
    <FormItem htmlFor="search" hideLabel className="d-flex">
      <div className="relative">
        <InputText id="search" placeholder={"Filter by name"} {...bind} />
        <Button className="clear-btn" handleClick={handleClear} type="light">
          clear
        </Button>
      </div>
      <Button className="ms-3" handleClick={handleSearch} type="primary">
        Search
      </Button>
    </FormItem>
  );
};
