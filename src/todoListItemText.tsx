import React from "react";

import './todoListItemText.css';

interface TodoListItemTextProps {
	itemCompleted: boolean;
	children: React.ReactNode; //태그 사이의 값을 받는데 사용한다.
}

const TodoListItemText = ({
	itemCompleted,
	children
}: TodoListItemTextProps) => {
  return (
    <div className={`itemText ${itemCompleted ? 'completedItemText' : ''}`}>
      {children}
    </div>
  );
}

export default TodoListItemText;