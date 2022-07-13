import React from 'react';
import "./TodoList.css";
import TodoListItem from "./TodoListItem";
import TodoListInput from "./TodoListInput";
import AppendTodoPopup from "./AppendTodoPopup";


interface TodoListState {
    todos: {
        id: number,
        text: string,
        isDone: boolean}[];
    appendPopupPosition?: {x: number, y: number};
}


export default class TodoList extends React.Component<{}, TodoListState> {
    constructor(props: {}) {
        super(props);
        this.state = {todos: [
            ],
        appendPopupPosition: undefined}
    }

    openPopup = (event: React.MouseEvent) => {
        this.setState(old => ({
            appendPopupPosition: {x: event.pageX, y: event.pageY}
        }))
    }
    changeStatus = (id: number) => {
        this.setState({
            todos: this.state.todos.map(obj => obj.id === id ? {id: obj.id, text: obj.text, isDone: !obj.isDone} : obj)
        })
    }

    appendTodo = (text?: string) => {
        if(!text){
            this.setState(old => ({
                appendPopupPosition: undefined
            }));
            return;
        }

        let maxId: number = this.state.todos.length === 0 ? 0 : Math.max(...this.state.todos.map(obj => obj.id));
        this.setState({
            todos: [...this.state.todos, {id: maxId + 1, text: text, isDone: false}],
            appendPopupPosition: undefined
        })
    }

    public render(): JSX.Element {
        return <div className="TodoList">
            <h1>Todo List</h1>
            <div className="ItemsContainer">
                <div className="Todos">
                    {this.state.todos.map(obj => <TodoListItem id={obj.id} text={obj.text} isDone={obj.isDone} onChangeStatus={this.changeStatus}/>)}
                </div>
            </div>
            <TodoListInput onOpenPopup={this.openPopup}/>
            {this.state.appendPopupPosition ? <AppendTodoPopup
                x={this.state.appendPopupPosition.x}
                y={this.state.appendPopupPosition.y}
                onClose={this.appendTodo} /> : undefined}
        </div>
    }
}