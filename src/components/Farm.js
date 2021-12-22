import React, {useState} from 'react'
import './Farm.css'
import Plant from './Plant'

function Farm() {

    // initializing state so that I an easily change farm representation
    const [items, setItems] = useState([])

    // going through nested loops to create a two-dimensional array, then setting it as State
    // each index contains id and needRain property
    for (let i = 0; i < 10; i++) {
        items[i] = [].fill(null)
        for (let y = 0; y < 10; y++) {
            items[i].push({ id: i * 10 + y, needRain: 1});
        }
    }

    // Main function to generate rain
    // randomly selects id between 0 ~ 99, 
    // I want to find a corresponding index and update the needRain value 
    function makeItRain() {
        
        // counter for tracking how long it will take to water the whole farm
        // another counter to keep iterating until all plants are watered
        let counter = 0;
        let rainNeeded = 100;
        
        // while dry plants > 0 
        while(rainNeeded > 0){
            // randomly select column and row for 2d matrix
            let x = Math.floor(Math.random() * 10)
            let y = Math.floor(Math.random() * 10)
            
            // if randomly selected index needs rain, 
            if(items[x][y].needRain != 0){

                // *** Need to figure out a way to update needRain value by -1, and set it as state ***
                
                // setItems(items.map = (arr, i) => {
                //     arr.map = (item, j) => {

                //     }
                // })

                rainNeeded = rainNeeded - 1;
            }
            // If we landed on the plant that does not need rain, we don't need to update the State
            // we just need to update the counter to count the rain
            counter++
        }

        window.alert(`watered all the plants in ${counter} tries`);
    }

    // map through the plants matrix and renders Plant component
    // assigning key, id and needRain class
    return (
        <div className='window'>
            <div className='farm'>
                {items.map((columns) => (
                    <div>
                        {columns.map((plant) => (
                            <Plant key={plant.id} id={plant.id} needRain={plant.needRain} />
                        ))}
                    </div>
                ))}
            </div>

            {/* when clicked, this button will call MakeItRain function */}
            <button onClick={makeItRain}>Make it rain</button>
        </div>
    )
}

export default Farm
