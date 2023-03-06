import React from 'react';
import './App.css';
import { Header,Home } from './components';
import Jump from 'react-reveal/Jump';

function App() {
  return (
    <div className="app">
    {/* <Jump> */}
    <Header/>
    {/* </Jump> */}
      <Home/>
    </div>
  );
}

export default App;
