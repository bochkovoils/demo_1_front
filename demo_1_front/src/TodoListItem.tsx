import React from "react";
import "./TodoListItem.css";

interface TodoListItemProps {
    id: number
    text: string;
    isDone: boolean;
    onChangeStatus: (id: number) => void;
}

export default class TodoListItem extends React.Component<TodoListItemProps, {}> {

    public render(): JSX.Element {
        return <div className="TodoListItem" onClick={() => this.props.onChangeStatus(this.props.id)} id={this.props.id.toString()}>
            {/*<img />*/}
            <p>{this.props.isDone ? <s>{this.props.text}</s> : this.props.text}</p>
        </div>
    }
}