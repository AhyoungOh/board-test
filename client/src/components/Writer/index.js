import "./style.scss";
import Input from "./Input";

function Writer({ writerNameList }) {
  const Names = writerNameList.map((nameData) => {
    if (nameData.title === "제목") {
      return (
        <Input
          className="namedata-title"
          key={nameData.title}
          title={nameData.title}
          onChange={nameData.onChange}
        />
      );
    }
    return (
      <Input
        key={nameData.title}
        title={nameData.title}
        onChange={nameData.onChange}
      />
    );
  });
  return (
    <div className="Writer">
      <div className="board">
        {Names}
        <div className="donebutton"></div>
      </div>
    </div>
  );
}

export default Writer;
