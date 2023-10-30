import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import Header from './Header/Header';


export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <Header />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
