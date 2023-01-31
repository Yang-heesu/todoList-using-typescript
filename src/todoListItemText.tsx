import React from "react";

import './TodoListItemText.css';

interface TodoListItemTextProps {
	itemCompleted: boolean;
	children: React.ReactNode; //태그 사이의 값을 받는데 사용한다.
}

const TodoListItemText = ({
	itemCompleted,
	children
}: TodoListItemTextProps) => {
  return (
    <span className={`itemText ${itemCompleted ? 'completedItemText' : ''}`}>
      {children}
    </span>
  );
}

export default TodoListItemText;