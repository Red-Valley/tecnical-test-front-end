import React from "react";

import "./Error.scss";

const Error = ({error}) => {
  return (
    <div className="Error">
      <p className="semi-title">
        Lo sentimos, hemos disparado mal nuestra pistola de portales
      </p>
      <p className="regular">Por favor vuelve a intentarlo más tarde</p>
      <p className="regular">{error}</p>
    </div>
  );
};

export default Error;
