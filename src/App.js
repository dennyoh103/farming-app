import './App.css';
import Farm from './components/Farm';

// We are going to help a farmer. We will be building the functional code for an application that determines his plot of land and puts water for each plant. The cool part is that we will use organic means and generate a rain cloud, so account for how the rain cloud would generate and rain would fall. We will have the farmer push a button and then start the rain cloud, and then alert the farmer when it's complete. (console output of time is fine).

// 1 - Let's start with a structure of what the farmer's land would look like in code with plants.
// 2 - Let's write the function to generate the rain
// 3 - Let's determine how long it will take and alert the farmer of the time it took to water his field.
// 4- Build a UI using react, get creative and determine display the timer and the drops of water hitting the farmer's plants (grid), you can do this by changing a square to a color, or however you would like to display this. Be creative.

// Hints: Each plant just needs 1 drop of water (rain). His field has 10 x 10 plants. It doesn't matter if a plant gets more than 1 drop of rain, but each plant has to have at least 1 drop.

// Bonus: What is each plant required 3 drops of water instead of 1.

function App() {
  return (
    <div className="App">
      <Farm/>
    </div>
  );
}

export default App;
