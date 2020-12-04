import React, {Component} from 'react'
import DesignBoard from './DesignBoard'
import './index.css'

class DesignContainer extends Component {

    /**
    * Setting initial state for if the pad is editable
    */

    state = {
        isEdit: false     // cannot edit
    };

    handleClick = () => {
        this.setState(prevState => ({
            isEdit: !prevState.isEdit
        }));
    }

    render () {
        const btn = this.state.isEdit ? "edit-button-state" : "edit-button";

        return (
            <div>
                <div>
                    <button className={btn} 
                            onClick={this.handleClick}>EDIT</button>

                </div>
                <div> 
                    <DesignBoard />
                </div>
            </div>
        );
    }
}


export default DesignContainer