import React, { useEffect, useState } from "react";
import "./App.css";

import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import RedditAnalysis from "./components/redditAnalysis";
import StackedBarChart from "./components/StackedBarChart";
import TwitterAnalysis from "./components/twitterAnalysis";
import NewsArticlesAnalysis from "./components/newsAPIAnalysis";
import MultiLineChart from "./components/multiLineChart";
// import TwitterDataChart from "./components/twitterDataChart";
import SimpleWordCloud from "./components/wordcloud";

function App() {
  const { collapseSidebar } = useProSidebar();

  return (
    <React.Fragment>
      <BrowserRouter>
      <div style={ { display: 'flex' } }>
        <div style={{ display: 'flex', height: '100vh' }}>
          <Sidebar>
            <Menu>
              <MenuItem routerLink={<Link to="/reddit-analysis" />}> Reddit Analysis</MenuItem>
              <MenuItem routerLink={<Link to="/twitter-analysis" />}> Twitter Analysis</MenuItem>
              <MenuItem routerLink={<Link to="/news-analysis" />}> News Articles Analysis</MenuItem>
              {/* <MenuItem routerLink={<Link to="/twitter-reddit-analysis" />}> Twitter Reddit Analysis</MenuItem> */}
              <MenuItem routerLink={<Link to="/wordcloud" />}> Word Cloud Reddit</MenuItem>
              <MenuItem routerLink={<Link to="/keyword-analysis" />}> Keywords Analysis</MenuItem>
            </Menu>
          </Sidebar>

        </div>
        <Routes>
          <Route path="/reddit-analysis" element={<RedditAnalysis />} />
          <Route path="/twitter-analysis" element={<TwitterAnalysis />} />
          <Route path="/news-analysis" element={<NewsArticlesAnalysis />} />
          <Route path="/wordcloud" element={<SimpleWordCloud />} />
          <Route path="/keyword-analysis" element={<MultiLineChart />} />
        </Routes>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
