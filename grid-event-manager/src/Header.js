import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="display-6">GEMA - Grid Event Manager Application</h1>
      </div>
    );
  }
}

export default Header;