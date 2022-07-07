import React from 'react'
import {XYPlot, LineSeries,VerticalGridLines,HorizontalGridLines,XAxis,YAxis} from 'react-vis';
function FirstChart() {
    
const data = [];

for (let i = 0; i < 20; i++) {
  const series = [];
  for (let j = 0; j < 100; j++) {
    series.push({x: j, y: (i / 10 + 1) * Math.sin((Math.PI * (i + j)) / 50)});
  }
  data.push({color: i, key: i, data: series, opacity: 0.8});
}
    return (
        <div style={{width:'100%',height:'400px'}}>
             <XYPlot
      width={350}
      height={300}
      colorType="linear"
      colorDomain={[0, 9]}
      colorRange={['blue', 'red']}
    >
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis />
      <YAxis />
      {data.map(props => (
        <LineSeries {...props} />
      ))}
    </XYPlot>
        </div>
    )
}
export default FirstChart();