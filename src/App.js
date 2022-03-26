import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import ROUTES from './_routes';
import {BrowserRouter, Route, Routes} from "react-router-dom"



function App() {
  return (
    <div className="wrapper">
     <BrowserRouter>
     <Header />
     <Routes>
     {ROUTES.map((item, index) => 
        <Route key={index} path={item.path} element = {<item.element/>}/>
      )}
     </Routes>
     <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
