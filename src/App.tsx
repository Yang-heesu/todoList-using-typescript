import React from 'react';
import './App.css';
import TodoList from './TodoList';

const App = () => {
  return (
    <div className="App">
      <div className="AppContent">
        <TodoList/>
        <input type="text" placeholder="텍스트 입력 후 엔터 혹은 버튼 클릭"/>
        <button>입력</button>
      </div>
    </div>
  );
}

export default App;
