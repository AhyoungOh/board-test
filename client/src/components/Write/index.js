import React, { useState } from 'react';
import Input from './Input';
import axios from 'axios';
import './style.scss';

function Write({ setBoardData, boardData, setVisible, fetchData }) {
  const [title, setTitle] = useState(boardData?.title || '');
  const [imageLink, setImageLink] = useState(boardData?.imageLink || '');
  const [category, setCategory] = useState(boardData?.category || '');
  const [price, setPrice] = useState(boardData?.price || '');
  const [contents, setContent] = useState(boardData?.content || '');
  const createBoardData = async () => {
    await axios.post('http://localhost:4000/api/board', {
      title,
      imageLink,
      category,
      contents,
      price,
    });
    setVisible(false);
    fetchData();
  };
  const deleteBoardData = async () => {
    await axios.delete('http://localhost:4000/api/board', {
      _id: boardData._id,
    });
    setVisible(false);
    fetchData();
    setBoardData(null);
  };
  const updateBoardData = async () => {
    await axios.put('http://localhost:4000/api/board', {
      _id: boardData._id,
      title,
      imageLink,
      category,
      price,
      contents,
    });
    setVisible(false);
    fetchData();
    setBoardData(null);
  };

  if (boardData === null) {
    return (
      <div className='write'>
        <div className='inputs-wrapper'>
          <Input title={'글 제목'} value={title} setValue={setTitle} />
          <Input
            title={'사진 링크'}
            value={imageLink}
            setValue={setImageLink}
          />
          <Input title={'카테고리'} value={category} setValue={setCategory} />
          <Input
            title={'가격'}
            value={price}
            setValue={setPrice}
            inputType={'number'}
          />
          <Input title={'글 내용'} value={contents} setValue={setContent} />
          <div className='button-wrapper'>
            <button className='green' onClick={createBoardData}>
              작성
            </button>
            <button
              className='red'
              onClick={() => {
                setVisible(false);
              }}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='write'>
        <div className='inputs-wrapper'>
          <Input title={'글 제목'} value={title} setValue={setTitle} />
          <Input
            title={'사진 링크'}
            value={imageLink}
            setValue={setImageLink}
          />
          <Input title={'카테고리'} value={category} setValue={setCategory} />
          <Input
            title={'가격'}
            value={price}
            setValue={setPrice}
            inputType={'number'}
          />
          <Input title={'글 내용'} value={contents} setValue={setContent} />
          <div className='button-wrapper'>
            <button className='green' onClick={updateBoardData}>
              수정
            </button>
            <button className='red' onClick={deleteBoardData}>
              삭제
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Write;
