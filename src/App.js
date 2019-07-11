import React from 'react';
import './App.css';
import Greeting1 from './Greeting1'
import Greetings2 from './Greetings2'

const App = () => (
  <div>
      <Greeting1 firstName = "John" lasName = "Smith" />
      <Greetings2 firstName = "Bill" lastName = "Gates" />
      
  </div>
);

export default App;
