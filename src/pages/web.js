import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import SEO from '../components/seo'

import ForceGraph2D from 'react-force-graph-2d'

let data = {
    "nodes": [
      {"id": "Hod Putt"},
      {"id": "Ollie McGee"},
      {"id": "Fletcher McGee"},
      {"id": "Robert Fulton Tanner"},
      {"id": "Cassius Hueffer"},
      {"id": "Serepta Hueffer"},
      {"id": "Amanda Barker"},
      {"id": "Constance Harley"},
      {"id": "Chase Henry"},
    ],
    "links": [
      {"source": "Fletcher McGee", "target": "Ollie McGee", "value": 1},
      {"source": "Chase Henry", "target": "Ollie McGee", "value": 3},
      {"source": "Fletcher McGee", "target": "Serepta Hueffer", "value": 10},
      {"source": "Hod Putt", "target": "Serepta Hueffer", "value": 3},
      {"source": "Hod Putt", "target": "Ollie McGee", "value": 1},
    ]
}

export default class IndexPage extends Component {
    render() {
        return (
            <>
                <h1>Web of Inter-connectivity</h1>
                <ForceGraph2D
                    graphData={data}
                    nodeColor={() => 'rgba(0, 255, 255, 1)'}
                    linkColor={() => 'rgba(0, 255, 255, .2)'}
                    nodeCanvasObject={(node, ctx, globalScale) => {
                        const label = node.id;
                        const fontSize = 16 / globalScale;
                        ctx.font = `${fontSize}px Sans-Serif`;
                        const textWidth = ctx.measureText(label).width;
                        const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding

                        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
                        ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);

                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillStyle = node.color;
                        ctx.fillText(label, node.x, node.y);
                    }}
                />
            </>
        )
    }
}