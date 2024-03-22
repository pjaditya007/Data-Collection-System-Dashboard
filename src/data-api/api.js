const mongoURL = 'https://data.mongodb-api.com/app/data-ydoaf/endpoint/data/v1/action/find';
const aggTweetsURL = 'http://localhost:3000/users/getAggTweets';
const aggCommentsURL = 'http://localhost:3000/users/getAggComments';
const aggArticlesURL = 'http://localhost:3000/users/getAggArticles';
const wordcloudURL = 'http://localhost:3000/users/getWordCloud';

let myHeaders = new Headers();
myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:3000');
myHeaders.append('Access-Control-Allow-Credentials', 'true');
myHeaders.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
myHeaders.append('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
myHeaders.append("Content-Type", "application/json");


var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};



const fetchWordCloudData = () => {
    return new Promise((resolve, reject)=> {
        fetch(wordcloudURL, requestOptions)
        .then(response => response.json())
        .then(result => resolve(result))
        .catch(error => reject(error));
    })
}

const fetchTwitterAnalysisData = () => {
  return new Promise((resolve, reject)=> {
    fetch(aggTweetsURL, requestOptions)
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(error => reject(error));
})
}
const fetchRedditAnalysisData = () => {
  return new Promise((resolve, reject)=> {
    fetch(aggCommentsURL, requestOptions)
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(error => reject(error));
})
}

const fetchNewsAnalysisData = () => {
  return new Promise((resolve, reject)=> {
    fetch(aggArticlesURL, requestOptions)
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(error => reject(error));
})
}


module.exports = {
    fetchWordCloudData,
    fetchTwitterAnalysisData,
    fetchRedditAnalysisData,
    fetchNewsAnalysisData
}