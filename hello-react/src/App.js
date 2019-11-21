import React from 'react';

//includes
import './Assets/css/default.min.css';

//components
import Dash from './components/mainComponents/dashboard';

var today = new Date(),
	todaysDate = "bkg-"+today.getDate();

function App() {
  return (
    <div className="App" id={ todaysDate }>
      <Dash />
    </div>
  );
}

export default App;
