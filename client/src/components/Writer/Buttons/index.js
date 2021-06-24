import "./style.scss";

function Buttons({ buttonNameList }) {
  const ButtonName = buttonNameList.map((nameData) => {
    return <button onClick={nameData.onClick}>{nameData.title}</button>;
  });
  return <div>{ButtonName}</div>;
}

export default Buttons;
