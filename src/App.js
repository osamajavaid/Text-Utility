import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About'
import React, {useState} from 'react';
import Alert from './Components/Alert';
// import {Routes,Route} from 'react-router'
// import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {
  // const [switch, setSwitch] = useState("Dark Mode")
  const [mode, setMode] = useState('dark')
  const [btn, setBtn] = useState('Dark Mode')
  const [alert, setAlert] = useState(null)
  
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleHandler =()=>{
    if(mode==="dark"){
      document.body.style.backgroundColor = 'white'
      setMode('danger')
      setBtn('Light Mode')
      showAlert('Light Mode has been enabled', 'success')
      // console.log("light")
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = '#333'
      setBtn('Dark Mode')
      showAlert('Dark Mode has been enabled', 'success')


      // console.log("dark")
    }
  }
  return (
    <Router>
        <Navbar navMode={mode} Myswitch={btn} toggle={toggleHandler}/>
        <Alert Alert={alert} />
        <Routes>
            <Route exact path="/" element={<Textform navMode={mode} toggle={toggleHandler} showAlert={showAlert}/>}>
            </Route>
            <Route exact path="/about" element={<About navMode={mode}/>}>
            </Route>
          </Routes>
    </Router>
  );
}

export default App;
