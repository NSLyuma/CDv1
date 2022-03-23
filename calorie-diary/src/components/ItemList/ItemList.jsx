import React from "react";
import { MyButton } from "../MyButton/MyButton";

export const ItemList = ({ itemList }) => {
  return (
    <ul>
      {itemList.map(({ date, name, weight }, id) => {
        return (
          <li key={id}>
            {id + 1}. {date} {name} {weight} <MyButton text="X" />
          </li>
        );
      })}
    </ul>
  );
};
