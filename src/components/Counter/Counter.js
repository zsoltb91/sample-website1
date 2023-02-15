import "./Counter.css";

function Counter({ secs, mins }) {
  return (
    <div secs={secs} mins={mins} className="counter-cont">
      {mins} : {secs}
    </div>
  );
}

export default Counter;
