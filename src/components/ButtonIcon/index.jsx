import React from "react";

import "./ButtonIcon.scss";

const ButtonIcon = ({ Icon, alignIcon, text, disable, onClick, className }) => {
  const CompositionClassName = `ButtonIcon ${
    alignIcon == "left" ? "alignRevert" : ""
  } ${className}`;
  return (
    <button
      className={CompositionClassName}
      type="button"
      disabled={disable}
      onClick={onClick}
    >
      <span>{text}</span>
      <Icon size="32px" />
    </button>
  );
};

export default ButtonIcon;
