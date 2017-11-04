import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { Table, Header } from 'semantic-ui-react';

function average(data) {
  return (data.reduce((a, b) => a + b) / data.length).toFixed(1)
}

const Chart = ({ data, color, unit }) => {
  return (
    <div>
      <Sparklines data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <Header as='h3' textAlign='center' color={color}>{average(data)}{unit}</Header>
    </div>
  )
}

export default Chart