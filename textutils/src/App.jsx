import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500); // Alert will disappear after 1.5 seconds
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const toggleModered = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "red";
      showAlert("Red mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const buttonStyle = {
    backgroundColor: mode === "red" ? "yellow" : mode === "dark" ? "gray" : "blue",
    color: mode === "red" ? "black" : "white",
  };

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleModered={toggleModered} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route */}
            {/* path="/" */}
            {/* element={ */}
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} buttonStyle={buttonStyle} />
            {/* } */}
          {/* /> */}
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
