import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

import NavBar from './components/NavBar'
import Topic from './components/Topic'
import Services from './components/Services'
import Cat from './components/Cat'

const Row = styled.div`
  padding-top: 10%;
  padding-bottom: 10%;
`

class App extends Component {
  render() {
    return (
    <div>
      <div className="row">
        <NavBar/>
      </div>
      <div className="container">
        <Row className="row">
          <Topic/>
        </Row>
        <Row className="row">
          <Services/>
        </Row>
        <Cat/>
      </div>
    </div>
           
    );
  }
}

export default App;
