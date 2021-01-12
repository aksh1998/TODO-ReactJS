import React from 'react';
import { Button, Input } from 'reactstrap';

const Formbox = ({ saveTodo, inputText, setInputText, setStatus }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    function onSubmitHandler(e) {
        saveTodo(inputText);
        e.preventDefault();
    }

    const onDropdownChange = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form class="form-inline">
            <div class="form-group">
                <input type="text" className="todo-input" value={inputText} onChange={inputTextHandler} />
            </div>
            <div class="form-group">
                <button className="todo-button" type="submit" onClick={e => (!inputText) ? e.preventDefault() : onSubmitHandler(e)}>
                    <i className="fas fa-plus-square"></i>
                </button>
            </div>
            <div class="form-group">
                <div className="select">
                    <select name="todos" className="filter-todo" onChange={onDropdownChange}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </div>
        </form>
    );
}

export default Formbox;