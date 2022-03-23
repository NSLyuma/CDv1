import React from "react";

export const MyInput = ({ value, onChange, placeholder, type }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
};
