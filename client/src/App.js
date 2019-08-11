import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Viewer from './components/Viewer';
import axios from 'axios';

import './App.css';

function App() {
  const [state, setState] = useState();

  useEffect(() => {
    axios
      .get('https://muddyminds.herokuapp.com/api/rooms/')
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
     _{Object.keys(state).map(props=> {
       return <Viewer data={state(props)} key={props}/>
     })}
    </div>
  );
}

export default App;
