import './style.scss';

function Board({ title, category, time, money, user, imageLink, onClick, setBoardData, }) {
  return (
    <div className="board" onClick={setBoardData}>
        <div className="select">
          <div className="contents1">
            <div className="picture">
              <img alt={title} src={imageLink} />
            </div>
            <div className="text">
              <div className="title">{title}</div>
              <div className="category-time">
                <div className="category">{category}</div>
                <div className="time">{time}</div>
            </div>
            <div className="money-user">
              <div className="money">{money}</div>
              <div className="user">{user}</div>
            </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Board;