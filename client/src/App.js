import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [state, setState] = useState;

  useEffect(() => {
    axios
      .get('https://lambda-coin.herokuapp.com/chain')
      .then(res => {
        setState(res.data);
      })
      .catch(err => {
        console.log("You have an error!", err);
      });
  }, []);
  
  console.log(state);
  
  return (
    <div className="App">
      welcome
    </div>
  );
}

export default App;
