import { nanoid } from "nanoid";
import { useState } from "react";
import "./App.css";
import { FormNewItem, FormNewProduct, ItemList, MyTitle } from "./components";

function App() {
  const [newItemInput, setNewItemInput] = useState("");
  const [kcalInput, setKcalInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [itemSelect, setItemSelect] = useState("");
  const [weightInput, setWeightInput] = useState("");

  const [itemList, setItemList] = useState([]);

  const onChangeItemInput = (event) => {
    setNewItemInput(event.target.value);
  };

  const onChangeKcalInput = (event) => {
    setKcalInput(event.target.value);
  };

  const onChangeDateInput = (event) => {
    setDateInput(event.target.value);
  };

  const onChangeWeightInput = (event) => {
    setWeightInput(event.target.value);
  };

  const onChangeItemSelect = (event) => {
    setItemSelect(event.target.value);
  };

  const addNewProduct = (event) => {
    event.preventDefault();
  };

  const addNewItem = (event) => {
    event.preventDefault();
    const item = {
      id: nanoid(),
      date:
        dateInput ||
        `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`,
      name: itemSelect,
      weight: weightInput, //вводится вес, который надо пересчитывать в калории в зависимости от продукта
    };
    setItemList([...itemList, item]);
    setDateInput("");
    setWeightInput("");
  };

  return (
    <div>
      <MyTitle title="Дневник калорий" />

      <FormNewProduct
        headerText="Добавить новый продукт"
        onSubmit={(event) => {
          event.preventDefault();
        }}
        value1={newItemInput}
        onChange1={onChangeItemInput}
        placeholder1="Название продукта"
        value2={kcalInput}
        onChange2={onChangeKcalInput}
        placeholder2="Ккал на 100 г"
        btnType="submit"
        text="Добавить"
      />

      <FormNewItem
        headerText="Добавить запись в дневник"
        onSubmit={addNewItem}
        value1={dateInput}
        onChange1={onChangeDateInput}
        type1="date"
        onChangeSelect={onChangeItemSelect}
        value2={weightInput}
        onChange2={onChangeWeightInput}
        placeholder2="Кол-во грамм"
        type2="number"
        btnType="submit"
        text="Записать"
      />

      <ItemList itemList={itemList} />
    </div>
  );
}

export default App;
