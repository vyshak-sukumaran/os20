import React, { useEffect, useState } from 'react';
import './App.css'
import Boot from "./components/boot/Boot";
import Main from './components/Main';


function App() {
  const [booting, setBooting] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setBooting(false)
    }, 7000);
  }, [])
  return (
    <div className="App">

      {
        booting ?
          <Boot />
          :
          <Main />
      }

    </div>
  );
}

export default App;
