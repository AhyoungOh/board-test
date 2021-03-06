import './style.scss';
import Board from '../Board';
import Content from './Contents';

function Detail({ boardData, setVisible }) {
  return (
    <div>
      <Board
        title={boardData.title}
        catagory={boardData.category}
        time={boardData.time}
        price={boardData.price}
        user={boardData.user}
        imageLink={boardData.imageLink}
      />
      <Content setVisible={setVisible} content={boardData.contents} />
    </div>
  );
}

export default Detail;
