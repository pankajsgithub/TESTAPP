import React, { Component } from 'react';
import { ScrollView, ListView } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body ,height} from 'native-base';

export default class List_View extends Component {
    render() {
        return (
            <Container>
                   
                    <ScrollView showsVerticalScrollIndicator
                alwaysBounceVertical
                scrollEventThrottle={16}
                >
                <Content style={{marginLeft:-10,paddingLeft:0}} >
                
                        <List removeClippedSubviews={false} >
                        
                            <ListItem>
                                <Thumbnail square size={80} source={{ uri: 'https://yt3.ggpht.com/-GXo77UPO_9c/AAAAAAAAAAI/AAAAAAAAAAA/UNNPVDd4GtU/s900-c-k-no-mo-rj-c0xffffff/photo.jpg' }} />
                                <Body>
                                    <Text>A</Text>
                                    <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={{ uri: 'https://pbs.twimg.com/profile_images/847150153324777473/uswrEbyv_400x400.jpg' }} />
                                <Body>
                                    <Text>B</Text>
                                    <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>

                            <ListItem>
                                <Thumbnail square size={80} source={{ uri: 'https://pbs.twimg.com/profile_images/864731635127771136/A4Hrdyi6.jpg' }} />
                                <Body>
                                    <Text>C</Text>
                                    <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>

                            <ListItem>
                                <Thumbnail square size={80} source={{ uri: 'https://pbs.twimg.com/media/BK5RtNdCIAIsH78.png' }} />
                                <Body>
                                    <Text>D</Text>
                                    <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            
                            <ListItem>
                                <Thumbnail square size={80} source={{ uri: 'https://yt3.ggpht.com/-GXo77UPO_9c/AAAAAAAAAAI/AAAAAAAAAAA/UNNPVDd4GtU/s900-c-k-no-mo-rj-c0xffffff/photo.jpg' }} />
                                <Body>
                                    <Text>E</Text>
                                    <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>

                            <ListItem>
                                <Thumbnail square size={80} source={{ uri: 'https://pbs.twimg.com/profile_images/847150153324777473/uswrEbyv_400x400.jpg' }} />
                                <Body>
                                    <Text>F</Text>
                                    <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>

                            <ListItem>
                                <Thumbnail square size={80} source={{ uri: 'https://yt3.ggpht.com/-GXo77UPO_9c/AAAAAAAAAAI/AAAAAAAAAAA/UNNPVDd4GtU/s900-c-k-no-mo-rj-c0xffffff/photo.jpg' }} />
                                <Body>
                                    <Text>G</Text>
                                    <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>

                            <ListItem>
                                <Thumbnail square size={80} source={{ uri: 'https://pbs.twimg.com/profile_images/847150153324777473/uswrEbyv_400x400.jpg' }} />
                                <Body>
                                    <Text>H</Text>
                                    <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>

                            <ListItem>
                                <Thumbnail square size={80} source={{ uri: 'https://yt3.ggpht.com/-GXo77UPO_9c/AAAAAAAAAAI/AAAAAAAAAAA/UNNPVDd4GtU/s900-c-k-no-mo-rj-c0xffffff/photo.jpg' }} />
                                <Body>
                                    <Text>I</Text>
                                    <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>

                            <ListItem>
                                <Thumbnail square size={80} source={{ uri: 'https://pbs.twimg.com/profile_images/847150153324777473/uswrEbyv_400x400.jpg' }} />
                                <Body>
                                    <Text>J</Text>
                                    <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>

                        </List>
                        </Content>
                        </ScrollView>

                    
            </Container>
        );
    }
}