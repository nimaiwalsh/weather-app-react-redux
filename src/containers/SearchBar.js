import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import { Form, Segment } from 'semantic-ui-react';

class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {place: ''}

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this) 
  }
  
  onInputChange = (event) => this.setState({ place: event.target.value })
  
  onFormSubmit = (event) => {
    event.preventDefault()
    //Go and fetch WeatherData from ActionCreator
    this.props.fetchWeather(this.state.place)
    this.setState({place: ''})
  }

  render() {

    return (
      <Form onSubmit={this.onFormSubmit}>
        <Segment>
          <Form.Input 
            icon="search"
            fluid
            placeholder='Where do you want the weather?' 
            name='place'
            value={this.state.place}
            onChange={this.onInputChange}
          />
          <Form.Button color="teal" fluid type='Submit' content='Search' />
        </Segment>
      </Form>   
    )
  }
}

//Connect fetchWeather action creator to the reducers and make it available
//in this Container
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)