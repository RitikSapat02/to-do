import React from "react";
import { TodoItem } from "../myComponents/TodoItem";

export const Todos = (props) => {
  const mystyle = {
    margin: "auto",
  };
  return (
    <div className="container" style={mystyle}>
      <h3 className="my-3">Todos List</h3>
      {/* {props.todos} */}
      {props.todos.length === 0 ? (
        <p className="text-center">No todos to display</p>
      ) : (
        props.todos.map((todo) => {
          return (
            <>
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
              <hr />
            </>
          );
        })
      )}
    </div>
  );
};
