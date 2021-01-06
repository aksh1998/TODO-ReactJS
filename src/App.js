import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './Component/TodoList'
import Formbox from './Component/Formbox'
function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodoList, setFilterTodoList] = useState(todoList);

  useEffect(() => { getLocalStorage() }, [])
  useEffect(() => { handleFilter(); saveLocalStorage() }, [status, todoList]);

  const getLocalStorage = () => {
    if (localStorage.getItem('todoList') != null) {
      setTodoList(JSON.parse(localStorage.getItem('todoList')));
    }
  }

  const saveLocalStorage = () => {
    if (localStorage.getItem('todoList') === null) {
      localStorage.setItem('todoList', JSON.stringify([]));
    }
    else (
      localStorage.setItem('todoList', JSON.stringify(todoList))
    )
  }

  const saveTodo = (inputText) => {
    setTodoList([
      ...todoList, { text: inputText, completed: false, id: todoList.length + 1 }
    ]);
    setInputText("");
  }

  const handleFilter = () => {
    switch (status) {
      case 'completed': setFilterTodoList(todoList.filter(todo => todo.completed === true));
        break;
      case 'uncompleted': setFilterTodoList(todoList.filter(todo => todo.completed === false));
        break;
      case 'all': setFilterTodoList(todoList);
        break;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo</h1>
      </header>
      <Formbox saveTodo={saveTodo} inputText={inputText} setInputText={setInputText} setStatus={setStatus} />
      <TodoList todoList={todoList} setTodoList={setTodoList} filterTodoList={filterTodoList} />
    </div>
  );
}

export default App;
