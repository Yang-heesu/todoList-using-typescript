import React from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoListInputItem from './TodoListInputItem';

const App = () => {
  return (
    <div className="App">
      <div className="AppContent">
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
