import styled from "styled-components";
// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from '@nivo/line'

let data = [
    {
      "id": "japan",
      "color": "hsl(112, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 154
        },
        {
          "x": "helicopter",
          "y": 165
        },
        {
          "x": "boat",
          "y": 8
        },
        {
          "x": "train",
          "y": 97
        },
        {
          "x": "subway",
          "y": 188
        },
        {
          "x": "bus",
          "y": 121
        },
        {
          "x": "car",
          "y": 18
        },
        {
          "x": "moto",
          "y": 151
        },
        {
          "x": "bicycle",
          "y": 208
        },
        {
          "x": "horse",
          "y": 83
        },
        {
          "x": "skateboard",
          "y": 195
        },
        {
          "x": "others",
          "y": 137
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(37, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 133
        },
        {
          "x": "helicopter",
          "y": 24
        },
        {
          "x": "boat",
          "y": 161
        },
        {
          "x": "train",
          "y": 196
        },
        {
          "x": "subway",
          "y": 11
        },
        {
          "x": "bus",
          "y": 234
        },
        {
          "x": "car",
          "y": 4
        },
        {
          "x": "moto",
          "y": 174
        },
        {
          "x": "bicycle",
          "y": 125
        },
        {
          "x": "horse",
          "y": 148
        },
        {
          "x": "skateboard",
          "y": 195
        },
        {
          "x": "others",
          "y": 271
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(346, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 149
        },
        {
          "x": "helicopter",
          "y": 296
        },
        {
          "x": "boat",
          "y": 275
        },
        {
          "x": "train",
          "y": 100
        },
        {
          "x": "subway",
          "y": 216
        },
        {
          "x": "bus",
          "y": 282
        },
        {
          "x": "car",
          "y": 160
        },
        {
          "x": "moto",
          "y": 141
        },
        {
          "x": "bicycle",
          "y": 220
        },
        {
          "x": "horse",
          "y": 241
        },
        {
          "x": "skateboard",
          "y": 108
        },
        {
          "x": "others",
          "y": 59
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(279, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 208
        },
        {
          "x": "helicopter",
          "y": 31
        },
        {
          "x": "boat",
          "y": 249
        },
        {
          "x": "train",
          "y": 215
        },
        {
          "x": "subway",
          "y": 106
        },
        {
          "x": "bus",
          "y": 71
        },
        {
          "x": "car",
          "y": 81
        },
        {
          "x": "moto",
          "y": 125
        },
        {
          "x": "bicycle",
          "y": 295
        },
        {
          "x": "horse",
          "y": 206
        },
        {
          "x": "skateboard",
          "y": 29
        },
        {
          "x": "others",
          "y": 196
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(176, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 264
        },
        {
          "x": "helicopter",
          "y": 217
        },
        {
          "x": "boat",
          "y": 166
        },
        {
          "x": "train",
          "y": 124
        },
        {
          "x": "subway",
          "y": 117
        },
        {
          "x": "bus",
          "y": 5
        },
        {
          "x": "car",
          "y": 231
        },
        {
          "x": "moto",
          "y": 208
        },
        {
          "x": "bicycle",
          "y": 251
        },
        {
          "x": "horse",
          "y": 157
        },
        {
          "x": "skateboard",
          "y": 273
        },
        {
          "x": "others",
          "y": 242
        }
      ]
    }
  ]
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data /* see data tab */ }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)
const WaterGraph = () => {
    return (
        <div>
            
        </div>
    )
}

export default MyResponsiveLine