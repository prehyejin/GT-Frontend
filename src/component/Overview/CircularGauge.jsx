import {
  CircularGaugeComponent,
  AxesDirective,
  AxisDirective,
  Inject,
  Gradient,
  PointersDirective,
  PointerDirective,
  RangesDirective,
  RangeDirective,
} from '@syncfusion/ej2-react-circulargauge';
import { SampleBase } from './SampleBaseCircularGauge';
const SAMPLE_CSS = `
     .control-fluid {
         padding: 0px !important;
     }`;
export class CustomLabels extends SampleBase {
  gauge;
  textValues = ['0', '2', '5', '10', '20', '50', '100', '150', '200'];
  rangeLinearGradient = {
    startValue: '0%',
    endValue: '100%',
    colorStop: [
      { color: '#9e40dc', offset: '0%', opacity: 1 },
      { color: '#d93c95', offset: '70%', opacity: 1 },
    ],
  };
  pointerLinearGradient = {
    startValue: '0%',
    endValue: '100%',
    colorStop: [
      { color: '#9e40dc', offset: '0%', opacity: 0.2 },
      { color: '#9e40dc', offset: '70%', opacity: 0.5 },
    ],
  };
  load(args) {}
  axisLabelRender(args) {
    args.text = this.textValues[args.value];
  }
}
const CircularGaugeChart = ({ data }) => (
  <div className="control-pane">
    <style>{SAMPLE_CSS}</style>
    <div className="control-section">
      <CircularGaugeComponent
        load={this.load.bind(this)}
        axisLabelRender={this.axisLabelRender.bind(this)}
        id="custom-labels"
        ref={(gauge) => (this.gauge = gauge)}
        background="transparent"
      >
        <Inject services={[Gradient]} />
        <AxesDirective>
          <AxisDirective
            startAngle={210}
            endAngle={150}
            radius="80%"
            minimum={0}
            maximum={8}
            majorTicks={{
              width: 0,
              interval: 1,
            }}
            lineStyle={{ width: 0 }}
            minorTicks={{
              width: 0,
            }}
            labelStyle={{
              offset: 10,
              font: {
                fontFamily: 'inherit',
              },
            }}
          >
            <PointersDirective>
              <PointerDirective
                pointerWidth={10}
                radius="85%"
                needleStartWidth={10}
                needleEndWidth={5}
                value={6.2}
                color="#E63B86"
                cap={{ radius: 0, border: { width: 0 } }}
                needleTail={{ length: '0%' }}
                animation={{ enable: false }}
                linearGradient={this.pointerLinearGradient}
              ></PointerDirective>
            </PointersDirective>
            <RangesDirective>
              <RangeDirective
                start={0}
                end={6.2}
                color="#E63B86"
                startWidth={22}
                endWidth={22}
                linearGradient={this.rangeLinearGradient}
              ></RangeDirective>
              <RangeDirective
                start={6.2}
                end={8}
                color="#E0E0E0"
                startWidth={22}
                endWidth={22}
              ></RangeDirective>
            </RangesDirective>
          </AxisDirective>
        </AxesDirective>
      </CircularGaugeComponent>
    </div>
  </div>
);

export default CircularGaugeChart;
