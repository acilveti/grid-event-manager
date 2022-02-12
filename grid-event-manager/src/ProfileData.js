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
                <FormTimeVoltage callbackFromParent={this.myCallback} order = "1"/>
                <FormTimeVoltage order = "2"/>
                <FormTimeVoltage order = "3"/>
                {console.log(this.state.listDataFromChild)}
            </div>
        );
    }
}

export default ProfileData;