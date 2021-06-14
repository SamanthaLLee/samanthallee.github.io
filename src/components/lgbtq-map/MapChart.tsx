import { geoCentroid } from "d3-geo";
import Link from 'next/link';
import React from 'react';
import {
  Annotation, ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import allStates from "../../../static/data/allstates.json";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21]
};

const MapChart = ({ allStateIds, numBills, setTooltipContent }) => {
  const max = Math.max.apply(null, Object.values(numBills));
  const mapProps = {
    datatip: "",
    projection: "geoAlbersUsa"
  }
  let colormap = require('colormap')
  let colors = colormap({
    colormap: 'autumn',
    nshades: max + 10,
    format: 'hex',
    alpha: 1
  })

  return (
    <ComposableMap {...mapProps}>
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map(geo => {
              const stateId = findStateIdByVal(allStateIds, geo.id).params.id;
              return (
                <Link href={`/state/${stateId}`}>
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      var state = allStates.find(s => s.val === geo.id);
                      var currNum = numBills[stateId]
                      if (currNum == 1)
                        setTooltipContent(state['stateName'] + ' – ' + currNum + ' Bill');
                      else
                        setTooltipContent(state['stateName'] + ' – ' + currNum + ' Bills');
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    style={{
                      default: {
                        fill: colors[max - numBills[stateId]],
                        outline: "none"
                      },
                      hover: {
                        fill: "#AAA",
                        outline: "none"
                      },
                      pressed: {
                        fill: "#464646",
                        outline: "none"
                      }
                    }}
                  /></Link>
              )
            })}
            {geographies.map(geo => {
              const centroid = geoCentroid(geo);
              const cur = allStates.find(s => s.val === geo.id);
              return (
                <g key={geo.rsmKey + "-name"}>
                  {cur &&
                    centroid[0] > -160 &&
                    centroid[0] < -67 &&
                    (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                      <Marker coordinates={centroid}>
                        <text y="2" fontSize={14} textAnchor="middle">
                          {cur.id}
                        </text>
                      </Marker>
                    ) : (
                      <Annotation
                        subject={centroid}
                        dx={offsets[cur.id][0]}
                        dy={offsets[cur.id][1]}
                      >
                        <text x={4} fontSize={14} alignmentBaseline="middle">
                          {cur.id}
                        </text>
                      </Annotation>
                    ))}
                </g>
              );
            })}
          </>
        )}
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;

function findStateIdByVal(allStateIds, val) {
  return allStateIds.find((element) => {
    return element.params.val === val;
  })
}