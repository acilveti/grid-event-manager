import React, {Component} from 'react'
import  FormTimeVoltage from './FormTimeVoltage'

class ProfileData extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div >                
                <FormTimeVoltage order = "1"/>
                <FormTimeVoltage order = "2"/>
                <FormTimeVoltage order = "3"/>
            </div>
        );
    }
}

export default ProfileData;