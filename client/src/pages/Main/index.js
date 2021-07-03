import Board from '../../components/Board';
import Write from '../../components/Write';
import Detail from '../../components/Detail';
import { Router, useHistory, useLocation } from 'react-router';

import useApiCall from '../../hooks/useApiCall';
import './style.scss';
import { useState } from 'react';

function Main() {
  const history = useHistory();
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [loading, testData, error, fetchData] = useApiCall(
    'http://localhost:4000/api/board'
  );

  if (testData === null) {
    return <></>;
  }
  if (loading === true) {
    return <div>loading</div>;
  }
  if (error !== null) {
    return <div>Error</div>;
  }

  const BoardComponents = testData.map((boardData) => {
    return (
      <Board
        key={boardData._id}
        title={boardData.title}
        category={boardData.category}
        time={boardData.time}
        price={boardData.price}
        user={boardData.user}
        imageLink={boardData.imageLink}
        setBoardData={() => {
          setBoardData({ ...boardData });
        }}
      />
    );
  });
  return (
    <div>
      {boardData === null ? (
        BoardComponents
      ) : (
        <Detail
          boardData={boardData}
          setTestData={() => {}}
          setBoardData={setBoardData}
          setVisible={setVisible}
        />
      )}

      <button
        className='open-button'
        onClick={() => setVisible((state) => !state)}
      ></button>

      {visible ? (
        <Write
          boardData={boardData}
          setBoardData={setBoardData}
          setData={() => {}}
          fetchData={fetchData}
          setVisible={setVisible}
        />
      ) : null}
    </div>
  );
}

export default Main;
