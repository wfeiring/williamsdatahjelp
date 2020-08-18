import React, { useState } from 'react';
import './App.css';


const Hide = () => {
  
  const [showResult, setShowResult] = useState(true)
  const [colorChange, setColor] = useState("rgb(9, 22, 83)")
  
  const hideText = () => setShowResult(false)
  const changeColor = () => setColor("rgb(83, 9, 9)")


  return (
    <div className="App">
      <div>
        <p value="Hide" className="noTrue" style={{color: colorChange}}>
          Nei.
        </p>
      </div>
      <div>
        <button className="men" value="Hide" onClick={() => {hideText()
        changeColor()}} >
          {showResult ? <Results/> :null }
        </button>
      </div>
    </div>
  );

}

const Results = () => (
  "Men hva om jeg..."
)

export default Hide;
