import React, { useContext } from "react";
import TodosContext from "../context";

export default function Family() {
  const { state, dispatch } = useContext(TodosContext);
  return (
    <div
      className="list family"
      onClick={() =>
        dispatch({ type: "SET_CURRENT_CATEGORY", payload: "Family" })
      }
    >
      <h3 class="list-title">Family</h3>
      <ul className="list-items">
        {state.todos.map((todo) => {
          if (todo.category === "Family") {
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
