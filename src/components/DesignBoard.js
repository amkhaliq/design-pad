import React, {Component} from 'react'
import './index.css'

class DesignBoard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: ""
        }
    }

    allowDragAndDrop = (event) => {
        event.preventDefault();
    }

    onDropContent = (event) => {
        event.preventDefault();
        const droppedItem = event.dataTransfer.getData("text")
        
        event.target.style.backgroundColor = droppedItem;
    };

    render () {
        return (
            /** 2x2 grid */
            <div className="design-board">
                              
                <div className="board-input" 
                    style={{backgroundColor: this.color}} 
                    onDrop={this.onDropContent} 
                    onDragOver={this.allowDragAndDrop}>
                </div>

                <div className="board-input" 
                    style={{backgroundColor: this.color}} 
                    onDrop={this.onDropContent} 
                    onDragOver={this.allowDragAndDrop}>
                </div>

                <div className="board-input"
                    style={{backgroundColor: this.color}} 
                    onDrop={this.onDropContent} 
                    onDragOver={this.allowDragAndDrop}>
                </div>
                        
                <div className="board-input" 
                    style={{backgroundColor: this.color}} 
                    onDrop={this.onDropContent} 
                    onDragOver={this.allowDragAndDrop}>
                </div>
            </div>
        );
    }
}

export default DesignBoard