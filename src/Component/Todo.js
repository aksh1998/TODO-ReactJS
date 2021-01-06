import React from 'react';

const Todo = ({ todo, todoList, setTodoList }) => {
    const onDeleteHandler = () => {
        setTodoList(todoList.filter((e) => e.id !== todo.id));
    }

    const onCompleteHandler = () => {
        setTodoList(todoList.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }));
    }
    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.text}</li>
            <button className="complete-btn" onClick={onCompleteHandler}><i className="fas fa-check"></i></button>
            <button className="trash-btn" onClick={onDeleteHandler}><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;