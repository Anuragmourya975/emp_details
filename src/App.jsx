import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Edit from "./components/Edit";
import Form from "./components/Form";
import Home from "./components/Home";
import Table from "./components/Table";
// import Search from "./components/Search";

function App() {
  return (
    <Router>
      {/* <Home /> */}
    
      <Routes>
        <Route path="/" element={<Navigate to="/table" />} />
        <Route exact path="/form" element={<Form />}></Route>
        <Route exact path="/edit/:id" element={<Edit />}></Route>
        <Route exact path="/table" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
