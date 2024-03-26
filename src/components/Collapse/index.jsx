import React from "react";
import { useCollapse } from "react-collapsed";
import "../../style/css/main.css";
import arrowDown from "../../assets/arrow-down.png";
import arrowUp from "../../assets/arrow-up.png";

export function DescriptionColla({ description }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
      <div className="Des-collapsible" {...getToggleProps()}>
        <span>Description</span>
        {isExpanded ? (
          <img src={arrowDown} alt="hide description" />
        ) : (
          <img src={arrowUp} alt="show description" />
        )}
      </div>
      <div {...getCollapseProps()}>
        <div className="content">
          {description} <br />
          <br />
          Click again to hide...
        </div>
      </div>
    </div>
  );
}
