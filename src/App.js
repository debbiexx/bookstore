import './App.css';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <AppNavbar />
   <Routes>
            <Route>
            <Route path="/" element={<Home />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              
            </Route>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
