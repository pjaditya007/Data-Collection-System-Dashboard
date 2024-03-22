import React, { useEffect, useState } from "react";
import "../App.css";
import StackedBarChart from "./StackedBarChart";
import { fetchNewsAnalysisData } from "../data-api/api";
import { fallbackArticlesData } from "./data";

const allKeys = ["positive", "negative", "neutral"];

const colors = {
    "positive": "blue",
    "negative": "red",
    "neutral": "green"
};


function NewsArticlesAnalysis() {
    const [keys, setKeys] = useState(allKeys);
    const [dataEnd, setDataEnd] = useState(10);
    const [chartdata, setChartData] = useState([]);
    const [totalData , setTotalData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                console.log('Hello!!')
                const data = await fetchNewsAnalysisData()
                let chartD = data.slice(0, dataEnd);
                setTotalData(data)
                setChartData(chartD);
            } catch(err) {
                let chartD = fallbackArticlesData.slice(0, dataEnd);
                setTotalData(fallbackArticlesData)
                setChartData(chartD);
            }
        }
        fetchData()
    }, [])
  
  
    const onPrevButton = () => {
      console.log(dataEnd);
      if (dataEnd > 10) {
        let newData = totalData.slice(dataEnd - 20, dataEnd - 10);
        setChartData(newData);
        setDataEnd(dataEnd - 10)
      }
    }
  
    const onNextButton = () => {
      console.log('Here Chart Data', chartdata)
      let newData = totalData.slice(dataEnd, dataEnd + 10);
      setChartData(newData);
      setDataEnd(dataEnd + 10);
    }
    return (
        <React.Fragment>

            <div style={{ width: "1000px", marginLeft: "100px", marginTop: "100px" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 style={{ width: "500px", textAlign: "left" }}>News Sentiment Analysis</h4>
                    <div style={{ display: 'flex', width: "160px", justifyContent: 'space-between', alignItems: 'center' }}>
                        <button style={{ alignSelf: 'end' }} onClick={onPrevButton}>Prev</button>
                        <button style={{ alignSelf: 'end' }} onClick={onNextButton}>Next</button>
                    </div>
                </div>

                <StackedBarChart data={chartdata} keys={keys} colors={colors} />

                <div className="fields">
                    {allKeys.map(key => (
                        <div key={key} className="field">
                            <input
                                id={key}
                                type="checkbox"
                                checked={keys.includes(key)}
                                onChange={e => {
                                    if (e.target.checked) {
                                        setKeys(Array.from(new Set([...keys, key])));
                                    } else {
                                        setKeys(keys.filter(_key => _key !== key));
                                    }
                                }}
                            />
                            <label htmlFor={key} style={{ color: colors[key] }}>
                                {key}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}

export default NewsArticlesAnalysis;
