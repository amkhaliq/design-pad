import React, {Component} from 'react'

import './index.css'

class PadInput extends Component {
    onDrag = (event) => {
        event.dataTransfer.setData("text", event.target.id);
    }

    render() {
        return (
            /** grid-layout */
            <div className="pad-input">
                <div id="c-red" draggable="true" onDragStart={this.onDrag}>1</div>
                <div id="c-blue" draggable="true" onDragStart={this.onDrag}>2</div>
                <div id="c-green" draggable="true" onDragStart={this.onDrag}>3</div>
                <div id="c-black" draggable="true" onDragStart={this.onDrag}>4</div>
                <div id="c-orange" draggable="true" onDragStart={this.onDrag}>5</div>
                <div id="c-yellow" draggable="true" onDragStart={this.onDrag}>6</div>
                <div id="c-cyan" draggable="true" onDragStart={this.onDrag}>7</div>
                <div id="c-brown" draggable="true" onDragStart={this.onDrag}>8</div>
            </div>
        );
    }
}

export default PadInput