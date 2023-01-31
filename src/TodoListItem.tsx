import React from "react";

import TodoListItemCheckBox from "./todoListItemCheckBox";
import TodoListItemText from "./todoListItemText";
import TodoListItemDeleteButton from "./todoListItemDeleteButton";

interface TodoListItemProps {
	id: number;
	itemCompleted: boolean;
	itemText: string;
	onClickTodoListItemCheckBox(id: number): void;
}

const TodoListItem = ({
	id,
	itemCompleted,
	itemText,
	onClickTodoListItemCheckBox
}: TodoListItemProps) => {
  return (
    <div className="todoListContent">
		<TodoListItemCheckBox 
			id={id}
			itemChecked={itemCompleted}
			onClick={() => onClickTodoListItemCheckBox(id)}/>
		<TodoListItemText itemCompleted={itemCompleted}>
			{itemText}
		</TodoListItemText>
		<TodoListItemDeleteButton/>
	</div>
  );
}

export default TodoListItem;