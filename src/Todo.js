import "./Todo.css";
import InputField from "./InbputField";
import TodoList from "./TodoList";
import StatusBox from "./StatusBox";

const Todo = () => {
  return (
    <div
      className="Flexbox mainbox"
      style={{
        
      }}
    >
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
        <button style={{ backgroundColor: "transparent", border: "none" }}>
          <img
            src="/img/icon-sun.svg"
            alt="icon"
            width={"30px"}
            height={"30px"}
          />
        </button>
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
        <InputField />
      </div>
      {/* Third div */}
      <div
        className="Flexbox"
        style={{
          flexDirection: "column",
          width: "100%",
          height: "23rem",
          backgroundColor: "#25273c",
          // backgroundColor: "green",
          marginTop: "1.8rem",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <TodoList />
        <StatusBox />
      </div>
    </div>
  );
};

export default Todo;
