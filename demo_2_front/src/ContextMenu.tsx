import React from "react";
import PropsAncestor from "./shared/PropsAncestor";
import "./ContextMenu.css";

interface ContextMenuProps extends PropsAncestor {
    x: number;
    y: number;
    height: number
    removePopup: (event: React.MouseEvent) => void;
    isChild?: boolean;
    toLeft?: boolean;
    maxWidth?: number;
}

class ContextMenu extends React.Component<ContextMenuProps, {}> {
    maxWidth: number = 20;

    menu: React.RefObject<HTMLDivElement>;

    constructor(props: ContextMenuProps) {
        super(props);
        this.menu = React.createRef();
        this.maxWidth = this.props.maxWidth ? this.props.maxWidth : this.maxWidth;
    }

    public onContextMenu(event: React.MouseEvent<HTMLDivElement>) {
        console.log("MENU!")
        event.preventDefault();
        event.stopPropagation();
    }

    calculateRightX = () => {
        let oneVw = window.innerWidth / 100;
        console.log({
            "window": window.innerWidth,
            "x": this.props.x,
            "vw": oneVw
        })
        if(this.props.x - oneVw * this.maxWidth > 0) {
            return this.props.x - oneVw * this.maxWidth
        }
        else{
            return this.props.x
        }
    }

    calculateX = () => {
        let oneVw = window.innerWidth / 100;
        console.log({
            "window": window.innerWidth,
            "x": this.props.x,
            "vw": oneVw,
            "width": this.maxWidth * oneVw
        })
        if(this.props.x + oneVw * this.maxWidth >= window.innerWidth - 5 * oneVw) {
            return this.props.x - oneVw * this.maxWidth
        }
        else{
            return this.props.x
        }
    }

    calculateY = () => {
        let oneVh = window.innerHeight / 100;
        console.log({
            "window": window.innerHeight,
            "y": this.props.y,
            "vw": oneVh,
            "height": this.props.height
        })
        if(this.props.height > window.innerHeight){
            return 0;
        }

        if(this.props.y + this.props.height >= window.innerHeight - 5 * oneVh && this.props.y - this.props.height < 0 ) {
            return window.innerHeight - 5 - this.props.height;
        }

        if(this.props.y + this.props.height >= window.innerHeight - 5 * oneVh) {
            return this.props.y - this.props.height;
        }
        else{
            return this.props.y
        }
    }

    onClickToBackground = (event: React.MouseEvent<HTMLDivElement>) => {
        if(!(this.menu.current?.contains(event.target as HTMLDivElement)))
            this.props.removePopup(event);
    }

    public render() {
        let isOverflowed = this.props.height > window.innerHeight;
        let className = isOverflowed ? "ContextMenu Scrollable" : "ContextMenu";
        const style: React.CSSProperties = {
            position: "absolute",
            overflowY: isOverflowed ? "scroll" : "auto",
            overflowX: "auto",
            maxHeight: window.innerHeight,
            minHeight: "50px",
            minWidth: "15vw",
            maxWidth: this.maxWidth.toString() + "vw",
            left: (this.props.toLeft && this.props.toLeft ? this.calculateRightX() : this.calculateX()) + "px",
            top: this.calculateY() + "px"
        }

        let elem = <div className={className} style={style} ref={this.menu}>
            {this.props.children}
        </div>

        return (this.props.isChild && this.props.isChild ? elem :
            <div className="ContextBackground" onClick={this.onClickToBackground} onContextMenu={(event) => this.onContextMenu(event)}>
                {elem}
            </div>
        );
    }
}

export default ContextMenu;