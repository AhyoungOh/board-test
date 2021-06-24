import "./style.scss";

function Input({ className = "", title = "", onChange = () => {}, value }) {
  return (
    <div className={`title ${className}`}>
      {title}
      <input className="input1" value={value} onChange={onChange}></input>
    </div>
  );
}

export default Input;
