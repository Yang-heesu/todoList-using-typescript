import React from "react";

interface TodoListInputItemProps {
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
    onKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void;
    onClick(): void;
    inputText: string;
}

const TodoListInputItem = ({
    onChange,
    onKeyDown,
    onClick,
    inputText
}: TodoListInputItemProps) => {
    return (
        <div>
            <input 
                type="text" 
                value={inputText}
                placeholder="텍스트 입력 후 엔터 혹은 버튼 클릭"
                onChange={e => onChange(e)}
                onKeyDown={e => onKeyDown(e)}
            />
            <button onClick={() => onClick()}>입력</button>
        </div>
    );
}

export default TodoListInputItem;