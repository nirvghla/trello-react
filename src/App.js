import React, { useContext, useReducer, useEffect } from "react";
import TodosContext from "./context";
import todosReducer from "./reducer";
import Work from "./components/Work";
import Food from "./components/Food";
import TodoForm from "./components/TodoForm";
import Family from "./components/Family";
import Pet from "./components/Pet";
import Fun from "./components/Fun";
import Health from "./components/Health";
import Topheader from "./components/Topheader";
import "./App.css";
import BoardInfoBar from "./components/BoardInfoBar";

const localState = JSON.parse(localStorage.getItem("info"));

function App() {
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(
    todosReducer,
    localState || initialState
  );

  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(state));
  }, [state]);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Topheader />
        <BoardInfoBar />
        <section class="lists-container">
          <TodoForm />
          <Food />
          <Pet />
          <Fun />
          <Work />
          <Family />
          <Health />
        </section>
      </div>
    </TodosContext.Provider>
  );
}

export default App;
