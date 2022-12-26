import "./Todo.css";

const TodoList = () => {
  return (
    <div
      className="todoList"
      style={{
        width: "100%",
        justifyContent: "flex-start",
        // padding: "1.0rem",
        borderBottomStyle: "solid",
        borderColor: "#484a5f",
        borderWidth: "0.05rem",
        // backgroundColor: "red"
      }}
    >
      <div
        className="roundPlane"
        style={{
          margin: "1rem",

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
          padding: "1rem"
        }}
      >
        jgjhfgd
      </div>
      <div>
        <button
          className="todoBox"
          style={{
            backgroundColor: "#25273c",
            border: "none",
            margin: "1rem"
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
  );
};

export default TodoList;
