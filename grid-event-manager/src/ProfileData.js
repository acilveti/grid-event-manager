import React, {Component} from 'react'
import  FormTimeVoltage from './FormTimeVoltage'

class ProfileData extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div >                
                <FormTimeVoltage />
                <FormTimeVoltage />
                <FormTimeVoltage />
            </div>
        );
    }
}

export default ProfileData;