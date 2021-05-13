import react from 'react';
import './App.css'
const Item = ({task, id, isActive, handleCheckboxChange, handleChangeState, handleDeleteTask}) => {
    return  (
<div className='task'>
    <li className='taskitem'>
    
    <div className="card">
    <div className="checkbox-container">
    <label className="checkbox-label">
    <input checked={!isActive}onChange={()=>handleCheckboxChange(id)} onClick={handleChangeState} type="checkbox" />
            <span className="checkbox-custom rectangular"></span>
        </label>
 </div>
    </div>
            <p className='tasktext' >{task}</p>
        </li>
       
         <span class="material-icons" onClick={()=> handleDeleteTask(id)}>highlight_off </span>
        </div>
    );
}
 
export default Item;