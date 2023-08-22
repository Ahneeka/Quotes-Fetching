import { useState } from "react";
import axios from "axios";
import styles from "./Quote/styles.module.css";

function Quote() {
  const [quote, setQuote] = useState("");
  const getQuote = () => {
    axios
      .get("http://api.quotable.io/random")
      .then((res) => {
        console.log(res.data.content);
        setQuote(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.con2}>
        <button className={styles.con3} onClick={getQuote}>Get Quote</button>
        {/* { quote ? <p>{quote}</p> : null }  */}
                {/* or */}
        {quote && <p>{quote}</p>}
      </div>
    </div>
  );
}

export default Quote;
