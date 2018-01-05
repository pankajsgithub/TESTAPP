import React, { Component } from 'react';
import { Image, Dimensions, View, StyleSheet, ImageBackground } from 'react-native'
import { Container, Content, Header, Tab, Tabs, ScrollableTab, TabHeading, Text, Card, CardItem } from 'native-base';
import Tab1 from '../Components1/tabOne';
import Tab2 from '../Components1/tabTwo';

class Profilesam extends Component {

    render() {
        return (
            <Container style={{ backgroundColor: 'tomato' }}>
                <Header />
                    <View
                        style={styles.container}
                    >
                        <ImageBackground
                            source={{ uri: 'https://images.unsplash.com/photo-1424819827928-55f0c8497861?fit=crop&w=600&h=600' }} 
                            style={styles.image}>
                            <Text size={18} style={styles.paragraph}>NAME</Text>
                        </ImageBackground>
                    </View >
                    {/* <Card>
                        <CardItem cardBody>
                            <Image source={{ uri: 'https://www.howwe.biz/uploads/international_artists/thumbsX450px/howwe_70f90af32e43181b444bc266865936af_1462677429.jpg' }}  style={{ height:270, width: null,flex:1}} >
                            </Image>
                        </CardItem>
                    </Card> */}

              
                {/* <Header style={{backgroundColor:'red',opacity:0.1}}/> */}
                <Content>
                    <Tabs>
                        <Tab heading="FIRST">
                            <Tab1 />
                        </Tab>
                        <Tab heading="SECOND">
                            <Tab2 />
                        </Tab>
                    </Tabs>
                </Content>

            </Container>
        );
    }
}

export default Profilesam;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'center',
      //paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
    },
    image: {
      flexGrow:1,
      height:null,
      width:null,
      alignItems: 'center',
      justifyContent:'center',
    },
    paragraph: {
      margin: 24,
      fontSize: 48,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white',
      backgroundColor: 'transparent',
    },
  });
  