
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './components/Sidebar/Sidebar';
import MainPage from './components/MainPage/MainPage';
import { useEffect} from 'react';



function App() {

useEffect(() => {
  setTimeout(() => {
    }, 2000);
}, []); 

  return (
    <Router>
     
        <div className="App">
        <div className='a-app-content'>
          <SideBar />
          <Routes>
            {/* Route to MainPage component */}
            <Route exact path='/' element={<MainPage />} />
          </Routes>
        </div>
      </div>
      
      
    </Router>
  );
}

export default App;
