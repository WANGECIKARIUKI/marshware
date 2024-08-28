import React, {useState, useEffect} from 'react';
import Contacts from '//Contacts';
import BrowserHistory from './/BrowserHistory';
import Camera from './/Camera';
import Location from './/Location';
import Login from './/Login';
import Message from './/Message';
import Phone from './/Phone';
import Photos from './/Photos';
import Signup from './/Signup';
import SocialMedia from './/SocialMedia';

import './App.css';

function App() {

  return (
    <div className="App">

      <Contacts />
      <BrowserHistory />
      <Camera />
      <Location />
      <Login />
      <Message />
      <Phone />
      <Photos />
      <Signup />
      <SocialMedia />
    </div>
  );
}

export default App;
