import React, {Component} from 'react'
import  FormTimeVoltage from './FormTimeVoltage'

class ProfileData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listDataFromChild: null
        }; 
    }
    
    myCallback = (dataFromChild) => {
        this.setState({ listDataFromChild: dataFromChild });
    }

    render() {
        return (
            <div >                
                <FormTimeVoltage callbackFromParent={this.props.callbackFromGrandParent} order = "1"/>
                <FormTimeVoltage callbackFromParent={this.props.callbackFromGrandParent} order = "2"/>
                <FormTimeVoltage callbackFromParent={this.props.callbackFromGrandParent} order = "3"/>
            </div>
        );
    }
}

export default ProfileData;