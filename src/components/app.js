import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
          {this.props.children} 
      </div>  
    )
  }  
}
// {this.props.children} this is critcal for app to show the router children element once it's selected

