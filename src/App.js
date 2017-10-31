import React, { Component } from 'react';
import SearchBar from './containers/SearchBar';
import { Container, Grid, Header } from 'semantic-ui-react';

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
                <Header as="h1" style={this.style.h1} color="blue">Weather forecast</Header>     
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
              <Grid.Column style={{maxWidth: 500}}>      
                <SearchBar />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
