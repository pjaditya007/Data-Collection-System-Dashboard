import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProSidebarProvider } from 'react-pro-sidebar';
import {
    createBrowserRouter,
    RouterProvider,
    BrowserRouter
} from "react-router-dom";

import RedditAnalysis from "./components/redditAnalysis";
import StackedBarChart from "./components/StackedBarChart";
import TwitterAnalysis from "./components/twitterAnalysis";
import NewsArticlesAnalysis from "./components/newsAPIAnalysis";
import MultiLineChart from "./components/multiLineChart";
import TwitterRedditChart from "./components/twitterRedditChart";
import TwitterDataChart from "./components/twitterDataChart";
import SimpleWordCloud from "./components/wordcloud";
import ErrorPage from "./notFound";

ReactDOM.render(<ProSidebarProvider>
    <App />
</ProSidebarProvider>, document.getElementById("root"));
