import React from "react";
import { Layout } from "../model/Layout";

export interface Props {
  selectedLayout: Layout;
  onLayoutChange: (newLayout: Layout) => void;
}

export default ({ selectedLayout, onLayoutChange }: Props) => {
  const onChange = (layout: Layout) => () => {
    if (layout != selectedLayout) {
      onLayoutChange(layout);
    }
  };
  return (
    <div>
      <label>List</label>
      <input
        checked={selectedLayout == Layout.List}
        type="radio"
        onChange={onChange(Layout.List)}
      />
      <label>Grid</label>
      <input
        checked={selectedLayout == Layout.Grid}
        type="radio"
        onChange={onChange(Layout.Grid)}
      />
    </div>
  );
};
