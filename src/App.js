import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Amina from './Amina';
import Ali from './Ali';

function App() {
  return (
    <BrowserRouter> 
    <Routes>
        <Route path="/amina" element={<Amina />} />
        <Route path="/ali" element= {<Ali />} />
    </Routes>

  </BrowserRouter>
  );
}

export default App;
