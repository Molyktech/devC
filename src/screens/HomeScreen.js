import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import 
{ 
    Container,  
    Content, 
    Card, 
    CardItem, 
    Body, 
    Text,
    Accordion,
    List,
    ListItem,
    Left,
    Right,
    Thumbnail,
    Button,
    Icon,
    Grid,
    Col,
    Row
} from 'native-base';

export default class CardExample extends Component {
 
  async componentDidMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }
  
  render() {
    return (
        <Container>
       
        <Content padder>
          <Card>
            <CardItem header button onPress={() => alert('This is Card Header')}>
              <Text>Narayi Plumber</Text>
            </CardItem>
          
              <CardItem button onPress={() => alert('This is Card Body')}>
                <Body>
                <Left>
                    <Text>
                      Looking for a Plumber in Narayi Low Cost.
                    </Text>
                  </Left>
                  <Right>
                  <Icon name="arrow-forward" style={{ color: '#999' }} />
                  </Right>
                </Body>
              </CardItem>
            
            <CardItem footer button>
              <Grid>
                <Row style={styles.row}>
                  <Col style={styles.col}>
                    
                      <Icon active name="thumbs-up" />
                        <Text numberOfLines={1} style={styles.iconText}>
                          12 Likes
                        </Text>
                  </Col>
                  <Col style={styles.col}>
                    
                    <Icon active name="thumbs-down" />
                      <Text numberOfLines={1} style={styles.iconText}>
                        2 Dislikes
                      </Text>
                  </Col>
                  <Col style={styles.col}>
                      
                      <Icon active name="chatbubbles" />
                        <Text numberOfLines={1} style={styles.iconText}>
                          4 Comments
                        </Text>
                  </Col>
                  <Col style={styles.col}>
                    <Icon name="bookmarks" />
                    <Text numberOfLines={1} style={styles.iconText}>
                      bookmarks
                    </Text>
                  </Col>
                  
                </Row>
              </Grid>
           
            </CardItem>
          </Card>
        </Content>

        <Content>
          <Card>
        <CardItem>
              <Left>
                <Thumbnail source={{uri: '../../assets/hijab.jpg'}} />
                <Body>
                  <Text>Smart Jane</Text>
                  <Text note>Barnawa</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: '../../assets/office.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
            </Card>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  iconText: {
    fontSize: 12
  },
  icon: {
    width: 45,
    height: 45,
    justifyContent: 'center'
  },
  col: {
    alignItems: 'center',
    paddingHorizontal: 3
  },
  row: {
    paddingBottom: 20
  }

});