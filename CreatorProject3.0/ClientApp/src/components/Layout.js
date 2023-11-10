import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import Header from './Header/Header';
import Context from '../contexts/Context';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <Context>
          <Header />
          <Container>
            {this.props.children}
          </Container>
        </Context>
      </div>
    );
  }
}
