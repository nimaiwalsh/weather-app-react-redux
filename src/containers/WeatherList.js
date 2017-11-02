import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import { Table } from 'semantic-ui-react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map((listItem) => listItem.main.temp)
    console.log(temps)
    return (
      <Table.Row key={name}>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>
          <Sparklines data={temps}>
            <SparklinesLine color="red" />
          </Sparklines>
        </Table.Cell>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>2</Table.Cell>
      </Table.Row>
    )
  }
  
  render () {
    return (
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Temperature</Table.HeaderCell>
            <Table.HeaderCell>Pressure</Table.HeaderCell>
            <Table.HeaderCell>Humidity</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.props.weather.map(this.renderWeather)}
        </Table.Body>
      </Table>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather }
}

export default connect(mapStateToProps)(WeatherList);
