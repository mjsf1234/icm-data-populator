import classNames from "classnames";
import React, { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FiChevronLeft } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import sidebarData from "../../../constants/sidebarData";
import SidebarElement from "../SidebarElement";

const Sidebar = () => {
  const [constrained, setConstrained] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const dashboardSidebarClasses = classNames("dashboard-sidebar", {
    constrained,
  });

  const toggleSidebar = () => {
    constrained ? setConstrained(false) : setConstrained(true);
  };

  const handleRoutePush = (itemPath) => {
    navigate(itemPath);
  };

  return (
    <nav className={dashboardSidebarClasses}>
      <div className="dashboard-sidebar--header">
        <OverlayTrigger
          placement="right"
          overlay={constrained ? <Tooltip>InnoventSoft</Tooltip> : <></>}
        >
          <Logo className="dashboard-sidebar--header-logo" />
        </OverlayTrigger>
        <h5 className="dashboard-sidebar--header-heading">InnoventSoft</h5>
      </div>
      <ul className="dashboard-sidebar--content">
        {sidebarData.map((item) =>
          item.isAdmin ? (
            <SidebarElement
              disabled={item.disabled}
              active={pathname.includes(item.path)}
              constrained={constrained}
              roles={item.roles}
              item={item}
              onClick={!item.disabled ? handleRoutePush : null}
            />
          ) : (
            <SidebarElement
              key={item.id}
              disabled={item.disabled}
              active={pathname.includes(item.path)}
              constrained={constrained}
              roles={item.roles}
              item={item}
              onClick={!item.disabled ? handleRoutePush : null}
            />
          )
        )}
      </ul>
      <div className="dashboard-sidebar--toggler" onClick={toggleSidebar}>
        <span className="dashboard-sidebar--toggler---icon">
          <FiChevronLeft size="1.5rem" />
        </span>
      </div>
    </nav>
  );
};

export default Sidebar;
