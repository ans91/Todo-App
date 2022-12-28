import './App.css';
import Todo from './Todo.js';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState(false) 

  return (
    <div className='mainBody'
       style={{
        alignItems: "flex-start",
        backgroundColor: mode?"black":"white",
       }}>
       <Todo mode = {mode}
       setMode={setMode}/>
    </div>
  );
}

export default App;
