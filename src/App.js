import './App.css';
//import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react';
import Alert from './component/Alert';
//import {
//  BrowserRouter as Router,
//  Switch,
//  Route
//} from "react-router-dom";





function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert= (message, type)=>{
    setAlert({
    msg: message,
    type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
   }
   const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    }
    
  const toggleMode =(cls)=>{
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-' + cls);
    if(mode=='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#13062d';
      showAlert("Dark mode has been enabled" , "success");
      document.title = 'Textutils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled" , "success");
      document.title = 'Textutils - Light Mode';
    }
  }
  return (
  <>
  {/*<Router>*/}
  <Navbar title = "TextUtils" mode = {mode} toggleMode ={toggleMode} />
  <Alert alert = {alert}/>
  <div className="container my-3">
  {/*<Switch>
          <Route path="/about">
            <About />
          </Route>
  <Route path="/">*/}
            <TextForm showAlert= {showAlert} heading="Enter the text to analyze below" mode={mode}/>
          {/*</Route>
  </Switch>*/}
  </div>
  {/*</Router>*/}
  </>
  );
}

export default App;
