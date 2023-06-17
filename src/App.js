import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const[mode, setMode] = useState('light');
  const[text, settext] = useState('Enable DarkMode');
  const[alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setalert(null)
    },2000)
  }

  const togglemode = () => {
    if(mode === 'light'){
      setMode('dark')
      settext('Enable LightMode')
      document.body.style.backgroundColor = '#171749'
      showalert("Dark mode has enabled", "success")
      document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode('light')
      settext('Enable DarkMode')
      document.body.style.backgroundColor = 'white'
      showalert("Light mode has enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title= "Code with Shivam" abouttext = "About Us" mode={mode} togglemode = {togglemode} text = {text}/>
    <Alert alert={alert}/>
    {/* <Switch>
      <Route path="/about">
        <About/>
      </Route>

      <Route path="/"> */}
      <TextForm showalert = {showalert} heading="Enter the text to analyze the data" mode={mode}/>
      {/* </Route>
    </Switch>
    </Router> */}
    </>
  );
}

export default App;
