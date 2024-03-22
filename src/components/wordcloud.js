import React from 'react';
import ReactWordcloud from 'react-d3-cloud';
import { data } from './data'


const newData = data.filter((val) => val.value > 100)
const fontSize = (word) => word.value / 10;

function SimpleWordcloud() {
    return (<div style={{ width: "1000px", marginLeft: "100px", marginTop: "100px" }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ width: "500px", textAlign: "left" }}>Reddit comments word cloud</h4>
        </div>
        <ReactWordcloud width={3000}
            height={1000} fontWeight="bold" fontSize={fontSize} data={newData} />
    </div>)
}

export default SimpleWordcloud;