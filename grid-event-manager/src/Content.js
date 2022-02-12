import React, { Component } from 'react';
import { EventChart } from './EventChart';
import ProfileData  from './ProfileData';


class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='row'>
        <div className="col">
          <ProfileData />
        </div>
        <div className="col">
          <EventChart />
        </div>
        
      </div>
    );
  }
}

export default Content;