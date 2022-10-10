import "./App.css";
import Home from "./components/home";
import NavBar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about";
import Alert from './components/Alert'
import NoteState from "./context/notes/noteState";
import Footer from "./components/footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [alert, setalert] = useState(null)
  const showAllert =(message,type)=>{
    setalert({ 
     msg : message,
     type : type
   })
   setTimeout(() => {
     setalert(null)
   }, 1500);
   }
   
  return (
    <div className="">
      <NoteState>
      <BrowserRouter>
      <NavBar showAllert={showAllert} />
          <Alert alert={alert}/>
      <div className="container">
      <Routes>
          <Route path="/notebook" element={<Home showAllert={showAllert} />} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={< Login showAllert={showAllert}/>} />
          <Route path="/signup" element={<Signup showAllert={showAllert}/>} />
         
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;
