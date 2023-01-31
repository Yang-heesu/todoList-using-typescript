import React from "react";

import TodoListItemCheckBox from "./todoListItemCheckBox";
import TodoListItemText from "./todoListItemText";
import TodoListItemDeleteButton from "./todoListItemDeleteButton";

interface TodoListItemProps {
	itemCompleted: boolean;
	itemText: string;
}

const TodoListItem = ({
	itemCompleted,
	itemText
}: TodoListItemProps) => {
  return (
    <div>
			<TodoListItemCheckBox itemChecked={itemCompleted}/>
			<TodoListItemText itemCompleted={itemCompleted}>
				{itemText}
			</TodoListItemText>
			<TodoListItemDeleteButton/>
		</div>
  );
}

export default TodoListItem;