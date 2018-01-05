import React, {Component} from 'react';
import {Text,View} from 'react-native';
import {Container} from 'native-base'
import { colors } from 'react-native-elements';
import RouterNav from './RouterNav'
import {Actions} from 'react-native-router-flux'


export default class tabOne extends Component{
    render()
    {
        return(
           <Container style={{backgroundColor:'cyan'}}>
                <View >
                <Text style={{color:'black'}}>FIRST</Text>
                </View>
               </Container>
           
            
        );
    }
}