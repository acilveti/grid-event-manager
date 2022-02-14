import React, { Component } from 'react';
import { EventChart } from './EventChart';
import ProfileData  from './ProfileData';


class Content extends Component {
  constructor(props) {
    super(props)

    this.state = {
      timeValues: [1, 2, 3, 4],
      voltageValues : [1, 2, 3, 4]
    }; 
  }

  myCallback = (order, values) => {
    const t = this.state.timeValues.splice(order-1, 1, values.timeValue);
    const v = this.state.voltageValues.splice(order-1, 1, values.voltageValue);
    this.setState({t, v });
  }

  render() {
    return (
      <div className='row justify-content-center align-items-center'>
        <div className="col justify-content-center align-items-center">
          <ProfileData  callbackFromGrandParent={this.myCallback}/>
        </div>
        <div className="col align-items-center">
          <EventChart />
        </div>

      </div>
    );
  }
}

export default Content;