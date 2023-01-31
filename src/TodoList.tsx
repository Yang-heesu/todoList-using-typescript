import React, { useState, useRef } from "react";

import TodoListItem from "./TodoListItem";
import TodoListInputItem from "./TodoListInputItem";

interface todoListType {
  id: number;
  itemText: string;
  itemCompleted: boolean;
}

const TodoList = () => {
  const [inputText, setInputText] = useState<string>(''); //todoList에 추가할 텍스트
  const [itemData, setItemData] = useState<Array<todoListType>>([
    {
      id: 1,
      itemText: '할일 1',
      itemCompleted: false,
    },
    {
      id: 2,
      itemText: '할일 2',
      itemCompleted: false,
    },
    {
      id: 3,
      itemText: '완료한 일 1',
      itemCompleted: true,
    }
  ]);
  const nextId = useRef(4); //현재 데이터의 index

  /** 체크박스를 클릭할 때, 체크박스의 checked값을 변경하는 함수 */
  const handleClickTodoListItemCheckBox = (id: number) => {
    setItemData(itemData.map(item => 
      item.id === id ? {...item, itemCompleted: !item.itemCompleted} : item
    ));
  }

  /** 삭제버튼을 누르면 todoList의 item이 삭제되는 함수 */
  const handleClickTodoListItemDeleteButton = (id: number) => {
    setItemData(itemData.filter(item => item.id !== id));
  }
  
  /** todoList에 추가할 텍스트를 값을 입력하는 함수 */
  const handleChangeTodoListInputItemText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }

  /** 엔터를 누르면 item이 생성되는 함수*/
  const handleKeyDownTodoListInputItemText = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      const newItem: todoListType = {
        id: nextId.current,
        itemText: inputText,
        itemCompleted: false
      }
      setItemData(itemData.concat(newItem));
      setInputText('');
      nextId.current += 1;
    }
  }

  /** 추가 버튼을 누르면 item이 생성되는 함수 */
  const handleClickTodoListInputItemButton = () => {
    const newItem: todoListType = {
      id: nextId.current,
      itemText: inputText,
      itemCompleted: false
    }
    setItemData(itemData.concat(newItem));
    setInputText('');
    nextId.current += 1;
  }

  return (
    <div>
      {itemData.map(item => 
        <TodoListItem
          key={item.id}
          id={item.id}
          itemText = {item.itemText}
          itemCompleted={item.itemCompleted}
          onClickTodoListItemCheckBox={handleClickTodoListItemCheckBox}
          onClickTodoListItemDeleteButton={handleClickTodoListItemDeleteButton}
        />
      )}
      <TodoListInputItem
          onChange={handleChangeTodoListInputItemText}
          onKeyDown={handleKeyDownTodoListInputItemText}
          onClick={handleClickTodoListInputItemButton}
          inputText={inputText}
      />
    </div>
  );
}

export default TodoList;