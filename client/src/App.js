import React from "react";
import "./App.css";
import axios from "axios";
import TuttiFrutti from "./components/TuttiFrutti"

function App() {
  axios
    .get("/api/")
    .then((response) => {
      console.log("funciona");
      console.log(response.data);
    })
    .catch((err) => {
      console.log("no funciona");
      console.log(err);
    });

  return (
    <div className="App">
      <h1>Hello</h1>
      <TuttiFrutti/>
    </div>
  );
}

export default App;
