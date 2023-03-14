import React from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import Sale from './components/Sale';
import Topoffer from './components/Topoffer';
import MoreDeals from './components/MoreDeals';

const App = () => {
  return (
    <div>
      <Header />
      <Categories />
      <Sale />
      <Topoffer />
      <MoreDeals />
    </div>
  )
}

export default App
