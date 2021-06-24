import Writer from "../Writer";
import Buttons from "../Writer/Buttons";
import "./style.scss";
function Write({ writerNameList, buttonNameList }) {
  return (
    <div className="write">
      <Writer writerNameList={writerNameList} />
      <Buttons buttonNameList={buttonNameList} />
    </div>
  );
}
export default Write;
