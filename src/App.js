import './App.css';
import Todo from './Todo.js';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState(true) 

  return (
    <div className='mainBody'
       style={{
        alignItems: "flex-start",
        backgroundColor: mode?"black":"white",
        backgroundImage: mode? "url(/img/bg_img_dark.jpg)" : "url(/img/bg_img_light.jpg)",
        backgroundSize: "100vw 40vh",
       }}>
       <Todo mode = {mode}
       setMode={setMode}/>
    </div>
  );
}

export default App;
