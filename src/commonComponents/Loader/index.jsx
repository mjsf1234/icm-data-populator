import classNames from "classnames";
import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = ({ size, variant, message, type }) => {
  const loaderMainClasses = classNames("loader", {
    "loader--inline": type === "inline",
  });

  return (
    <div className={loaderMainClasses}>
      <div>
        <Spinner
          animation="border"
          variant={variant ? variant : "primary"}
          size={size}
        />
        {message ? <p className="mt-1">{message}</p> : null}
      </div>
    </div>
  );
};

export default Loader;
