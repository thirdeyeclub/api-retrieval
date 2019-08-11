import React, {useState, useEffect} from 'react';
import axios from 'axios'
import '../App.css';

function Viewer() {

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

    return(
        <div>
            { state === null ? 'loading...' :  state.map(s =>{
                return <><h1>Room: {s.name}</h1>
                <h2>Description: {s.description}</h2></>
            })}
        </div>
    )
}
export default Viewer