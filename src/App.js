import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import './Rick_and_Morty.png';
import './App.css';

function App() {


  return (
    <div id="body">
      <div id="container">
        <div id="title">
          <img src={require("./Rick_and_Morty.png")} height= "150px"/>
        </div>

        <h1>Characters</h1>  

        
        <div id= "card-container">
          <Card />
        </div>
      </div>

    </div>

  );
}

export default App;
