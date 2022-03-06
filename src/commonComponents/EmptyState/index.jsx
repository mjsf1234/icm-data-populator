import React from "react";
import classNames from "classnames";
import { Button } from "react-bootstrap";
import { ReactComponent as ErrorSvg } from "../../assets/svg/error.svg";
import { ReactComponent as EmptySvg } from "../../assets/svg/empty.svg";
import { ReactComponent as LogoSvg } from "../../assets/logo.svg";

const EmptyState = ({ type, size, message, callbackMessage, callback }) => {
  const emptyStateClasses = classNames("empty-state", {
    "empty-state--error": type === "error",
    "empty-state--logo": type === "logo",
    "empty-state--mini": size === "mini",
    "empty-state--contained": size === "contained",
  });

  //   const imageSrc =
  //     type === "error"
  //       ? require("../../assets/svg/error.svg").default
  //       : require("../../assets/svg/empty.svg").default;

  const getVariant = () => {
    switch (type) {
      case "error":
        return "danger";
      default:
        return "info";
    }
  };

  const getImageComponent = () => {
    switch (type) {
      case "error":
        return <ErrorSvg className="empty-state--image" />;
      case "logo":
        return <LogoSvg className="empty-state--image" />;
      default:
        return <EmptySvg className="empty-state--image" />;
    }
  };

  return (
    <div className={emptyStateClasses}>
      <div>
        {getImageComponent()}
        <p>{message}</p>
        {callback ? (
          <Button variant={getVariant()} size="sm" onClick={callback}>
            {callbackMessage}
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default EmptyState;
