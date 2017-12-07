import React, { Component } from 'react';

import Header from './header';

import {
  Button,
  Card,
} from 'semantic-ui-react';

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'bob',
    };
  }
  render() {
    return(
      <div>
        <Header name={this.state.name}
        />
      </div>
    );
  }
}

export default Top;
