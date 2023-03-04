import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import './Rick_and_Morty.png';
import './App.css';

function App() {
  const [page, setPage] = useState(1)
  useEffect(() => {
    console.log(page)
    
    //prevents page from being a below 1 or above 42
    if(page >= 42){
      setPage(42)
    }
    else if(page <= 1){
      setPage(1);
    }

  });


return (
  <div id="body">
    <div id="container">
      <div id="title">
        <img src={require("./Rick_and_Morty.png")}/>
      </div>
      <h1 id="sub-title">Characters:</h1>
      <div id="buttons">
        <button onClick={() => setPage(page - 1)}>
          Previous
        </button>         
        <button onClick={() => setPage(page + 1)}>
          Next
        </button>          
      </div> 
      <p id ="page-number">Page {page} </p>

      <div id= "card-container">
        <Card page={page}/>
      </div>
    </div>
  </div>

);
}

export default App;
