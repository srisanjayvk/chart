import './App.css';
import React from 'react';
import DonutChart from './components/DonutChart';
import Header from './components/Header';
import ComboChart from './components/ComboChart'
import Footer from './components/Footer';
import DialogBox from './components/DialogBox';


function App() {
  return (
    <>
    <Header/>
    <ComboChart />
    <DonutChart />
    <Footer />
    </>
  );
}

export default App;
