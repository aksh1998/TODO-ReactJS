import React from 'react';
import Todo from './Todo';
const TodoList = ({ todoList, setTodoList, filterTodoList }) => {
    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {filterTodoList.map((todo) => <Todo todo={todo} key={todo.id} todoList={todoList} setTodoList={setTodoList} />)}
            </ul>
        </div>
    );
}

export default TodoList;