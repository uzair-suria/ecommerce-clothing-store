import "./Button.scss";

import React from "react";

const Button = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-button" : ""} button`}
      {...otherProps}
    >
      {children ? children : otherProps.value}
    </button>
  );
};

export default Button;
