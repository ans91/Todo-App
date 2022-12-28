import "./Todo.css";
import InputField from "./InbputField";
import TodoList from "./TodoList";
import StatusBox from "./StatusBox";
import React, { useState } from 'react';

const Todo = ({mode, setMode}) => {
  const [msg, setMsg] = useState();
  const [todoArr, setTodoArr] = useState([])


  
  // console.log(todoArr[0])
  

  return (
    <div
      className="mainbox">
      {/* first div */}
      <div
        className="Flexbox"
        style={{
          width: "100%",
          justifyContent: "space-between",
          marginBottom: "0.5rem",
        }}
      >
        <h1 className="headOne">TODO</h1>
        {mode?
        <button style={{ backgroundColor: "transparent", border: "none" }} onClick={()=>setMode(false)}>
          <img
            src="/img/icon-sun.svg"
            alt="icon"
            width={"30px"}
            height={"30px"}
          />
        </button>:
        <button style={{ backgroundColor: "transparent", border: "none" }} onClick={()=>setMode(true)}>
        <img
          src="/img/icon-moon.svg"
          alt="icon"
          width={"30px"}
          height={"30px"}
        />
      </button>
        }
      </div>
      {/* Second div */}
      <div
        className="Flexbox"
        style={{
          width: "100%",
          justifyContent: "space-around",
          backgroundColor: "#25273c",
        }}
      >
        <InputField msg={msg} todoArr={todoArr} setMsg={setMsg} setTodoArr={setTodoArr} />
      </div>
      {/* Third div */}
      <div
        className="middleBox"
        // style={{
        //   flexDirection: "column",
        //   width: "100%",
        //   height: "40rem",
        //   backgroundColor: "#25273c",
        //   // backgroundColor: "green",
        //   marginTop: "1.8rem",
        //   // alignItems: "flex-start",
        // }}
      >
        <div>
        <TodoList todoArr={todoArr}/>
        </div>
        <div>
        <StatusBox />
        </div>
      </div>
        <div className="newBox">
          <div>All</div>
          <div>Active</div>
          <div>Complited</div>
        </div>
    </div>
  );
};

export default Todo;
