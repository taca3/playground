import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  Button,
  Card,
} from 'semantic-ui-react';

class Header extends Component {
  constructor(props) {
  super(props);
    this.state = {
      name: '押してみる？',
      count: 0,
    }
  }

  handleMouseOver() {
    this.setState({ name: '押せーーー'})
  }

  handleMouseOut() {
    this.setState({
      name: '押してみて',
    })
  }

  handleClick() {
    const number = this.state.count + 1
    this.setState({
      count: number,
    })
  }

  render () {
    return (
      <Grid
        centered
        columns={6}
      >
        <Grid.Column>
          {this.state.count}
          <Button
            onMouseOver={() => this.handleMouseOver()}
            onMouseOut={() => this.handleMouseOut()}
            onClick={() => this.handleClick()}
            >
              {this.state.name}
          </Button>
        </Grid.Column>
    </Grid>
    )
  };
}

Header.PropTypes = {
  name: PropTypes.string.isRequired,
}

export default Header;
