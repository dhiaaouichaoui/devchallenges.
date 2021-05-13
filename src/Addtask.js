import React , { useState , useRef , useEffect} from 'react';
import './App.css';



const AddTask = ({value, handleChange, handleSubmit}) => {
 return (
 <form onSubmit={handleSubmit} className="addTask">
  <input  className='input' type="text" placeholder='Create Task'value={value} onChange={handleChange}/>
                <button type='submit' className='addbutton'>Add</button>
 </form>
    );
}
 
export default AddTask;