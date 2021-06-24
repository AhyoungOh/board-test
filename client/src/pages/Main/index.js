import Board from "../../components/Board";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Write from "../../components/Write";
import Detail from "../../components/Detail";
import axios from "axios";
import "./style.scss";

import { useState, useEffect } from "react";

function Main() {
  const titleName = "홍당무마켓";
  const Headercompoents = <Header titleName={titleName} />;
  // const imageLink =
  //   "http://itimg.chosun.com/sitedata/image/202001/14/2020011400634_0.jpg";
  // const imageLink2 =
  //   "data:image/jpeg;base64,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";
  // const imageLink3 =
  //   "data:image/jpeg;base64,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";
  // //props
  // const initTestData = [
  //   {
  //     id: 1,
  //     title: "맥북 프로 16인치",
  //     category: "노트북",
  //     time: 13,
  //     money: 100000,
  //     user: "user1",
  //     imageLink: imageLink,
  //     contents: "첫번째 상품입니다",
  //   },
  //   {
  //     id: 2,
  //     title: "책상",
  //     category: "가구",
  //     time: 13,
  //     money: 100000,
  //     user: "user2",
  //     imageLink: imageLink2,
  //     contents: "두번째 상품입니다",
  //   },
  //   {
  //     id: 3,
  //     title: "축구공",
  //     category: "스포츠",
  //     time: 1,
  //     money: "무료 나눔",
  //     user: "user1",
  //     imageLink: imageLink3,
  //     contents: "세번째 상품입니다",
  //   },
  // ];
  const [testData, setTestData] = useState(null);
  const [boardData, setBoardData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState(boardData?.title ?? "");
  const [link, setLink] = useState(boardData?.link ?? "");
  const [category, setCategory] = useState(boardData?.category ?? "");
  const [contents, setContents] = useState(boardData?.contents ?? "");
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:4000/api/board");
        setLoading(false);
        setTestData(response.data);
      } catch {
        setLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (loading === true) {
    return <div>loading</div>;
  }
  if (error !== null) {
    return <div>Error</div>;
  }

  const buttonList = [
    {
      title: "홈",
      color: "green",
    },
    {
      title: "검색",
      color: "yellow",
    },
    {
      title: "내글",
      color: "pink",
    },
  ];

  const writerNameList = [
    {
      title: "제목",
      onChange: (e) => {
        setTitle(e.target.value);
      },
      value: title,
    },
    {
      title: "사진 링크",
      onChange: (e) => {
        setLink(e.target.value);
      },
      value: link,
    },
    {
      title: "카테고리",
      onChange: (e) => {
        setCategory(e.target.value);
      },
      value: category,
    },
    {
      title: "내용",
      onChange: (e) => {
        setContents(e.target.value);
      },
      value: contents,
    },
  ];
  const addBoard = () => {
    //add
    setTestData((state) => {
      return [
        ...state,
        {
          id: state.length + 1,
          title,
          category,
          time: 1,
          money: 10000,
          user: "user1",
          imageLink: link,
          contents,
        },
      ];
    });
  };
  const updateBoard = () => {
    //update
    setTestData((state) => {
      const id = boardData.id;
      const newState = state.map((board) => {
        if (board.id !== id) {
          return board;
        } else {
          return {
            title: title,
            category: category,
            time: 1,
            money: 10000,
            user: "user2",
            imageLink: link,
            contents: contents,
          };
        }
      });
      return newState;
    });
    setVisible(false);
  };
  const buttonNameList = [
    {
      title: boardData ? "update" : "done",
      onClick: boardData ? updateBoard : addBoard,
    },
  ];

  const BoardComponents = testData.map((boardData) => {
    return (
      <Board
        key={boardData.id}
        title={boardData.title}
        category={boardData.category}
        time={boardData.time}
        money={boardData.money}
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
          setTestData={JSON.stringify(testData)}
          setBoardData={setBoardData}
          setVisible={setVisible}
        />
      )}
      <Footer buttonList={buttonList} />
      <button
        className="closeButton"
        onClick={() => {
          setVisible(!visible);
          setBoardData(null);
        }}
      >
        +
      </button>
      {visible ? (
        <Write
          boardData={boardData}
          setBoardData={setBoardData}
          setData={setTestData}
          setVisible={setVisible}
          writerNameList={writerNameList}
          buttonNameList={buttonNameList}
        />
      ) : null}
    </div>
  );
}

export default Main;
