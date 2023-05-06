import React from 'react';
import NavBar from "./components/Navbar/NavBar";
import "./App.css";
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import { Originals,action,horror } from './components/urls';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={Originals} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={horror} title="Horror Movies" isSmall />
    </div>
  );
}

export default App;
