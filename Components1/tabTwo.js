import React, {Component} from 'react';
import {Text,View} from 'react-native';
import {Container} from 'native-base'


export default class tabOne extends Component{
    render()
    {
        return(
           <Container style={{backgroundColor:'red'}}>
                <View >
                <Text style={{color:'black'}}>SECOND</Text>
                </View>
               </Container>
           
            
        );
    }
}