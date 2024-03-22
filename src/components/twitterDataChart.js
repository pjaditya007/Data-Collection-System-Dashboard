import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class TwitterDataChart extends Component {	
	render() {
		const options = {
				animationEnabled: true,	
				title:{
					text: "Twitter Volume Stream Data collected"
				},
				axisY : {
					title: "Number of tweets"
				},
				toolTip: {
					shared: true
				},
				data: [{
					type: "spline",
					name: "tweets",
					showInLegend: true,
					dataPoints: [
                        { "label": "14/11/2022", "y": 1110214},
                        { "label": "15/11/2022", "y": 899081},
                        { "label": "16/11/2022", "y": 1890535},
                        { "label": "17/11/2022", "y": 1290761},
                        { "label": "18/11/2022", "y": 690161},
                        { "label": "19/11/2022", "y": 890591},
                        { "label": "20/11/2022", "y": 1110791},
                        { "label": "21/11/2022", "y": 1090781},
                        { "label": "22/11/2022", "y": 1012431},
                        { "label": "23/11/2022", "y": 1780011},
                        { "label": "24/11/2022", "y": 1080820},
                        { "label": "25/11/2022", "y": 1109761},
                        { "label": "26/11/2022", "y": 1290761},
                        { "label": "27/11/2022", "y": 937611},
                        { "label": "28/11/2022", "y": 890091}
                    ]
				}
			]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
 
export default TwitterDataChart;
