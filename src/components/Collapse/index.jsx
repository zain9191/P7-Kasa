import React from "react";
import PropTypes from "prop-types";
import { useCollapse } from "react-collapsed";
import "../../style/css/main.css";
import arrowDown from "../../assets/arrow-down.png";
import arrowUp from "../../assets/arrow-up.png";

const UniversalCollapsible = ({ title, children, className }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const rootClassName = className ? className : "collapsible";

  return (
    <div className={rootClassName}>
      <div className="collapsible__header" {...getToggleProps()}>
        <span className="collapsible__header--span">{title}</span>
        <img
          src={isExpanded ? arrowUp : arrowDown}
          alt={isExpanded ? "Hide" : "Show"}
        />
      </div>
      <div {...getCollapseProps()}>
        <div className="collapsible__content">{children}</div>
      </div>
    </div>
  );
};

UniversalCollapsible.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default UniversalCollapsible;
