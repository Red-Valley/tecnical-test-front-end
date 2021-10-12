import "../styles/scss/atoms/link.scss";

export const Link = ({ href, children, className }) => (
  <a className={`link-primary ${className}`} href={href}>
    {children}
  </a>
);
