import './App.css';
import React from 'react';
import Home from './Components/Home';
import Header from './Components/Header';
import PokemonIndie from './Components/PokemonIndie';
import Search from './Components/Search';
import NotFound from './Components/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pesquisa/:name" element={<Search />} />
        <Route path="pokemon/:id" element={<PokemonIndie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
