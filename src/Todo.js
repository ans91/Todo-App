import "./Todo.css";
import InputField from "./InbputField";
import TodoList from "./TodoList";
import StatusBox from "./StatusBox";
import React, { useState } from "react";

const Todo = ({ mode, setMode }) => {
  const [msg, setMsg] = useState({ detail: "" });
  const [todoArr, setTodoArr] = useState([]);
  const [ctodoArr, setCTodoArr] = useState([]);
  const [status, setStatus] = useState(false);
  // console.log(todoArr[0])
  const showAll = () => {
    setTodoArr(ctodoArr)
  }

  const showActive = () => {
    let tempArr = [...ctodoArr]
    let active = tempArr.filter((item) => item.flag === false)
    setTodoArr(active)
  }

  const showComplited = () => {
    let tempArr = [...ctodoArr]
    let compl = tempArr.filter((item) => item.flag === true)
    setTodoArr(compl)
  }

  return (
    <div className="mainbox">
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
        {mode ? (
          <button
            style={{ backgroundColor: "transparent", border: "none" }}
            onClick={() => setMode(false)}
          >
            <img
              src="/img/icon-sun.svg"
              alt="icon"
              width={"30px"}
              height={"30px"}
            />
          </button>
        ) : (
          <button
            style={{ backgroundColor: "transparent", border: "none" }}
            onClick={() => setMode(true)}
          >
            <img
              src="/img/icon-moon.svg"
              alt="icon"
              width={"30px"}
              height={"30px"}
            />
          </button>
        )}
      </div>
      {/* Second div */}
      <div
        className="Flexbox"
        style={{
          width: "100%",
          justifyContent: "space-around",
          backgroundColor: mode? "#25273c" : "white",
        }}
      >
        <InputField
          msg={msg}
          todoArr={todoArr}
          setMsg={setMsg}
          setTodoArr={setTodoArr}
          setCTodoArr={setCTodoArr}
          mode={mode}
        />
      </div>
      {/* Third div */}
      <div
        className="middleBox"
        style={{
          backgroundColor: mode? "#25273c" : "white",
          
        }}
      >
        <div>
          <TodoList
            todoArr={todoArr}
            setTodoArr={setTodoArr}
            status={status}
            setStatus={setStatus}
            msg={msg}
            setMsg={setMsg}
            mode={mode}
          />
        </div>
        <div>
          <StatusBox
            todoArr={todoArr}
            setTodoArr={setTodoArr}
            setCTodoArr={setCTodoArr}
            ctodoArr={ctodoArr}
            mode={mode}
          />
        </div>
      </div>
      <div className={mode?"newBox":"newBox1"}
      style={{
        color: "#595a77",
        // color: "red",
        backgroundColor: mode? "#25273c" : "white",
      }}>
        <div
        onClick={()=>showAll()}
        >All</div>
        <div
        onClick={()=>showActive()}>Active</div>
        <div
        onClick={()=>showComplited()}>Completed</div>
      </div>
    </div>
  );
};

export default Todo;