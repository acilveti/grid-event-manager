import React, { Component } from 'react';
import { EventChart } from './EventChart';


class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='row'>
        <div className="col">col1</div>
        <div className="col">
          <EventChart />
        </div>
        
      </div>
    );
  }
}

export default Content;