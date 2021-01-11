import './App.css';
import React, { useState } from 'react';

function App() {

  const url =  "http://localhost:5000/api";
  fetch(url)
  .then(response => response.json())
    .then((jsonData) => {
      // jsonData is parsed json object received from url    
      console.log(jsonData)
    })
    .catch((error) => {
      // handle your errors here
      console.error(error)
    })

    return <div>
      <h2>Example</h2>
    </div>

}

export default App;
