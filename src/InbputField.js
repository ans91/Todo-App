import "./Todo.css";
import React from 'react';

const InputField = ({ msg, setMsg, todoArr, setTodoArr, setCTodoArr, mode }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(msg)
    if (msg.detail !== "") {
    let tempArr = [...todoArr];
    msg.flag = false;
    tempArr.push(msg);
    setTodoArr(tempArr);
    setCTodoArr(tempArr);
    setMsg({detail: ""});
    console.log(tempArr)
    }
  };

  

  // console.log("Tigga", todoArr);

  return (
    <div
      className="Flexbox"
      style={{
        width: "100%",
        justifyContent: "flex-start",
        padding: "1.8rem",
      }}
    >
      {mode?<div
        className="roundPlane"
        style={{
          marginRight: "1.5rem",
          backgroundColor: mode? "#25273c" : "white",
        }}
      ></div>:
      <div
        className="roundPlane1"
        style={{
          marginRight: "1.5rem",
          backgroundColor: mode? "#25273c" : "white",
        }}
      ></div>
      }

      <form className="Flexbox" onSubmit={handleSubmit}>
        <input
          className="inputBox"
          placeholder="Create a new todo..."
          type="text"
          value={msg.detail}
          onChange={(e) => setMsg({detail: e.target.value})}
          style={{
            backgroundColor: mode? "#25273c" : "white",
            color: mode? "white" : "black"
          }}
        ></input>
      </form>
    </div>

  );
};

export default InputField;
