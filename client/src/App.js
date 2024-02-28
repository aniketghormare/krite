// src/App.js
import React from 'react';

import Allroutes from './components/Allroutes';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div style={{ height: "auto", width: "100vw", border: "1px solid white",fontSize:"20px" }}>
      <div style={{height:"100px",width:"100%",border:"1px solid teal",backgroundColor:"teal"}}>
        <Navbar />
      </div>
      <br/>
      <div style={{width:"600px",height:"auto",margin:"auto",border:"1px solid black",padding:"10px"}}>
      
        <Allroutes />
      </div>


    </div>
  );
};

export default App;
