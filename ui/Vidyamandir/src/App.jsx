import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Signup from './signup';
import Homepage from './homepage';
import Addcourse from './addcourse';
import Signin from './singin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appbar from './appbar';
import Explorecard from './explorecard';
import Footer from './footer';
import { RecoilRoot } from 'recoil';
import YourCourses from './yourcourses';

function App() {
  return (
    <div style={{ backgroundColor: "#000000", color: "#FFD700" }}>
      <RecoilRoot>
        <Router>
          <Appbar />
          <Routes>
            <Route path='/addcourse' element={<Addcourse />} />
            <Route path='/' element={<Homepage />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Signin />} />
            <Route path='/card/:courseid' element={<Explorecard />} />
            <Route path="/yourcourses" element={<YourCourses />} />
          </Routes>
          <Footer />
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
