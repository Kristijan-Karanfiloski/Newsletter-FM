import { useDispatch, useSelector } from "react-redux";
import "./Todos.scss";
import { deleteItem, addTodos } from "../redux/todosSlice.jsx";
import { useState } from "react";

const Todos = () => {
  const todos = useSelector((state) => state.todos.data);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  // console.log("From TODO Component", todos[0].id);

  const removeTodos = (id) => {
    dispatch(deleteItem(id));
  };

  const addTodosItem = () => {
    if (input.trim()) {
      const newTodo = {
        id: Date.now(),
        title: input,
        dueDate: Date.now().toLocaleString(),
        completed: false,
      };
      dispatch(addTodos(newTodo));
    }
    setInput("");
  };

  console.log("FROM THE TODO COMPONENT", todos);

  const todoItems = todos.map((todo) => (
    <div key={todo.id}>
      <div className="todoWrapper">
        <p>{todo.title}</p>
        <p className="todo__dueDate">Due date : {todo.dueDate}</p>
        <p>Completed : {todo.completed ? "yes" : "no"}</p>
        <button onClick={() => removeTodos(todo.id)} className="todo__btn">
          Delete
        </button>
      </div>
    </div>
  ));
  ///////////////////////////////////////////////

  return (
    <>
      <div className="addTodoWrapper" style={{}}>
        <input
          value={input}
          type="text"
          onInput={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodosItem}>Add</button>
        <p>{input}</p>
      </div>
      <main>{todoItems.length ? todoItems : <p>Add a todo </p>}</main>
    </>
  );
};

export default Todos;
