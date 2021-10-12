export const Button = ({
  type = "primary",
  children,
  handleClick,
  isDark = false,
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
  };

  return (
    <button
      type="button"
      className={`btn ${types[type]} ${isDark ? "btn-dark" : "btn-light"} ${
        isLink ? "btn-link" : ""
      }`}
      onClick={() => handleClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
