import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { 
    Container, 
    Header, 
    Left, 
    Body, 
    Right, 
    Button, 
    Icon, 
    Tab,
    Tabs, 
    Input, 
    Item,
    Text, 
    TabHeading
} from 'native-base';

import { Font } from 'expo';
import HomeScreen from './HomeScreen';
import Explore from './Explore';


export default class MainScreen extends Component {
    constructor(props) {
        super(props);
    this.state = {
        fontLoaded: false
    };
}

   async componentDidMount() {
    await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    //Setting the state to true when font is loaded.
    this.setState({ fontLoaded: true });
  }
  static navigationOptions = {
    header: null
}

  

  render() {
    return (
        <Container style={styles.style}>
                      {
             this.state.fontLoaded ? (
                 <Container>
            <Header hasTabs searchBar rounded>
                <Left>
                <Button transparent>
                    <Icon name='menu' />
                    </Button>
                </Left>
                <Right>
                     <Item>
                    <Icon name="ios-search" />
                    <Input 
                   
                    value={this.state.search}  
                    //onChangeText={(text) => this.setState({search:text})} onSubmitEditing={()=>this.search()}
                    />
                   
                </Item>
             
                </Right>
            
                </Header>
                 <Tabs style={{ elevation: 2 }}>
                 <Tab
                   heading={
                     <TabHeading>
                       <Icon name="home" />
                       <Text>Home</Text>
                     </TabHeading>
                   }
                 >
                   <HomeScreen />
                 </Tab>
               
                 <Tab
                    heading={
                        <TabHeading>
                            <Icon name="apps" />
                            <Text>Explore</Text>
                        </TabHeading>
                    }
                 >
                    <Explore />
                    
                </Tab>
                    
                </Tabs>
                </Container>
                
             ) : null
            }
        </Container>
    );
  }
}
const styles = StyleSheet.create({
    style: {
        marginTop: 24
    }
})