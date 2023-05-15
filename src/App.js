import "./App.css";
import Header from "./myComponents/Header";
import { Footer } from "./myComponents/Footer";
import { Todos } from "./myComponents/Todos";
import { AddTodo } from "./myComponents/AddTodo";
import React, { useState, useEffect } from "react";
import { About } from "./myComponents/About";

import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);

    /////!!!!!deleting this way in react does not work!!!
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno,
      title,
      desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  // let todos = [
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <BrowserRouter>
        <Header searchBar={false} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route exact path="/about" element={<About />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
