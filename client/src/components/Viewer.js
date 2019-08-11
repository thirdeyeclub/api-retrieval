import React from 'react';

import '../App.css';

function Viewer(props) {
    return(
        <div>
        <h1>Room: {props.state.name}</h1>
        <h2>Description: {props.state.description}</h2>
        </div>
    )
}
export default Viewer