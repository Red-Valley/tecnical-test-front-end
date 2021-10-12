import { Button } from "../atoms/Button";
import { InputText } from "../atoms/InputText";
import { FormItem } from "./FormItem";
import { useInput } from "../hooks/useInput";
import "../styles/scss/molecules/search.scss";

export const Search = ({ handleSearch }) => {
  const { bind, value, reset } = useInput("");

  const onSearch = () => {
    handleSearch(value);
  };

  return (
    <div className="mb-3">
      <FormItem htmlFor="search" hideLabel className="d-flex">
        <div className="relative">
          <InputText id="search" placeholder={"Filter by name"} {...bind} />
          <Button className="clear-btn" handleClick={reset} type="light">
            clear
          </Button>
        </div>
        <Button handleClick={onSearch} type="primary">
          Search
        </Button>
      </FormItem>
    </div>
  );
};
