export const Button = ({
  type = "primary",
  children,
  id,
  className = "",
  handleClick,
  isLink = false,
  isDisabled = false,
}) => {
  const types = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    info: "btn-info",
    error: "btn-danger",
    warning: "btn-warning",
    "outline-secondary": "btn-outline-secondary",
    light: "btn-light",
  };

  return (
    <button
      id={id}
      type="button"
      className={`btn ${types[type]} ${isLink ? "btn-link" : ""} ${className}`}
      onClick={() => handleClick()}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
