/* Author: Cameron Chiaramonte */

import React, { useState } from 'react';
import Data from './Components/Data.js';
import './Styles/App.css';

function App() {

  let [year, setYear] = useState();
  let [month, setMonth] = useState();
  let [info, setInfo] = useState(
    {
      year: year,
      month: month
    }
  );

  return (
    <div>
    <div className = 'App'>
    <div className = "Header">
      <h3>Higher Lower Game</h3>
    </div>
    <div className = "startInfo">
    <div className = 'selects'>
    <select value={year} onChange={e => setYear(e.target.value)}>
      <option value = "2021">2021</option>
      <option value = "2020">2020</option>
      <option value = "2019">2019</option>
      <option value = "2018">2018</option>
      <option value = "2017">2017</option>
      <option value = "2016">2016</option>
    </select>
    <select value={month} onChange={e => setMonth(e.target.value)}>
      <option value = "01">01</option>
      <option value = "02">02</option>
      <option value = "03">03</option>
      <option value = "04">04</option>
      <option value = "05">05</option>
      <option value = "06">06</option>
      <option value = "07">07</option>
      <option value = "08">08</option>
      <option value = "09">09</option>
      <option value = "10">10</option>
      <option value = "11">11</option>
      <option value = "12">12</option>
    </select>
    </div>
    <button
      onClick ={() =>
        setInfo({year: year, month: month})
      }> Start! </ button>
    </div>
    <Data year={year} month={month} info={info}/>
    </div>
    <div className = 'nextButton'>
    <button
      onClick = {() =>
        setInfo({year: year, month: month})
      }> Next Question </ button>
    </div>
    <div className = 'instructions'>
      <h4>Instructions: Guess if the Wikipedia article on the right has more or less searches in you chosen year and month.</h4>
      <h4>If you're correct your streak will increase by 1, if you're wrong it will reset to 0.</h4>
      <h4>Click 'Next Question' to move on!</h4> 
    </div>
    </div>
  );
}

export default App;
