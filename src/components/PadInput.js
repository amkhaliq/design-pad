import React, {Component} from 'react'

import './index.css'

class PadInput extends Component {
    

    onDrag(event) {
        const color = event.target.style.backgroundColor;

        event.dataTransfer.setData("text", color)
    }

    render() {

        return (
            /** grid-layout 
             *  Draggable elements within the PadInput component
            */
            <div className="pad-input">
                <div id="item-1" style={{backgroundColor: "#DC143C"}} 
                                draggable={true} 
                                onDragStart={this.onDrag}>1</div>

                <div id="item-2" style={{backgroundColor: "#191970"}} 
                                draggable={true} 
                                onDragStart={this.onDrag}>2</div>

                <div id="item-3" style={{backgroundColor: "#008080"}} 
                                draggable={true} 
                                onDragStart={this.onDrag}>3</div>

                <div id="item-4" style={{backgroundColor: "#000000"}} 
                                draggable={true} 
                                onDragStart={this.onDrag}>4</div>

                <div id="item-5" style={{backgroundColor: "#FFA500"}} 
                                draggable={true} 
                                onDragStart={this.onDrag}>5</div>

                <div id="item-6" style={{backgroundColor: "#FFD700"}} 
                                draggable={true} 
                                onDragStart={this.onDrag}>6</div>

                <div id="item-7" style={{backgroundColor: "#00FFFF"}} 
                                draggable={true} 
                                onDragStart={this.onDrag}>7</div>

                <div id="item-8" style={{backgroundColor: "#D2691E"}} 
                                draggable={true} 
                                onDragStart={this.onDrag}>8</div>
            </div>
        );
    }
}

export default PadInput