import logo from './logo.svg';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
      <Route exact path='/'  element={<Home/>}/>
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/resume' element={<Resume/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
