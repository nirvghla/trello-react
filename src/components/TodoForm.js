import React, { useContext, useEffect, useState } from "react";
import TodosContext from "../context";

export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const { state, dispatch } = useContext(TodosContext);

  useEffect(() => {
    if (state.currenttodo.text) {
      setTodo(state.currenttodo.text);
    }
    return () => {};
  }, [state.currenttodo.text]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.currenttodo.text) {
      dispatch({ type: "UPDATE_TODO", payload: todo });
    } else {
      dispatch({ type: "ADD_TODO", payload: todo });
    }

    setTodo("");
  };
  return (
    <div className="list todo-form">
      <h3 class="list-title">
        Add for : <span>{state.currentcategory}</span>
      </h3>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <input
          type="text"
          className="addtodo"
          placeholder="ADD TODO"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />
        <button type="submit" className="submitbtn">
          ADD <br></br>+
        </button>
      </form>
      <br></br>
    </div>
  );
}
