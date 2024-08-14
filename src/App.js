import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PageOne from "./components/Pageone";
//import PageTwo from './components/PageTwo';
//import PageThree from './components/PageThree';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/page1" element={<PageOne />} />
                
            </Routes>
        </Router>
    );
}

export default App;

/*<Route path="/page2" element={<PageTwo />} />
                <Route path="/page3" element={<PageThree />} /> */