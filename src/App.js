import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header dividing as="h1" color="red" className="App-title">Welcome to React</Header>
        <p className="App-intro">
          This is a boilder plate using React, Redux, React-Resux, React Router and Semantic-UI. 
        </p>
      </div>
    );
  }
}

export default App;
