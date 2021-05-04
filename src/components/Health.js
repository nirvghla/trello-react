import React, { useContext } from "react";
import TodosContext from "../context";

export default function Health() {
  const { state, dispatch } = useContext(TodosContext);

  const setCurrent = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_CURRENT_CATEGORY", payload: "Health" });
  };
  return (
    <div className="list health" onClick={setCurrent}>
      <h3 class="list-title">Health</h3>
      <ul className="list-items">
        {state.todos.map((todo) => {
          if (todo.category === "Health") {
            return (
              <li key={todo.id}>
                <span
                  className={`${todo.complete && "line-through"}`}
                  onDoubleClick={() =>
                    dispatch({ type: "TOGGLE_TODO", payload: todo })
                  }
                >
                  {todo.text}aaaaa
                </span>
                <button
                  className="btn"
                  aria-label="Edit"
                  onClick={() =>
                    dispatch({ type: "SET_CURRENT_TODO", payload: todo })
                  }
                >
                  <i class="fas fa-edit" aria-hidden="true"></i>
                </button>

                <button
                  className="btn"
                  aria-label="Delete"
                  onClick={() =>
                    dispatch({ type: "REMOVE_TODO", payload: todo })
                  }
                >
                  {" "}
                  <i class="fas fa-trash-alt" aria-hidden="true"></i>
                </button>
              </li>
            );
          } else {
            return <></>;
          }
        })}
      </ul>
    </div>
  );
}
