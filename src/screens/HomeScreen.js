import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
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

const dataArray = [
    { title: 'First Element', content: 'Lorem ipsum dolor sit amet' },
    { title: 'Second Element', content: 'Lorem ipsum dolor sit amet' },
    { title: 'Third Element', content: 'Lorem ipsum dolor sit amet' }
  ];
export default class CardExample extends Component {
 
  async componentWillMount() {
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
            
            <CardItem footer button onPress={() => alert('This is Card Footer')}>
              <Grid>
                <Row style={styles.row}>
                  <Col style={styles.col}>
                    
                      <Icon active name="thumbs-up" />
                        <Text numberOfLines={1} style={styles.iconText}>
                          12 Likes
                        </Text>
                  </Col>
                  <Col style={styles.col}>
                    
                    <Icon active name="thumbs-up" />
                      <Text numberOfLines={1} style={styles.iconText}>
                        12 Likes
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
                  <Col style={styles.col}>
                    <Icon name="navigate" />
                    <Text numberOfLines={1} style={styles.iconText}>
                      navigate
                    </Text>
                  </Col>
                </Row>
              </Grid>
           
            </CardItem>
          </Card>
        </Content>

        <Content padder>
          <Accordion
            dataArray={dataArray}
            headerStyle={{ backgroundColor: '#b7daf8' }}
            contentStyle={{ backgroundColor: '#9AA4DC' }}
          />
        </Content>
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
              <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
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