import React, { useState } from 'react';
import './App.css';
import ListOfGifs from './Components/ListOfGifs';
import { Link, Route } from 'wouter';

const App = () => {
  const [keyword, setKeyword] = useState('');
  return (
    <div className='App'>
      <section className='App-content'>
        <input value={keyword} onChange={(e) => setKeyword(e.target.value)}></input>
        <Link to={`/gif/${keyword}`}>Buscar</Link>
        <Route path='/gif/:keyword' component={ListOfGifs} />
        {/* <ListOfGifs keyword={keyword} /> */}
      </section>
    </div>
  );
};

export default App;
