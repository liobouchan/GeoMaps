import React from 'react';
import logo from './logo.svg';
import { ResponsiveChoropleth } from '@nivo/geo'
import countries from './data/world_contries.json'
import data from './data/heat_data.json'
const App = () => {
  return(
    <div style={{ height: 800 }}>
<ResponsiveChoropleth
        data={data}
        features={countries.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="YlOrRd"
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        tooltip={function(e){return (
          <div
            style={{
              background: "white",
              padding: "9px 12px",
              border: "1px solid #ccc",
              borderRadius: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              color: "black",
            }}
          >
            {e.feature.properties.name}:{" "}
            {e.feature.value
              ? e.feature.value.toLocaleString()
              : "No data"}
          </div>
        );}}
        legends={[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: false,
                translateX: 86,
                translateY: -129,
                itemWidth: 114,
                itemHeight: 20,
                itemsSpacing: 8,
                symbolSize: 20,
                itemDirection: 'left-to-right',
                itemTextColor: '#777',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000',
                            itemBackground: '#f7fafb'
                        }
                    }
                ]
            }
        ]}
        onClick={(e) => {console.log(e)}}
    />
    </div>
  )
}
export default App;
