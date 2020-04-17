import React from 'react';
import logo from './logo.svg';
import { ResponsiveGeoMapCanvas } from '@nivo/geo'
import countries from './world_contries.json'

const App = () => {
  return(
    <div style={{ height: 800 }}>
      <ResponsiveGeoMapCanvas
      features={countries.features}
      pixelRatio={2}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      projectionTranslation={[ 0.5, 0.5 ]}
      projectionRotation={[ 0, 0, 0 ]}
      fillColor="#eeeeee"
      borderWidth={1}
      borderColor="#8080ff"
      enableGraticule={true}
      graticuleLineWidth={0}
      graticuleLineColor="#ff0000"
      onClick={(e) => console.log(e)}
      />
    </div>
  )
}
export default App;
