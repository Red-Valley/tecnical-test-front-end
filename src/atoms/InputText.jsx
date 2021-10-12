export const InputText = ({ placeholder = "", onChange, id, value }) => (
  <input
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    id={id}
    type="text"
    className="form-control"
  />
);
