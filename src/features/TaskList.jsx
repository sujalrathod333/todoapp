import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from './TaskSlice';

import React from 'react';

const TaskList = () => {
    const tasks = useSelector((state) => state.task.tasks);
    const dispatch = useDispatch();

    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;

    return (
        <div className="task-list-container">
            {totalTasks > 0 && (
                <div className="task-stats">
                    <span>Total: {totalTasks}</span>
                    <span>Completed: {completedTasks}</span>
                    <span>Remaining: {totalTasks - completedTasks}</span>
                </div>
            )}

            {tasks.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-icon">📝</div>
                    <h3>No tasks yet</h3>
                    <p>Add your first task to get started!</p>
                </div>
            ) : (
                <ul className="task-list">
                    {tasks.map(task => (
                        <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                            <div className="task-content">
                                <label className="task-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => dispatch(toggleTask(task.id))}
                                    />
                                    <span className="checkmark"></span>
                                </label>
                                <span className="task-text">{task.text}</span>
                            </div>
                            <button
                                className="delete-btn"
                                onClick={() => dispatch(deleteTask(task.id))}
                                title="Delete task"
                            >
                                🗑️
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default TaskList