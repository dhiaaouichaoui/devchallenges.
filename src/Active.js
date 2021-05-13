import React, { useState } from 'react';

import Item from './Item';

function Active(props) {
  const [changeState, setChangeState] = useState(0);

  const handleChangeState = () => setChangeState(changeState + 1);

  let todos = props.todos;
  todos = todos.filter(todo => todo.isActive);

  return (
    <ul>
      {todos.map(todo => (
        <Item
 handleCheckboxChange={props.handleCheckboxChange}
     key={todo.id}
  task={todo.task}
  id={todo.id}
  isActive={true}
  handleChangeState={handleChangeState}
     handleDeleteTask={props.handleDeleteTask}
        />
      ))}
    </ul>
  );
}

export default Active;