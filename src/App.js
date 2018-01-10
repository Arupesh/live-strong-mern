import React, { Component } from 'react';

import './App.css';
import {Footer} from './containers/footer/footer';
import {Menu} from './containers/menu/menu';
import {Header} from './containers/header/header';
import {Main} from './containers/main/main';
import {NavigationBar} from './containers/navbar/navbar';

class App extends Component {

  render() {
    return (
      <div className="App wrapper" >
          <NavigationBar/>
          <Header/>
          <Menu/>
          <Main/>
          <Footer/>
      </div>
    );
  }
}

export default App;
