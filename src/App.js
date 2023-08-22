import './App.css';
import { useState } from "react"
import axios from "axios"

function App() {
  const getQuote = () => {
    axios.get('http://api.quotable.io/random')
    .then(res =>{
      console.log(res.data.content)
    }).catch(err =>{
      console.log(err)
    })
  }
  return (
    <div className="App">
     <button onClick={getQuote}>Get Quote</button>
    </div>
  );
}

export default App;
