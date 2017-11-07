import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/Chart';
import GoogleMap from '../components/Map';
import { Table } from 'semantic-ui-react';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map((listItem) => listItem.main.temp)
    const press = cityData.list.map((listItem) => listItem.main.pressure)
    const humid = cityData.list.map((listItem) => listItem.main.humidity)
    const { lon, lat } = cityData.city.coord;
    return (
      <Table.Row key={name} textAlign='center'>
        <Table.Cell><GoogleMap lat={lat} lon={lon}/></Table.Cell>
        <Table.Cell><Chart data={temps} color='red' unit='&deg;' /></Table.Cell>
        <Table.Cell><Chart data={press} color='green' unit='hPa'/></Table.Cell>
        <Table.Cell><Chart data={humid} color='blue'unit='%' /></Table.Cell>
      </Table.Row>
    )
  }
  
  render () {
    return (
      <Table celled selectable columns={4}>
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
