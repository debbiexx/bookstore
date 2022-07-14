// import Table from './components/Table';
// import ChildComponent from './components/ChildComponent';
// import Numbers from './components/Numbers';

// function App() {

//   const nam ="Debbie_j"
//   const data = [
//     {
//       fname: "Debbie",
//       lname:"Rosales"
//     },
//     {
//       fname: "Diana",
//       lname:"Rosales"
//     },
//     {
//       fname: "Donna jane",
//       lname:"Rosales"
//     }
//   ]
//   const sample = [2, 5, 6, 3, 8, 9];



//   return (
  
//     <div className="container">
//         <h1>Hello, I'm {nam}. And this is the Parent Component
//         </h1>
//         <Table names={data} />
//         <ChildComponent text = {`I am the 1st Child.`} />
//         <ChildComponent text = {`I am the 2nd Child.`} />
//         <ChildComponent text = {`I am the 3rd Child.`} />
//         <Numbers sam = {sample} />

//       </div>
//   );
// }

// export default App;

import './App.css';
// import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  {/* <AppNavbar /> */}
    
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
