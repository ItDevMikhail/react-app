import React from 'react';
import './reset.css';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="content">
          <Header />
          <div className="container">
            <AppRouter />
          </div>
        </div>
        <div className="footerWrapper">
          <Footer />
        </div>
      </div >
    </BrowserRouter>
  );
}

export default App;

