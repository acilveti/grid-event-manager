import React, {Component} from 'react'

class ProfileData extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='row'>
                <form>
                    <label htmlFor="taskInput">Enter task</label>
                    <input type="text" id="taskInput"/>
                    <button type="submit">
                        Add Task
                    </button>
                </form>
            </div>
        );
    }
}

export default ProfileData;