import React from "react";

import TodoListItemCheckBox from "./TodoListItemCheckBox";
import TodoListItemText from "./TodoListItemText";
import TodoListItemDeleteButton from "./TodoListItemDeleteButton";

import './TodoListItem.css';

interface TodoListItemProps {
	id: number;
	itemCompleted: boolean;
	itemText: string;
	onClickTodoListItemCheckBox(id: number): void;
	onClickTodoListItemDeleteButton(id: number): void;
}

const TodoListItem = ({
	id,
	itemCompleted,
	itemText,
	onClickTodoListItemCheckBox,
	onClickTodoListItemDeleteButton
}: TodoListItemProps) => {
  return (
    <div className="todoListContent">
		<TodoListItemCheckBox 
			itemChecked={itemCompleted}
			onClick={() => onClickTodoListItemCheckBox(id)}/>
		<TodoListItemText itemCompleted={itemCompleted}>
			{itemText}
		</TodoListItemText>
		<TodoListItemDeleteButton
			onClick={() => onClickTodoListItemDeleteButton(id)}/>
	</div>
  );
}

export default TodoListItem;