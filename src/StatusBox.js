import "./Todo.css";

const StatusBox = () => {
  return (
    <div className="statbox">
      <div>Left Item</div>
      <div className="mbox">
        <div>All</div>
        <div>Active</div>
        <div>Complited</div>
      </div>
      <div>Clear Complited</div>
    </div>
  );
};

export default StatusBox;
