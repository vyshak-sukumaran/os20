import React, { useEffect, useState } from 'react';
import './App.css'
import Boot from "./components/boot/Boot";
import Main from './components/Main';
import useWindowSize from './hooks/useWindowSize';


function App() {
  const [booted, setBooted] = useState(false)

  let { width } = useWindowSize()

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setBooted(true)
    }, 7000);

    return () => {
      clearTimeout(timeOut)
    }
  }, [])
  return (
    <div className="App">
      {
        width >= 1080 ?
          <div className='max-container'>
            <Boot booted={booted} />
            <Main booted={booted} />
          </div>
          :
          <div className="soft-limiter">
            <div className="limit-text">
              <h1>Screen size not supported!</h1>
              <p>Minimum screen size need to be 1080 pixels.</p>
            </div>
          </div>
      }

    </div>
  );
}

export default App;
