"use strict";
import React, { Component } from 'react';
import Page from './components/Page';

export default class App extends Component {
  componentDidMount(){
    document.title = "FitBox";
  }

  render() {
    return (
      <Page>
        <p>Hello, World!</p>
      </Page>
    );
  }
}
