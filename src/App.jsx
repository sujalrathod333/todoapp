import React from 'react';
import TaskForm from './features/TaskForm';
import TaskList from './features/TaskList';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <h1 className="app-title">
          <span className="app-icon">📝</span>
          Task Manager
        </h1>
        <p className="app-subtitle">Stay organized and productive</p>
      </div>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
