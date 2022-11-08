import { ResponsiveBar } from '@nivo/bar';
import { linearGradientDef } from '@nivo/core';
import { Stream } from '@nivo/stream';
const BarChart = ({ data }) => {
  return (
    <ResponsiveBar
      data={data}
      keys={['y']}
      indexBy="x"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.4}
      valueScale={{ type: 'linear' }}
      defs={[
        linearGradientDef('gradientA', [
          { offset: 0, color: '#8FE458' },
          { offset: 100, color: '#58DDFF' },
        ]),
      ]}
      fill={[{ match: { id: 'japan' }, id: 'gradientA' }]}
      colors="#3182CE"
      animate={true}
      enableLabel={false}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'stream',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
    />
  );
};

export default BarChart;
