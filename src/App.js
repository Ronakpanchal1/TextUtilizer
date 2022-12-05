import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import About from "./components/About";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message,type) =>{
    setAlert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1750);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#000";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
        <Navbar mode={mode}  toggleMode={toggleMode}/> 
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
              <Route exact path="/about" element={<About mode={mode} />}></Route>
              <Route exact path='/' element={<TextForm mode={mode} showAlert={showAlert} />}></Route>
          </Routes> 
        </div>
      </Router>
    </>
  );
}
export default App;
