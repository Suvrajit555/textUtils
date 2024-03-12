import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Navbar from './componet/Navbar';
import Textform from './componet/Textform';
import Alert from './componet/Alert';
import Color from './componet/Color';

function App() {
  const [mode, setMode] = useState('light');
  const [text, setText] = useState('');
  const [alert, setAlert] = useState(null);
  const [upper, setUpper] = useState('');
  const [on, seton] = useState('Switch To Dark Mode');

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    document.body.style.backgroundColor = 'red';
  };

  const togglemode = () => {
    if (mode === 'dark') {
      setMode('light');
      seton('Switch To Dark Mode');
      showalert('Dark Mode off', 'success');
      document.title = 'TextUtils-Light For Navbar';
    } else {
      setMode('dark');
      seton('Switch To Light Mode');
      showalert('Dark Mode on', 'success');
      document.title = 'TextUtils-Dark For Navbar';
    }
  };

  return (
    <>

      {/* <Navbar title={78} about="PANDA..."  */}
      <Navbar company="Amazon" mode={mode} togglemode={togglemode} on={on} />
      <Alert alert={alert} />
      <Router>
        <Routes>
          <Route exact path='/Textform' element={<Textform mode={mode} showalert={showalert} />} />
          <Route exact path='/Color' element={<Color />} />
        </Routes>
      </Router>
      {/* <Navbar company="Amazon" mode={mode} togglemode={togglemode} on={on} />
      <Textform mode={mode} showalert={showalert} />
      <Alert alert={alert} />
      <Color /> */}
    </>
  );
}

export default App;

//   return (

// }
