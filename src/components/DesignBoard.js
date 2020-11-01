import React, {Component} from 'react'
import './index.css'
import PadInput from './PadInput'

class DesignBoard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            containers: []
        }
    }

    allowDrop = (event) => {
        event.preventDefault();
    }

    onDrop = (event) => {
        event.preventDefault();
        let data = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(data));
    }

    render () {
        return (
            /** 2x2 grid */
            <div className="board-container">
                <div>
                    <PadInput />
                </div>
                    <div className="design-board">  
                        <div className="board-input"></div>
                        <div className="board-input"></div>
                        <div className="board-input"></div>
                        <div className="board-input"></div>
                    </div>
            </div>
        );
    }
}

export default DesignBoard