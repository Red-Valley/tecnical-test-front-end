import React from "react";

import "./ButtonIcon.scss";

const ButtonIcon = ({ Icon, alignIcon, text, disable, onClick }) => {
  const className = `ButtonIcon ${alignIcon == "left" ? "alignRevert" : ""} `;
  return (
    <button
      className={className}
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
