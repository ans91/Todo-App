import "./Todo.css";

const InputField = () => {
  return (
    <div
      className="Flexbox"
      style={{
        width: "100%",
        justifyContent: "flex-start",
        padding: "1.0rem",
        // marginLeft: "0.5rem",
        // marginGight: "0.5rem",
        }}
    >
      <div className="roundPlane"
        style={{
            // marginLeft: "0.5rem",
            marginRight: "1.5rem",

        }}>
      </div>
      {/* <div className="round">
        <img
          src="/img/icon-check.svg"
          style={{ paddingLeft: "0.4rem", paddingTop: "0.4rem" }}
          alt="icon"
          width={12}
          height= {12}
        />
      </div> */}
      <div className="Flexnox">
  
        <input className="inputBox" placeholder="Create a new todo..."></input>
      </div>
    </div>
  );
};

export default InputField;
