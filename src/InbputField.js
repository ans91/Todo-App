import "./Todo.css";

const InputField = ({ msg, setMsg, todoArr, setTodoArr }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(msg)
    let tempArr = [...todoArr];
    tempArr.push(msg);
    setTodoArr(tempArr);
    setMsg("");
    // console.log(tempmsg)
  };

  console.log("Tigga", todoArr);

  return (
    <div
      className="Flexbox"
      style={{
        width: "100%",
        justifyContent: "flex-start",
        padding: "1.8rem",
      }}
    >
      <div
        className="roundPlane"
        style={{
          marginRight: "1.5rem",
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
      <form className="Flexnox" onSubmit={handleSubmit}>
        <input
          className="inputBox"
          placeholder="Create a new todo..."
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        ></input>
      </form>
    </div>
  );
};

export default InputField;
