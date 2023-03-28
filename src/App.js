import logo from './logo.svg';
import './App.css';
import First from './Pages/First';
import Second from './Pages/Second';
import Third from './Pages/Third';
import Fourth from './Pages/Fourth';
import Five from './Pages/Five';
import Six from './Pages/Six';
import Seven from './Pages/Seven';
import { useState } from 'react';
import Loader from './Pages/Loader';

function App() {
  const[loading,setLoading]=useState(true);

  setTimeout(function(){
    setLoading(false)
 }, 2500);
 
  return (

    <div>
      {loading ? <Loader/>: <>
     <First/>
     <Second/>
     <Third/>
     <Fourth/>
     <Five/>
     <Six/>
     <Seven/>
     </>}
    </div>
  );
}

export default App;
