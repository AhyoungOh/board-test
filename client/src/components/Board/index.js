import './style.scss';

function Board({ title, category, time, price, user, imageLink, onClick }) {
  return (
    <div className='board' onClick={onClick}>
      <div className='select'>
        <div className='contents1'>
          <div className='picture'>
            <img alt={title} src={imageLink} />
          </div>
          <div className='text'>
            <div className='title'>{title}</div>
            <div className='category-time'>
              <div className='category'>{category}</div>
              <div className='time'>{time}</div>
            </div>
            <div className='money-user'>
              <div className='money'>{price}원</div>
              <div className='user'>{user}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
