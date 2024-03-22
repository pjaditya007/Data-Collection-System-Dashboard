import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class TwitterRedditChart extends Component {	
	render() {
		const options = {
				animationEnabled: true,	
				title:{
					text: "Tweets Count vs Comments Count"
				},
				axisY : {
					title: "Count"
				},
				toolTip: {
					shared: true
				},
				data: [{
					type: "spline",
					name: "reddit",
					showInLegend: true,
					dataPoints: [
                        { "label": "09/11/2022", "y": 897},
                        { "label": "10/11/2022", "y": 986},
                        { "label": "11/11/2022", "y": 1039},
                        { "label": "12/11/2022", "y": 1110},
                        { "label": "13/11/2022", "y": 985},
                        { "label": "14/11/2022", "y": 1001},
                        { "label": "15/11/2022", "y": 1200},
                        { "label": "16/11/2022", "y": 1027}
                    ]
				},
				{
					type: "spline",
					name: "twitter",
					showInLegend: true,
					dataPoints: [
                        { "label": "09/11/2022", "y": 10463},
                        { "label": "11/11/2022", "y": 10456},
                        { "label": "12/11/2022", "y": 10211},
                        { "label": "13/11/2022", "y": 10469},
                        { "label": "14/11/2022", "y": 10279},
                        { "label": "15/11/2022", "y": 6169},
                        { "label": "16/11/2022", "y": 16532}
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
 
export default TwitterRedditChart;
