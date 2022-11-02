// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from '@nivo/line';
import { linearGradientDef } from '@nivo/core';
import { green } from '@mui/material/colors';
import { color } from '@mui/system';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const LineChart = ({ data /* see data tab */ }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
      type: 'linear',
      min: 'auto',
      max: 'auto',
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'hour',
      legendOffset: 36,
      legendPosition: 'middle',
    }}
    axisLeft={{
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'stream',
      legendOffset: -40,
      legendPosition: 'middle',
    }}
    defs={[
      linearGradientDef('gradientA', [
        { offset: 0, color: '#8FE458' },
        { offset: 100, color: '#58DDFF' },
      ]),
      linearGradientDef('gradientB', [
        { offset: 0, color: '#000' },
        { offset: 100, color: 'inherit' },
      ]),
    ]}
    lineWidth={2}
    // lineColor={'#8FE458'}
    pointSize={6}
    // pointColor={{ theme: 'background' }}
    pointBorderWidth={4}
    pointBorderColor={'#8FE458'}
    colors={'#c0c0c0'}
    enablePointLabel={true}
    pointLabelYOffset={-12}
    enableArea={true}
    areaOpacity={0.6}
    useMesh={true}
    legends={[]}
    fill={[{ match: { id: 'japan' }, id: 'gradientA' }]}
    // layers={['lines']}
  />
);

export default LineChart;
