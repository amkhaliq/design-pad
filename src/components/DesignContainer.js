import React, {Component} from 'react'
import DesignBoard from './DesignBoard'
import PadInput from './PadInput'
import './index.css'

class DesignContainer extends Component {
    /**
    * Setting initial state for if the pad is editable or not
    */
    constructor(props){
        super(props)

        this.state = {
            isEditable: false     // cannot edit
        };

        this.enableEdit = this.enableEdit.bind(this)
        this.disableEdit = this.disableEdit.bind(this)
    }

    /**
     * User Interaction
     */

    enableEdit() {
        this.setState({
            isEditable: true
        })
    }

    disableEdit() {
        this.setState({
            isEditable: false
        })
    }

    // handleOnClick = () => {
    //     this.setState(prevState => ({
    //         isEditable: !prevState.isEditable
    //     }))
    // }



    render () {
    /**
    * Dynamically chainging CSS classes
    */
        let editStyle = {
            display: this.state.disableEdit ? 'block':'show'
        }

        const editBtn = this.state.isEditable ? "edit-button-after" : "edit-button-before";
        const disableBtn = this.state.isEditable ? "edit-button-before" : "edit-button-after";
        const { isEditable } = this.state;

        /**
         * Before edit button click
         */

    if(this.state.isEditable === false) {
        return (
            <div>
                <button className={editBtn} onClick={this.enableEdit}>EDIT</button>
                <button className={disableBtn} onClick={this.disableEdit}>DISABLE</button>
                      
                        <div id="board-container" style={editStyle}>
                            <div className={`input ${isEditable} ? "" : "hidden"`}>
                                <PadInput />
                            </div>
                            <DesignBoard />
                    </div>
            </div>
        );
    }

        /**
         * After disable button click
         */

        return (
            <div>
                    <button className={editBtn} onClick={this.enableEdit}>EDIT</button>
                    <button className={disableBtn} onClick={this.disableEdit}>DISABLE</button>

                    <div id="board-container">
                            <PadInput isEditable={this.isEditable}/>
                            <DesignBoard />
                    </div>
            </div>
        )
    }
}


export default DesignContainer