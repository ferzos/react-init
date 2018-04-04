import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/fontawesome-free-solid';
import logo from '../assets/logo.svg';
import Heading from '../components/Heading';

class App extends Component {
  render() {
    const style = {
      width: '50%',
      margin: '0 auto',
    };

    const style2 = {
      textAlign: 'right',
      marginRight: '14%',
    };

    return (
      <div style={style}>
        <div className="color-primary">
          <Heading text="Welcome to Ferzos React Template" logo={logo} />
        </div>
        <div style={style2} className="color-secondary text-sm">
          Ferzos <FontAwesomeIcon icon={Icons.faCopyright} />
        </div>
      </div>
    );
  }
}

export default App;
