import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Profilesam from './Profilesam';
import Login from './Login_page';
import Welcome from './Welcome';


const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                {/* <Scene key="login" component={Login} hideNavBar={false} initial={true} /> */}
                {/* <Scene key="welcome" component={Welcome} title="welcome" /> */}
                <Scene key="Profilesam" component={Profilesam} title="Profile" initial={true}/>
                {/* <Scene key="tt" component={tabTwo}/> */}
            </Scene>
        </Router>
    )
};


export default RouterComponent;