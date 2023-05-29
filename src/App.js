import React from 'react'
import './App.css';
import { Box } from '@mui/material';
import {Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home';
import ExcerciseDetail from './pages/ExcersiceDetail';
import BmiCalculator from './pages/BmiCalculator';

const App = () => {
  return (
      <Box width="400px" sx={ {width: { xl: '1488px'} } } m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExcerciseDetail />} />
          <Route path="/BmiCalculator" element={<BmiCalculator />} />
        </Routes>
        <Footer />
      </Box>
  )
}

export default App;
//
//
// export const exerciseOptions =  {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '1144e44640msh866aeea4e26f4fbp129e3cjsnabc82c7aa74f',
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
// };
//
// export const youtubeOptions =  {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '1144e44640msh866aeea4e26f4fbp129e3cjsnabc82c7aa74f',
//     'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
//   }
// };
//
// export const BMIOptions = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '1144e44640msh866aeea4e26f4fbp129e3cjsnabc82c7aa74f',
//     'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
//   }
// };
//
//
//
// export const fetchData = async (url, options) => {
//   const response  = await fetch(url, options);
//   const data = await response.json();
//   return data;
// };
