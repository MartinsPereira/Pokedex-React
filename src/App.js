import './App.css';
import React from 'react';
import Home from './Components/Home';
import PokemonIndie from './Components/PokemonIndie';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Home />
        <PokemonIndie />
      </div>
    </div>
  );
}

export default App;
