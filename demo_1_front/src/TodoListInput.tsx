import React from 'react';
import TodoListItem from "./TodoListItem";
import "./TodoListInput.css";

interface TodoListInputProps {
    onSend: (text: string) => void;
}

export default class TodoListInput extends React.Component<TodoListInputProps, {}> {

    inputRef: React.RefObject<HTMLInputElement>;

    constructor(props: TodoListInputProps) {
        super(props);
        this.inputRef = React.createRef()
    }

    onButtonClick = (event: React.MouseEvent) => {
        this.props.onSend(this.inputRef.current ? this.inputRef.current.value : "")
        if(this.inputRef.current)
            this.inputRef.current.value = ""
    }

    public render(): JSX.Element {
        return <div className="TodoListInput">
            <input ref={this.inputRef}/>
            <button onClick={this.onButtonClick}>Append</button>
        </div>
    }
}