import React from "react";
import "./Todo.css";

const TodoList = ({ todoArr, setTodoArr, setStatus, mode }) => {

  const deleteElement = (i) => {
    let tempArr = [...todoArr];
    tempArr.splice(i, 1);
    setTodoArr(tempArr);
  };

  const handleClick = (i) => {
    let tempArr = [...todoArr];
    tempArr[i].flag = !tempArr[i].flag;
    
    setTodoArr(tempArr)
  }

  // const handleStatus = (i) => {
  //   let tempArr = [...todoArr]
  //   tempArr[i].flag = false
  //   setTodoArr(tempArr)
  // }

  return (
    <>
      {todoArr && todoArr.length
        ? todoArr.map((e, i) => (
            <React.Fragment key={i}>
              <div
                className="todoList"
                style={{
                  width: "100%",
                  // justifyContent: "flex-start",
                  borderBottomStyle: "solid",
                  borderColor: "#484a5f",
                  borderWidth: "0.05rem",
                }}
              >
                {e.flag === false?
                  <div
                    className={ mode ? "roundPlane" : "roundPlane1"}
                    onClick={()=>handleClick(i)}
                    style={{
                      marginLeft: "2rem",
                      width: "2rem",
                    }}
                  ></div>
                :
                  <div className="round"
                  onClick={()=>handleClick(i)}
                  > 
                    <img
                      src="/img/icon-check.svg"
                      alt="icon"
                      style={{
                        paddingTop: "0.45rem",
                        paddingLeft: "0.45rem",
                        width: "1.8rem",
                      }}
                      />
                  </div>
                }
                <div
                  className="Flexbox"
                  style={{
                    width: "100%",
                    justifyContent: "flex-start",
                    padding: "1.8rem",
                    fontSize: "2rem",
                    color: mode? "white" : "black",
                  }}
                >
                  {e.flag?<div style={{color: "gray"}}><del>{e.detail}</del></div>:e.detail}
                </div>
                <div>
                  <button
                    className="todoBox"
                    style={{
                      backgroundColor: mode? "#25273c" : "white",
                      border: "none",
                      margin: "1rem",
                    }}
                    onClick={() => deleteElement(i)}
                    value={setStatus}
                  ></button>
                </div>
                {/* <div className="flexbox"
        style={{
          backgroundColor: "red"
        }}>
          gfshdf
    </div> */}
              </div>
            </React.Fragment>
          ))
        : null}
    </>
  );
};

export default TodoList;
