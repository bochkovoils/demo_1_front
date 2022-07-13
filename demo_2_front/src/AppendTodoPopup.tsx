import React from "react";
import ContextMenu from "./ContextMenu";

interface AppendTodoPopupProps {
    x: number;
    y: number;
    onClose: (result?: string) => void;
}

export default class AppendTodoPopup extends React.Component<AppendTodoPopupProps, {}> {

    inputRef: React.RefObject<HTMLInputElement>;

    constructor(props: AppendTodoPopupProps) {
        super(props);
        this.inputRef = React.createRef();
    }

    onButtonClick = () => {
        this.props.onClose(this.inputRef.current?.value);
    }

    onCloseWithout = () => {
        this.props.onClose();
    }

    public render(): JSX.Element {
        return <ContextMenu x={this.props.x} y={this.props.y} height={100} removePopup={this.onCloseWithout}>
            <input ref={this.inputRef}/>
            <button onClick={this.onButtonClick}>Confirm</button>
        </ContextMenu>
    }
}