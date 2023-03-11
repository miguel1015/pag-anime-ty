import './App.css';
import Api from './components/Api';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />     
          <Route path='/animes' element={<Api/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
