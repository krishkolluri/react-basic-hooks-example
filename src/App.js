import "./styles.css";
import Item from "./Components/item";
import { useState, useRef, useEffect } from "react";

export default function App() {
  const todoListData = ["task1", "task2", "task3"];
  const [todoItems, setTodoItems] = useState(todoListData);
  const itemText = useRef(null);
  const addItem = () => {
    alert(itemText.current.value);
    setTodoItems([...todoItems, itemText.current.value]);
  };
  useEffect(() => {
    console.log(todoItems);
  }, [todoItems]);

  return (
    <div className="App">
      <input type="text" name="itemName" ref={itemText} />
      <button onClick={addItem}> Add Item</button>
      <div>To do items </div>
      {todoItems.map((toItem) => (
        <Item key={toItem} name={toItem} />
      ))}
    </div>
  );
}
