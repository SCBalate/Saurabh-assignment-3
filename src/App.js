
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './components/Sidebar/Sidebar';
import MainPage from './components/MainPage/MainPage';




function App() {


  return (
    <Router>
     
        <div className="App">
        <div className='app-content'>
          <SideBar />
          <Routes>
            <Route exact path='/' element={<MainPage />} />
          </Routes>
        </div>
      </div>
      
      
    </Router>
  );
}

export default App;
