import './App.css';
import Registration from './pages/Registration';
import Login from './pages/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
  <Routes>
            <Route>
              <Route path="/register" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              
            </Route>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
