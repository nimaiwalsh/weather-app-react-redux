import React, { Component } from 'react';
import { Form, Segment } from 'semantic-ui-react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {place: ''}
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
    
  }
  
  onInputChange = (event) => this.setState({ place: event.target.value })
  
  onFormSubmit = (event) => {
    event.preventDefault()
    this.setState({ place: ''})
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
