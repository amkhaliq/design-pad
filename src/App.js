import React from 'react';
import DesignContainer from './components/DesignContainer'
import './index.css';

function App() {
  return (
    /**
     * Code snippet below will render the webpage
     */
    <div className="container">
      <h1 id="title">DESIGN PAD</h1>
        <div className="content-align">
          <DesignContainer />
        </div>
    </div>
  );
}

export default App;
