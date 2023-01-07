// import { useState } from "react";
import "./Todo.css";

const StatusBox = ({ setTodoArr, ctodoArr, todoArr, setCTodoArr, mode }) => {
  // const [penComplited, setPenCompited] = useState()
  let completedCount = ctodoArr.filter(n => n.flag).length;
  let incompleteCount = ctodoArr.length - completedCount;

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

  const clearComplited = () => {
    let tempArr = [...todoArr]
    tempArr = []
    setTodoArr(tempArr)
    let ctempArr = [...ctodoArr]
    ctempArr = []
    setCTodoArr(ctempArr)
  }
  
  return (
    <div className="statbox">
      <div>{incompleteCount} Left Item </div>
      <div className={mode? "mbox": "mbox1"}>
        <div
        onClick={()=>showAll()}
        >All</div>
        <div
        onClick={()=>showActive()}>Active</div>
        <div
        onClick={()=>showComplited()}>Complited</div>
      </div>
      <div className={mode? "lbox": "lbox1"}
        onClick={()=>clearComplited()}>Clear Complited</div>
    </div>
  );
};

export default StatusBox;