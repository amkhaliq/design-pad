import React, {Component} from 'react'
import PadInput from './PadInput'
import './index.css'

class DesignBoard extends Component {
    state = {
        edit: false,
        color: " "
    }

    handlePadInputEdit = () => {
        this.setState(props => ({
            edit: !props.edit
        }));
    }

    allowDrop = (event) => {
        event.preventDefault();
    }

    drop = (event) => {
        event.preventDefault();
        const droppedItem = event.dataTransfer.getData("text")
        
        event.target.style.backgroundColor = droppedItem;
    };

    render () {
        const edit = this.state.edit

        return (
            /** 2x2 grid */
            
            <div className="board-container">
                <div>
                    <PadInput edit={edit}/>
                </div>
                    <div className="design-board">
                        {/* onDragOver={this.allowDrop}
                        onDrop={this.drop}
                        style={{backgroundColor: this.state.color}}> */}
                              
                        <div className="board-input" style={{backgroundColor: ""}} onDrop={this.drop} onDragOver={this.allowDrop}></div>
                        <div className="board-input" style={{backgroundColor: ""}} onDrop={this.drop} onDragOver={this.allowDrop}></div>
                        <div className="board-input" style={{backgroundColor: ""}} onDrop={this.drop} onDragOver={this.allowDrop}></div>
                        <div className="board-input" style={{backgroundColor: ""}} onDrop={this.drop} onDragOver={this.allowDrop}></div>
                    </div>
            </div>
        );
    }
}

export default DesignBoard