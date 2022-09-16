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
        (width >=1100 && width <=1366) ?
        <>
          <Boot booted={booted} />
          <Main booted={booted} />
        </>
        :
        <div className="soft-limiter">
          <div className="limit-text">
            <h1>Screen size not supported!</h1>
            <p>Try changing your screen width.</p>
            </div>
        </div>
      }

    </div>
  );
}

export default App;
