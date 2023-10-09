import { useState } from "react";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import "./App.css";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const [toDoVal, setToDoval] = useState("");
  const [toDoItems, setToDoItems] = useState([]);
  // const [counter, setCounter] = useState(0);

  const handleChange = (e) => {
    console.log(e.target);
    setToDoval(e.target.value);
  };

  // let counter = 1;
  // add new to do item
  const handleSubmit = (e) => {
    e.preventDefault();
    // counter++
    // setCounter(counter + 1);
    console.log("test submit");
    setToDoItems([
      ...toDoItems,
      {
        val: toDoVal,
        isDone: false,
        id: Math.floor(Math.random() * 100), // math.random // id generator package //array length+1
      },
    ]);
  };

  const handleDeleteToDo = (e, id) => {
    let arr = toDoItems.filter((item) => item.id !== id);
    console.log(arr);
    setToDoItems([...arr]);
  };

  const handleIsDoneToDo = (e, id) => {
    let toDoToBeCompleted = toDoItems.find((item) => item.id === id);
    // equivlant
    // toDoToBeCompleted.isDone = toDoToBeCompleted.isDone  ? false : true;
    toDoToBeCompleted.isDone = !toDoToBeCompleted.isDone;
    // toDoToBeCompleted.isDone = toDoToBeCompleted.isDone === true ? false : true;
    //
    console.log(toDoToBeCompleted);
    setToDoItems([...toDoItems]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <ToDoForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          toDoVal={toDoVal}
        />
        <ToDoList
          toDoItems={toDoItems}
          handleDeleteToDo={handleDeleteToDo}
          handleIsDoneToDo={handleIsDoneToDo}
        />
      </header>
    </div>
  );
}

export default App;
