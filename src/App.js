import React from "react";
import "./style.css";
import Tweet from "./tweet";

function App() {
  return (
    <div className="app">
      <Tweet name="Said" massage="this is a random tweet" likesNumber="90k" />
      <Tweet name="Sofia" massage="I am a true queen" likesNumber="50k" />
      <Tweet name="Zsofie" massage="my new app is available" likesNumber="45k"
      />
    </div>
  );
}

function Tweet(props) {
  return (
    <div className="tweet">
      <h3>{props.name}</h3>
      <p>{props.massage}</p>
      <h3>{props.likesNumber}</h3>
    </div>
  );
}

export default App;
