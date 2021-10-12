export const FormItem = ({
  hideLabel = false,
  children,
  htmlFor,
  className = "",
}) => (
  <div className={`mb-3 ${className}`}>
    {!hideLabel ? (
      <label htmlFor={htmlFor} className="form-label">
        Default file input example
      </label>
    ) : null}
    {children}
  </div>
);
