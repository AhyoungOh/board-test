import Board from '../../components/Board';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';
import Write from '../../components/Write';
import Detail from '../../components/Detail';
import { Router, useHistory, useLocation } from 'react-router';

import useApiCall from '../../hooks/useApiCall';
import './style.scss';
import { useState } from 'react';

function Main() {
  const history = useHistory();
  const location = useLocation();
  // const titleName = '홍당무마켓';
  // const Headercompoents = <Header titleName={titleName} />;
  // const [boardData, setBoardData] = useState(null);
  // const [title, setTitle] = useState(boardData?.title ?? '');
  // const [link, setLink] = useState(boardData?.link ?? '');
  // const [category, setCategory] = useState(boardData?.category ?? '');
  // const [contents, setContents] = useState(boardData?.contents ?? '');
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

  const buttonList = [
    {
      title: '홈',
      color: 'green',
    },
    {
      title: '검색',
      color: 'yellow',
    },
    {
      title: '내글',
      color: 'pink',
    },
  ];

  const writerNameList = [
    {
      title: '제목',
      onChange: (e) => {
        setTitle(e.target.value);
      },
      value: title,
    },
    {
      title: '사진 링크',
      onChange: (e) => {
        setLink(e.target.value);
      },
      value: link,
    },
    {
      title: '카테고리',
      onChange: (e) => {
        setCategory(e.target.value);
      },
      value: category,
    },
    {
      title: '내용',
      onChange: (e) => {
        setContents(e.target.value);
      },
      value: contents,
    },
  ];
  // const addBoard = () => {
  //   //add
  //   setTestData((state) => {
  //     return [
  //       ...state,
  //       {
  //         id: state.length + 1,
  //         title,
  //         category,
  //         time: 1,
  //         money: 10000,
  //         user: "user1",
  //         imageLink: link,
  //         contents,
  //       },
  //     ];
  //   });
  // };
  // const updateBoard = () => {
  //   //update
  //   setTestData((state) => {
  //     const id = boardData.id;
  //     const newState = state.map((board) => {
  //       if (board.id !== id) {
  //         return board;
  //       } else {
  //         return {
  //           title: title,
  //           category: category,
  //           time: 1,
  //           money: 10000,
  //           user: "user2",
  //           imageLink: link,
  //           contents: contents,
  //         };
  //       }
  //     });
  //     return newState;
  //   });
  //   setVisible(false);
  // };
  const buttonNameList = [
    {
      title: boardData ? 'update' : 'done',
    },
  ];

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
      {Headercompoents}
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

      <Footer buttonList={buttonList} />
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
          writerNameList={writerNameList}
          buttonNameList={buttonNameList}
        />
      ) : null}
    </div>
  );
}

export default Main;
