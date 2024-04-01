import React from "react";
import { useCollapse } from "react-collapsed";
import "../../style/css/main.css";
import arrowDown from "../../assets/arrow-down.png";
import arrowUp from "../../assets/arrow-up.png";

import PropTypes from "prop-types";

export function DescriptionCollapse({ description }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div className="collapsible">
      <div className="collapsible__header" {...getToggleProps()}>
        <span>Description</span>
        {isExpanded ? (
          <img src={arrowUp} alt="Hide description" />
        ) : (
          <img src={arrowDown} alt="Show description" />
        )}
      </div>
      <div {...getCollapseProps()}>
        <div className="collapsible__content collapsible__content--text">
          {description}
        </div>
      </div>
    </div>
  );
}

export function EquipmentCollapse({ equipment }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div className="collapsible">
      <div className="collapsible__header" {...getToggleProps()}>
        <span>Equipment</span>
        {isExpanded ? (
          <img src={arrowUp} alt="Hide equipment list" />
        ) : (
          <img src={arrowDown} alt="Show equipment list" />
        )}
      </div>
      <div {...getCollapseProps()}>
        <div className="collapsible__content">
          {equipment ? (
            <ul className="collapsible__content--list">
              {equipment.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="collapsible__content--text">No equipment listed.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export function AboutColla({ title, description }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div className="collapsible">
      <div className="collapsible__header" {...getToggleProps()}>
        <span>{title}</span>
        {isExpanded ? (
          <img src={arrowUp} alt="Hide description" />
        ) : (
          <img src={arrowDown} alt="Show description" />
        )}
      </div>
      <div {...getCollapseProps()}>
        <div className="collapsible__content">
          {description} <br />
          <br />
          Click again to hide...
        </div>
      </div>
    </div>
  );
}

DescriptionCollapse.propTypes = {
  description: PropTypes.string.isRequired,
};

EquipmentCollapse.propTypes = {
  equipment: PropTypes.arrayOf(PropTypes.string),
};
