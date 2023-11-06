import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
          <div className='container'>
              <Routes>
                <Route path = "/" exact element={<ListEmployeeComponent/>}></Route>
                <Route path = "/employees" exact element={<ListEmployeeComponent/>}></Route>
                <Route path = "/add-employee/:id" exact element={<CreateEmployeeComponent/>}></Route>
                <Route path = "/view-employee/:id" exact element={<ViewEmployeeComponent/>}></Route>
              </Routes>
          </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
