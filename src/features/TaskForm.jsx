import { useDispatch } from 'react-redux';
import { addTask } from './TaskSlice';

import React, { useState } from 'react';

const TaskForm = () => {
   
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(addTask(text));
        if(!text.trim()) return;
        setText('');
    }

  return (
    <div className="task-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a new task..."
          />
          <button type="submit">Add Task</button>
        </div>
      </form>
    </div>
  )
}

export default TaskForm;