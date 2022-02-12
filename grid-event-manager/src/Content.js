import React, { Component } from 'react';
import { EventChart } from './EventChart';
import ProfileData  from './ProfileData';


class Content extends Component {
  constructor(props) {
    super(props);

    
  }

  

  render() {
    return (
      <div className='row justify-content-center align-items-center'>
        <div className="col justify-content-center align-items-center">
          <ProfileData  />
        </div>
        <div className="col align-items-center">
          <EventChart />
        </div>
        
      </div>
    );
  }
}

export default Content;