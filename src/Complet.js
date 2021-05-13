import React, { useState } from 'react';
import Item from './Item';

const Completed=(props,{id, handleDeleteTask})=> {
  let todos = props.todos;
  todos = todos.filter(todo => !todo.isActive);

  const [changeState, setChangeState] = useState(0);

  const handleChangeState = () => setChangeState(changeState + 1);

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <Item
     handleChangeState={handleChangeState}
    handleCheckboxChange={props.handleCheckboxChange}
    key={todo.id}
    task={todo.task}
        id={todo.id}
    isActive={todo.isActive}
     handleDeleteTask={props.handleDeleteTask}
        />
        ))}
        <li>
        <span class="material-icons" onClick={()=> handleDeleteTask(id)}>highlight_off </span>
          <button
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 64,
              backgroundColor: '#EB5757',
              border: 'none',
              color: 'white',
              borderRadius: 4,
              padding: '10px 20px',
            }}
            onClick={props.handleDeleteAll}
          >
            delete all
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Completed;