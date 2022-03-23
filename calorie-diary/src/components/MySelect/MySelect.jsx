import React from "react";
import { options } from "../../mocks";

export const MySelect = ({ onChangeSelect }) => {
  return (
    <select onChange={onChangeSelect}>
      {options.map(({ name }, id) => {
        return (
          <option key={id} value={name}>
            {name}
          </option>
        );
      })}
    </select>
  );
};
