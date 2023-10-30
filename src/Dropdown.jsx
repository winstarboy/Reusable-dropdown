import React, { useState } from "react";

export const Dropdown = ({ title, items = [], multiSelect = false }) => {
  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const toggle = () => setOpen(!open);

  function handleItemClick(item) {
    if (!selectedItems.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelectedItems([item]);
      } else if (multiSelect) {
        setSelectedItems([...selectedItems, item]);
      } else {
        let selectionAfterRemoval = selectedItems;
        selectionAfterRemoval = selectionAfterRemoval.filter(
            (current) => current.id !== item.id
        );
        setSelectedItems([...selectionAfterRemoval]);
      }
    }
  }

  function isItemInSelectedItems(item) {
    if (selectedItems.some((current) => current.id === item.id)) {
      return true;
    }
    return false;
  }

  return (
    <div className="dd-wrapper">
      <div
        tabIndex={0}
        role="button"
        className="dd-header"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="dd-header__title">
          <p className="dd-header__title--bold">{title}</p>
        </div>
        <div className="dd-header__action">
          <p>{open ? "Close" : "Open"}</p>
        </div>
      </div>
      {open && (
        <ul className="dd-list">
          {items.map((item) => (
            <li className="dd-list-item" key={item.id}>
              <button type="button" onClick={() => handleItemClick(item)}>
                <span>{item.value}</span>
                <span>{isItemInSelectedItems(item) && 'Selected'}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
