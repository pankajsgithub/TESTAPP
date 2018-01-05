import React, { Component } from 'react'
import { } from 'react-native'
import Login_Page from './Components1/Login_page'
import List_View from './Components1/List_View'
import { StackNavigator } from 'react-navigation'
import Login from './Components1/Login_page';
import Welcome from './Components1/Welcome';
// import Profilesam from './Components1/Profilesam';
import {RouterNav} from './Components1/RouterNav';


const Application = StackNavigator({
  Home: { screen: Login_Page },
  Welcome:{ screen: Welcome},
  //Profilesam:{screen:Profilesam},
}, {
    navigationOptions: {
      header: false,
    }
  });
  export default Application;

  

export  class App extends Component {
  render() {
    return (
      <Application/>
      
      
    );
  }
}