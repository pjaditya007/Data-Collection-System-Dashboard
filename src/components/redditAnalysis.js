import React, { useEffect, useState } from "react";
import "../App.css";
import StackedBarChart from "./StackedBarChart";
import { fetchRedditAnalysisData } from "../data-api/api";
import { fallbackCommentsData } from "./data";

const data = [
    {
        "negative": 678,
        "positive": 807,
        "neutral": 912,
        "keyword": "#SurvivorSeries",
        "count": 2397
    },
    {
        "negative": 753,
        "positive": 792,
        "neutral": 518,
        "keyword": "Mick",
        "count": 2063
    },
    {
        "negative": 608,
        "positive": 802,
        "neutral": 643,
        "keyword": "#GoBlue",
        "count": 2053
    },
    {
        "negative": 593,
        "positive": 635,
        "neutral": 621,
        "keyword": "#AEWFullGear",
        "count": 1849
    },
    {
        "negative": 477,
        "positive": 642,
        "neutral": 718,
        "keyword": "Gonzaga",
        "count": 1837
    },
    {
        "negative": 279,
        "positive": 804,
        "neutral": 464,
        "keyword": "Thankful",
        "count": 1547
    },
    {
        "negative": 436,
        "positive": 596,
        "neutral": 440,
        "keyword": "Kittle",
        "count": 1472
    },
    {
        "negative": 537,
        "positive": 521,
        "neutral": 387,
        "keyword": "Auburn",
        "count": 1445
    },
    {
        "negative": 445,
        "positive": 546,
        "neutral": 399,
        "keyword": "Ohio State",
        "count": 1390
    },
    {
        "negative": 390,
        "positive": 619,
        "neutral": 329,
        "keyword": "Karen Bass",
        "count": 1338
    },
    {
        "negative": 335,
        "positive": 452,
        "neutral": 412,
        "keyword": "Thanksgiving",
        "count": 1199
    },
    {
        "negative": 577,
        "positive": 297,
        "neutral": 286,
        "keyword": "Takeoff",
        "count": 1160
    },
    {
        "negative": 418,
        "positive": 446,
        "neutral": 264,
        "keyword": "South Carolina",
        "count": 1128
    },
    {
        "negative": 417,
        "positive": 460,
        "neutral": 251,
        "keyword": "Jason David Frank",
        "count": 1128
    },
    {
        "negative": 368,
        "positive": 364,
        "neutral": 318,
        "keyword": "Kyrie",
        "count": 1050
    },
    {
        "negative": 504,
        "positive": 280,
        "neutral": 263,
        "keyword": "Migos",
        "count": 1047
    },
    {
        "negative": 263,
        "positive": 489,
        "neutral": 269,
        "keyword": "Dusty Baker",
        "count": 1021
    },
    {
        "negative": 324,
        "positive": 366,
        "neutral": 313,
        "keyword": "#thiccsgiving",
        "count": 1003
    },
    {
        "negative": 344,
        "positive": 424,
        "neutral": 233,
        "keyword": "Notre Dame",
        "count": 1001
    },
    {
        "negative": 329,
        "positive": 406,
        "neutral": 226,
        "keyword": "Lions",
        "count": 961
    },
    {
        "negative": 279,
        "positive": 370,
        "neutral": 157,
        "keyword": "Fauci",
        "count": 806
    },
    {
        "negative": 233,
        "positive": 270,
        "neutral": 192,
        "keyword": "Christmas",
        "count": 695
    },
    {
        "negative": 164,
        "positive": 244,
        "neutral": 282,
        "keyword": "Space Karen",
        "count": 690
    },
    {
        "negative": 217,
        "positive": 223,
        "neutral": 212,
        "keyword": "So Twitter",
        "count": 652
    },
    {
        "negative": 105,
        "positive": 182,
        "neutral": 83,
        "keyword": "Rush Hour",
        "count": 593
    },
    {
        "negative": 176,
        "positive": 183,
        "neutral": 197,
        "keyword": "Powell",
        "count": 556
    },
    {
        "negative": 183,
        "positive": 190,
        "neutral": 170,
        "keyword": "Ayton",
        "count": 543
    },
    {
        "negative": 174,
        "positive": 207,
        "neutral": 124,
        "keyword": "DeSantis",
        "count": 505
    },
    {
        "negative": 185,
        "positive": 138,
        "neutral": 158,
        "keyword": "Nike",
        "count": 481
    },
    {
        "negative": 165,
        "positive": 134,
        "neutral": 181,
        "keyword": "Hive",
        "count": 480
    },
    {
        "negative": 156,
        "positive": 175,
        "neutral": 101,
        "keyword": "Buckeyes",
        "count": 432
    },
    {
        "negative": 130,
        "positive": 179,
        "neutral": 122,
        "keyword": "#Warzone2",
        "count": 431
    },
    {
        "negative": 91,
        "positive": 170,
        "neutral": 168,
        "keyword": "Zags",
        "count": 429
    },
    {
        "negative": 110,
        "positive": 201,
        "neutral": 117,
        "keyword": "Irene Cara",
        "count": 428
    },
    {
        "negative": 0,
        "positive": 0,
        "neutral": 0,
        "keyword": "Sean Taylor",
        "count": 422
    },
    {
        "negative": 152,
        "positive": 164,
        "neutral": 104,
        "keyword": "Mac Jones",
        "count": 420
    },
    {
        "negative": 72,
        "positive": 145,
        "neutral": 190,
        "keyword": "Heidi Klum",
        "count": 407
    },
    {
        "negative": 160,
        "positive": 166,
        "neutral": 80,
        "keyword": "Point Break",
        "count": 406
    },
    {
        "negative": 181,
        "positive": 137,
        "neutral": 88,
        "keyword": "Died Suddenly",
        "count": 406
    },
    {
        "negative": 161,
        "positive": 179,
        "neutral": 64,
        "keyword": "Insincere",
        "count": 404
    },
    {
        "negative": 138,
        "positive": 170,
        "neutral": 93,
        "keyword": "Blake Masters",
        "count": 401
    },
    {
        "negative": 137,
        "positive": 156,
        "neutral": 107,
        "keyword": "Bama",
        "count": 400
    },
    {
        "negative": 143,
        "positive": 177,
        "neutral": 80,
        "keyword": "Richard Fierro",
        "count": 400
    },
    {
        "negative": 129,
        "positive": 142,
        "neutral": 119,
        "keyword": "Ronaldo",
        "count": 390
    },
    {
        "negative": 147,
        "positive": 144,
        "neutral": 96,
        "keyword": "Kathy Griffin",
        "count": 387
    },
    {
        "negative": 98,
        "positive": 151,
        "neutral": 109,
        "keyword": "George Will",
        "count": 358
    },
    {
        "negative": 96,
        "positive": 119,
        "neutral": 137,
        "keyword": "Grover Cleveland",
        "count": 352
    },
    {
        "negative": 104,
        "positive": 143,
        "neutral": 104,
        "keyword": "Mariah Carey",
        "count": 351
    },
    {
        "negative": 106,
        "positive": 117,
        "neutral": 115,
        "keyword": "Meth",
        "count": 338
    },
    {
        "negative": 125,
        "positive": 91,
        "neutral": 110,
        "keyword": "Nick Fuentes",
        "count": 326
    },
    {
        "negative": 108,
        "positive": 122,
        "neutral": 83,
        "keyword": "Trent Reznor",
        "count": 313
    },
    {
        "negative": 78,
        "positive": 145,
        "neutral": 88,
        "keyword": "Caleb Williams",
        "count": 311
    },
    {
        "negative": 107,
        "positive": 114,
        "neutral": 74,
        "keyword": "Brian Kelly",
        "count": 295
    },
    {
        "negative": 121,
        "positive": 90,
        "neutral": 77,
        "keyword": "Jerry Jones",
        "count": 288
    },
    {
        "negative": 110,
        "positive": 104,
        "neutral": 68,
        "keyword": "Eagles",
        "count": 282
    },
    {
        "negative": 87,
        "positive": 110,
        "neutral": 84,
        "keyword": "Pete Davidson",
        "count": 281
    },
    {
        "negative": 88,
        "positive": 104,
        "neutral": 86,
        "keyword": "Mastodon",
        "count": 278
    },
    {
        "negative": 81,
        "positive": 105,
        "neutral": 88,
        "keyword": "Tumblr",
        "count": 274
    },
    {
        "negative": 96,
        "positive": 94,
        "neutral": 83,
        "keyword": "Joy Reid",
        "count": 273
    },
    {
        "negative": 58,
        "positive": 97,
        "neutral": 116,
        "keyword": "#UFC281",
        "count": 271
    },
    {
        "negative": 72,
        "positive": 104,
        "neutral": 75,
        "keyword": "Jeff Jarrett",
        "count": 251
    },
    {
        "negative": 80,
        "positive": 102,
        "neutral": 52,
        "keyword": "Michigan",
        "count": 234
    },
    {
        "negative": 79,
        "positive": 61,
        "neutral": 84,
        "keyword": "Young MA",
        "count": 224
    },
    {
        "negative": 74,
        "positive": 87,
        "neutral": 58,
        "keyword": "#AEWDynamite",
        "count": 219
    },
    {
        "negative": 76,
        "positive": 68,
        "neutral": 67,
        "keyword": "Balenciaga",
        "count": 211
    },
    {
        "negative": 65,
        "positive": 84,
        "neutral": 60,
        "keyword": "Jarry",
        "count": 209
    },
    {
        "negative": 63,
        "positive": 70,
        "neutral": 75,
        "keyword": "Justin Jefferson",
        "count": 208
    },
    {
        "negative": 59,
        "positive": 89,
        "neutral": 55,
        "keyword": "#WakandaForever",
        "count": 203
    },
    {
        "negative": 93,
        "positive": 40,
        "neutral": 54,
        "keyword": "University of Virginia",
        "count": 187
    },
    {
        "negative": 82,
        "positive": 53,
        "neutral": 50,
        "keyword": "Iraq",
        "count": 185
    },
    {
        "negative": 53,
        "positive": 68,
        "neutral": 63,
        "keyword": "Gaming",
        "count": 184
    },
    {
        "negative": 46,
        "positive": 81,
        "neutral": 56,
        "keyword": "#RIPJimmyFallon",
        "count": 183
    },
    {
        "negative": 59,
        "positive": 90,
        "neutral": 28,
        "keyword": "NICKI WROTE IT",
        "count": 177
    },
    {
        "negative": 15,
        "positive": 30,
        "neutral": 18,
        "keyword": "Mordecai",
        "count": 174
    },
    {
        "negative": 46,
        "positive": 67,
        "neutral": 52,
        "keyword": "Daniel Radcliffe",
        "count": 165
    },
    {
        "negative": 42,
        "positive": 58,
        "neutral": 61,
        "keyword": "Truth Social",
        "count": 161
    },
    {
        "negative": 53,
        "positive": 63,
        "neutral": 44,
        "keyword": "Pence",
        "count": 160
    },
    {
        "negative": 29,
        "positive": 66,
        "neutral": 51,
        "keyword": "Mr. President",
        "count": 146
    },
    {
        "negative": 62,
        "positive": 46,
        "neutral": 35,
        "keyword": "Cenk",
        "count": 143
    },
    {
        "negative": 38,
        "positive": 73,
        "neutral": 30,
        "keyword": "Zanab",
        "count": 141
    },
    {
        "negative": 44,
        "positive": 56,
        "neutral": 38,
        "keyword": " Irsay",
        "count": 138
    },
    {
        "negative": 63,
        "positive": 40,
        "neutral": 34,
        "keyword": "Paul Ryan",
        "count": 137
    },
    {
        "negative": 50,
        "positive": 37,
        "neutral": 49,
        "keyword": "Electron",
        "count": 136
    },
    {
        "negative": 56,
        "positive": 45,
        "neutral": 33,
        "keyword": "Charlottesville",
        "count": 134
    },
    {
        "negative": 27,
        "positive": 61,
        "neutral": 44,
        "keyword": "Veterans Day",
        "count": 132
    },
    {
        "negative": 52,
        "positive": 51,
        "neutral": 28,
        "keyword": "Boebert",
        "count": 131
    },
    {
        "negative": 42,
        "positive": 55,
        "neutral": 33,
        "keyword": "Dunkey",
        "count": 130
    },
    {
        "negative": 43,
        "positive": 51,
        "neutral": 36,
        "keyword": "Jimbo",
        "count": 130
    },
    {
        "negative": 37,
        "positive": 59,
        "neutral": 33,
        "keyword": "Namor",
        "count": 129
    },
    {
        "negative": 41,
        "positive": 35,
        "neutral": 51,
        "keyword": "Jon Jones",
        "count": 127
    },
    {
        "negative": 57,
        "positive": 39,
        "neutral": 31,
        "keyword": "Tiffany Cross",
        "count": 127
    },
    {
        "negative": 49,
        "positive": 48,
        "neutral": 29,
        "keyword": "Gen Z",
        "count": 126
    },
    {
        "negative": 49,
        "positive": 55,
        "neutral": 22,
        "keyword": "Manchin",
        "count": 126
    },
    {
        "negative": 44,
        "positive": 31,
        "neutral": 45,
        "keyword": "Ann Coulter",
        "count": 120
    },
    {
        "negative": 37,
        "positive": 45,
        "neutral": 35,
        "keyword": "Walker",
        "count": 117
    },
    {
        "negative": 0,
        "positive": 0,
        "neutral": 0,
        "keyword": "Vindman",
        "count": 112
    },
    {
        "negative": 32,
        "positive": 33,
        "neutral": 31,
        "keyword": "Liz Cheney",
        "count": 96
    },
    {
        "negative": 34,
        "positive": 36,
        "neutral": 21,
        "keyword": "Sark",
        "count": 91
    },
    {
        "negative": 45,
        "positive": 16,
        "neutral": 26,
        "keyword": "Atlantic Station",
        "count": 87
    },
    {
        "negative": 23,
        "positive": 29,
        "neutral": 27,
        "keyword": "Wizkid",
        "count": 79
    },
    {
        "negative": 16,
        "positive": 46,
        "neutral": 14,
        "keyword": "Jesse James",
        "count": 76
    },
    {
        "negative": 19,
        "positive": 9,
        "neutral": 43,
        "keyword": "Fuentes",
        "count": 71
    },
    {
        "negative": 25,
        "positive": 18,
        "neutral": 19,
        "keyword": "Sarah Logan",
        "count": 62
    },
    {
        "negative": 18,
        "positive": 32,
        "neutral": 12,
        "keyword": "Emoni Bates",
        "count": 62
    },
    {
        "negative": 18,
        "positive": 16,
        "neutral": 25,
        "keyword": "Defund NPR",
        "count": 59
    },
    {
        "negative": 15,
        "positive": 23,
        "neutral": 20,
        "keyword": "Since Twitter",
        "count": 58
    },
    {
        "negative": 14,
        "positive": 21,
        "neutral": 17,
        "keyword": "Mattress Mack",
        "count": 52
    },
    {
        "negative": 18,
        "positive": 14,
        "neutral": 12,
        "keyword": "Twitter 2.0",
        "count": 44
    },
    {
        "negative": 6,
        "positive": 12,
        "neutral": 11,
        "keyword": "Noles",
        "count": 29
    },
    {
        "negative": 10,
        "positive": 8,
        "neutral": 6,
        "keyword": "Davido",
        "count": 24
    }
]

const allKeys = ["positive", "negative", "neutral"];

const colors = {
  "positive": "blue",
  "negative": "red",
  "neutral": "green"
};


function RedditAnalysis() {
  const [keys, setKeys] = useState(allKeys);
  const [dataEnd, setDataEnd] = useState(10);
  const [chartdata, setChartData] = useState([]);
  const [totalData , setTotalData] = useState([]);
  useEffect(() => {
      async function fetchData() {
        try {
          console.log('Hello!!')
          const data = await fetchRedditAnalysisData()
          let chartD = data.slice(0, dataEnd);
          setTotalData(data)
          setChartData(chartD);
          } catch(err) {
            let chartD = fallbackCommentsData.slice(0, dataEnd);
            setTotalData(fallbackCommentsData)
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
      <div style={ { width: "1000px", marginLeft: "100px",  marginTop: "100px" } }>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ width: "500px", textAlign: "left" }}>Reddit Comments Sentiment Analysis</h4>
        <div style={ { display: 'flex', width: "160px", justifyContent: 'space-between', alignItems: 'center' } }>
        <button style={{alignSelf: 'end' }} onClick={onPrevButton}>Prev</button>
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

export default RedditAnalysis;
