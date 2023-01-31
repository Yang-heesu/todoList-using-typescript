import React from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoListInputItem from './TodoListInputItem';

const App = () => {
  return (
    <div className="App">
      <div className="AppHeader">
        <div className="AppTitle">할 일 목록</div>
      </div>
      <div className="AppContent">
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
