import React from 'react';
import "./Todo.css";

const TodoList = ({ todoArr }) => {
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
                <div
                  className="roundPlane"
                  style={{
                    marginLeft: "2rem",
                    width: "2rem",
                  }}
                ></div>
                {/* <div className="round">
        <img
          src="/img/icon-check.svg"
          style={{ paddingLeft: "0.4rem", paddingTop: "0.4rem" }}
          alt="icon"
          width={12}
          height= {12}
        />
      </div> */}
                <div
                  className="Flexbox"
                  style={{
                    width: "100%",
                    justifyContent: "flex-start",
                    color: "white",
                    padding: "1.8rem",
                    fontSize: "2rem",
                  }}
                >
                  {e}
                </div>
                <div>
                  <button
                    className="todoBox"
                    style={{
                      backgroundColor: "#25273c",
                      border: "none",
                      margin: "1rem",
                    }}
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
