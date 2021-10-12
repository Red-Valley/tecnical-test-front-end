import { Button } from "../atoms/Button";
import { InputText } from "../atoms/inputText";

export const Search = () => {
  return (
    <div className="input-group mb-3">
      <InputText placeholder={"Filter by name"} onChange={() => {}} />
      <Button handleClick={() => {}}>Search</Button>
    </div>
  );
};
