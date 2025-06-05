import React, { Component } from 'react';
import ValidationSample from './ValidationSample';
import RefSample from './RefSample';
import WhenToUseRef from './WhenToUseRef';

class App extends Component {
  render() {
    return (
      <div>
        <ValidationSample />
        <RefSample />
        <WhenToUseRef />
      </div>
    );
  }
}

export default App;