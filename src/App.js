import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Bar from './components/Bar'
import Route from './routes/route'


function App() {
  return (
    <BrowserRouter>
      <Bar />
      <Route />
    </BrowserRouter>
    
  );
}

export default App;