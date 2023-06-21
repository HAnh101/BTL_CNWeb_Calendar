import React from "react";
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import "./App.css";
import Month from "./containers/Month/Month";
import Week from "./containers/Week/Week";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Month />} /> 
        <Route exact path="/week" element={<Week />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
