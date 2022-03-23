import React from "react";
import { FormHeader } from "../FormHeader/FormHeader";
import { MyButton } from "../MyButton/MyButton";
import { MyInput } from "../MyInput/MyInput";
import { MySelect } from "../MySelect/MySelect";

export const FormNewItem = ({
  headerText,
  onSubmit,
  value1,
  onChange1,
  placeholder1,
  type1,
  onChangeSelect,
  value2,
  onChange2,
  placeholder2,
  type2,
  btnType,
  text,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <FormHeader headerText={headerText} />
      <MyInput
        value={value1}
        onChange={onChange1}
        placeholder={placeholder1}
        type={type1}
      />
      <MySelect onChangeSelect={onChangeSelect} />
      <MyInput
        value={value2}
        onChange={onChange2}
        placeholder={placeholder2}
        type={type2}
      />
      <MyButton type={btnType} text={text} />
    </form>
  );
};
