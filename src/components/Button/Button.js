import "./Button.css";

function Button({ id, title, onClick }) {
  return (
    <button className="btn" onClick={onClick} id={id} title={title}>
      {title}
    </button>
  );
}

export default Button;
