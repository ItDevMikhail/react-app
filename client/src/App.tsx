import React from 'react';
import './reset.css';
import './App.css';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Footer from './components/footer';
import Header from './components/header';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { rootReducer } from './redux/rootReducer';
import { validateMiddleware } from './redux/middleware';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk, validateMiddleware)));

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;

