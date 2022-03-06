import React from "react";
import classNames from "classnames";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const SidebarElement = ({
  constrained,
  disabled,
  active,
  item,
  bottom,
  onClick,
}) => {
  const isDisabled = disabled;
  const dashboardSidebarElementClasses = classNames(
    "dashboard-sidebar-element",
    { disabled: isDisabled },
    { constrained },
    { active },
    { bottom }
  );
  return (
    <OverlayTrigger
      placement="right"
      overlay={constrained ? <Tooltip>{item.title}</Tooltip> : <></>}
    >
      <li
        className={dashboardSidebarElementClasses}
        onClick={onClick ? () => !isDisabled && onClick(item.path) : null}
      >
        <div className="dashboard-sidebar-element--icon">
          {active ? <item.activeIcon /> : <item.icon />}
        </div>
        <div className="dashboard-sidebar-element--text">
          <span>{item.title}</span>
        </div>
      </li>
    </OverlayTrigger>
  );
};

export default SidebarElement;
