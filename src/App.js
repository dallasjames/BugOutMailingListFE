import React from 'react';
import './App.css';
import Info from './components/info';
import MailList from './components/mail-list';
import Accepted from './components/accepted'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={props => 
        <>
        <Info /> 
        <MailList/>
        </>
        } />
      <Route exact path="/accepted" component={Accepted} />
    </div>
  );
}

export default App;
