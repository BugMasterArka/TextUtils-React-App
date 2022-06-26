// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); //tells whether darkmode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=> {
    setAlert({
      msg: message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#202941';
      // document.body.style.color='white';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils - Dark Mode';
      setTimeout(()=>{
        document.title='TextUtils - Home';
      },1000)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      // document.body.style.color='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils - Light Mode';
      setTimeout(()=>{
        document.title='TextUtils - Home';
      },1000)
    }
  }

  return (
    <>
      {/* <Router> */}
        <NavBar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About/>}/> */}
            {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyse below" mode={mode} showAlert={showAlert}/>}/> */}
            <TextForm heading="Enter the text to analyse below" mode={mode} showAlert={showAlert}/>
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}
// what will be by default
export default App;
