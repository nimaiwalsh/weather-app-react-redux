import React, { Component } from 'react';
import SearchBar from './containers/SearchBar';
import WeatherList from './containers/WeatherList'
import { Container, Grid, Header, Icon } from 'semantic-ui-react';

class App extends Component {
  style = {
    h1: {
      marginTop: '2em',
    },
  }
  render() {
    return (
      <div className="App">
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column textAlign="center"> 
                <Header as="h1" color="blue" icon style={this.style.h1} >
                  <Icon name='cloud' />
                  Weather forecast
                  <Header.Subheader>5 day forcast - add multiple cities to the list</Header.Subheader>
                </Header>     
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
              <Grid.Column style={{maxWidth: 500}}>      
                <SearchBar />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>      
                <WeatherList />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
