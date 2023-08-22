import { useState } from "react"
import axios from "axios"

function Quote() {
  const [quote, setQuote] = useState("")
  const getQuote = () => {
    axios.get('http://api.quotable.io/random')
    .then(res =>{
      console.log(res.data.content)
      setQuote(res.data.content)
    }).catch(err =>{
      console.log(err)
    })
  }
  return (
    <div className="App">
     <button onClick={getQuote}>Get Quote</button>
     {/* { quote ? <p>{quote}</p> : null }  */}
     { quote && <p>{quote}</p>}
    </div>
  );
}

export default Quote;
