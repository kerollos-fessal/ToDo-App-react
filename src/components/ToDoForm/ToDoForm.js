import React from "react";
import { useState } from "react";

const ToDoForm = ({ handleChange, toDoVal, handleSubmit }) => {
  //     const [toDoVal,setToDoval]=useState('')
  // const handleChange = () =>{

  // }
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} defaultValue={toDoVal} />
      <button onClick={handleSubmit} type="submit">
        Add
      </button>
    </form>
  );
};

export default ToDoForm;
