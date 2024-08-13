import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import First from "./components/First";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
      <First />
    </Router>
  );
}

const Page1 = () => {
  return <h2>Page 1 Content</h2>;
}

const Page2 = () => {
  return <h2>Page 2 Content</h2>;
}

const Page3 = () => {
  return <h2>Page 3 Content</h2>;
}

export default App;


