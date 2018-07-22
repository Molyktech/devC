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
    Title
} from 'native-base';

import { Font } from 'expo';
import HomeScreen from './HomeScreen';
//import Explore from './Explore';


export default class MainScreen extends Component {
    constructor(props) {
        super(props);
    this.state = {
        search: '',
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

  
search = () => {   
    // Set loading to true when the search starts to display a Spinner        
    this.setState({            
        loading: true          
    });
}
  render() {
    return (
        <Container style={styles.style}>
                      {
             this.state.fontLoaded ? (
            <Header hasTabs searchBar rounded>
                <Left>
                <Button transparent>
                    <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                     <Item>
                    <Icon name="ios-search" />
                    <Input 
                   
                    value={this.state.search}  
                    //onChangeText={(text) => this.setState({search:text})} onSubmitEditing={()=>this.search()}
                    />
                   
                </Item>
             
                </Body>
                <Right>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
                </Right>
                {/* <Tabs>
                    <Tab heading="Tab1">
                        <HomeScreen />
                    </Tab>
                    <Tab heading="Tab2">
                        <Text>Tab</Text>
                    </Tab>
                </Tabs>
                 */}
            </Header>
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