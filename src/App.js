import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./containers/List";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello, World</h1>
      <Router>
        <Routes>
          <Route path="/" exact component={List} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;