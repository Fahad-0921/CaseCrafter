import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
// import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert'
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

 const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
 } 
 setTimeout (() => {
  setAlert(null);
 },2000);

  const togglemode = () =>{
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor ="#042743"
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode("light")
   document.body.style.backgroundColor = "white"
   showAlert("Light mode has been enabled", "success")
    }
  }
  return (

    <>
   <Navbar title="CaseCrafter" mode={mode}  togglemode={togglemode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <Textform   showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
   {/* <About/> */}
   </div>
  
   </>
  );
}

export default App;
