import React from 'react'
import './Plant.css'

function Plant(props) {

    //renders a single plant.
    //checks for needRain value, and changes the background color based on 
    //whether we need rain or not
    return (
        <div className={props.needRain ? 'dry' : 'wet'} key={props.key} id={props.id}> Rain required: {props.needRain}</div>
    )
}

export default Plant
