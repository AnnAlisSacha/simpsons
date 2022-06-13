import { useState } from 'react';
import axios from 'axios';
import './App.css';
import QuoteCard from './components/QuoteCard';

const defaultQuote = {
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  character: "Apu Nahasapeemapetilon",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  characterDirection: "Left"
  }

const App = () => {

  const [simpson, setSimpson] = useState(defaultQuote);
  const getSimpson = () => {
    // Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
    .then((response) => response.data)
    // Use this data to update the state
    .then((data) => {
      console.log(data[0]);
      setSimpson(data[0]);
    });

};
//console.log(simpson)
  return (
    <div className='App'>
        <QuoteCard simpson={simpson} />
        <button type="button" onClick={getSimpson}>Change character</button>
    </div>
    );

}

export default App;