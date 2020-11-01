import React, {Component} from 'react'
import DesignBoard from './DesignBoard'
import PadInput from './PadInput'
import './index.css'

class DesignContainer extends Component {
    constructor(props) {
        super(props)

        /**
         * Setting initial state for if the pad is editable
         */

        this.state = {
            edit: false     // cannot edit
        }
    }

    handleEdit = event => {
        this.setState({
            edit: !event.edit
        });
        console.log(event.target)
    }

    render () {

        return (
            <div>
                <div>
                    <button className="edit-btn" onClick={this.handleEdit}>EDIT</button>
                </div>

            <DesignBoard />
            
            </div>
        );
    }
}

export default DesignContainer