import React from 'react';
import "./TodoList.css";
import TodoListItem from "./TodoListItem";
import TodoListInput from "./TodoListInput";


interface TodoListState {
    todos: {
        id: number,
        text: string,
        isDone: boolean}[];
}


export default class TodoList extends React.Component<{}, TodoListState> {
    constructor(props: {}) {
        super(props);
        this.state = {todos: [
            ]}
    }

    changeStatus = (id: number) => {
        this.setState({
            todos: this.state.todos.map(obj => obj.id === id ? {id: obj.id, text: obj.text, isDone: !obj.isDone} : obj)
        })
    }

    appendTodo = (text: string) => {
        let maxId: number = this.state.todos.length === 0 ? 0 : Math.max(...this.state.todos.map(obj => obj.id));
        this.setState({
            todos: [...this.state.todos, {id: maxId + 1, text: text, isDone: false}]
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
            <TodoListInput onSend={this.appendTodo}/>
        </div>
    }
}