import React from 'react';
import {VictoryPie} from "victory";
function PieCharts(props) {
    return (
        <VictoryPie
            data={[
                { x: "Cats", y: 35 },
                { x: "Dogs", y: 40 },
                { x: "Birds", y: 55 }
            ]}
            colorScale={["tomato", "orange", "gold", "red"]}
            height={200}
            style={{labels: {fill: "white", fontSize: 15}}}
        />
    );
}

export default PieCharts;