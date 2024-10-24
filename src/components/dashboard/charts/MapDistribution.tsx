import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { Tooltip as ReactTooltip } from "react-tooltip";

// const geoUrl =
//   "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const markers: {
  markerOffset: number;
  name: string;
  coordinates: [number, number];
}[] = [
  { markerOffset: -30, name: "Germany", coordinates: [10.4515, 51.1657] },
  { markerOffset: -15, name: "USA", coordinates: [-99.1332, 39.8283] },
  { markerOffset: -15, name: "Australia", coordinates: [133.7751, -25.2744] },
  { markerOffset: -15, name: "Brazil", coordinates: [-51.9253, -14.235] },
  { markerOffset: -15, name: "India", coordinates: [78.9629, 20.5937] },
  { markerOffset: -15, name: "China", coordinates: [104.1954, 35.8617] },
];

const MapDistribution = () => {
  const [, setContent] = useState("");

  return (
    <div className="relative p-3 bg-white shadow-lg rounded-[10px]">
      <h2 className="text-lg font-bold text-mediumGray">Map Distribution</h2>
      <ComposableMap
        projectionConfig={{
          scale: 180,
        }}
        data-tip=""
      >
        <Geographies geography="/src/utils/feature.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#9AC8FC"
                stroke="#ffffff"
              />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker
            key={name}
            coordinates={coordinates}
            onMouseEnter={() => setContent(name)}
            onMouseLeave={() => setContent("")}
            data-tooltip-id="map-tooltip"
            data-tooltip-content={name}
          >
            <circle r={10} fill="#0057b7" stroke="#fff" strokeWidth={5} />
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "#0057b7" }}
            ></text>
          </Marker>
        ))}
      </ComposableMap>
      <ReactTooltip
        id="map-tooltip"
        className="shadow-custom rounded-[5px] w-[65px] bg-mediumGray text-xs text-white"
      />
    </div>
  );
};

export default MapDistribution;
