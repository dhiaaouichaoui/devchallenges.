import React, { useState } from 'react';
import Item from './Item';

const All = props => {
 const [changeState, setChangeState] = useState(0);

const handleChangeState = () => setChangeState(changeState + 1);
  return (
      <div>
    <ul>
      {props.todos.map(todo => (
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
    </ul></div>
  );
};

export default All;