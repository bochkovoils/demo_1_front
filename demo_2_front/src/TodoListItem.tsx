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
        return <div className="TodoListItem" id={this.props.id.toString()}>
            <img onClick={() => this.props.onChangeStatus(this.props.id)} src={this.props.isDone ? "/check.svg" : "/play.svg"}/>
            <div className="TodoListItemText">
                <p>{this.props.text}</p>
            </div>
        </div>
    }
}