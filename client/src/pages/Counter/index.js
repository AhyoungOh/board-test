import React, { useState } from 'react';

//Hooks == triggers-> useState -> rendering hooks
function Index() {
  const [button1Score, setButton1Score] = useState(10);
  const [button2Score, setButton2Score] = useState(10);

  const button1plus = () => {
    setButton1Score(button1Score + 1)
  };
  
  const button1minus = () => {
    setButton1Score(button1Score - 1)
  };
  const button2plus = () => {
    setButton2Score(button2Score + 1)
  };
  const button2minus = () => {
    setButton2Score(button2Score - 1)
  };
  return (
  <div>
    <div>버튼1 함수 : {button1Score}</div>
    <button onClick={button1plus}>버튼 1 +</button>
    <button onClick={button1minus}>버튼 1 -</button>
    <div>버튼2 함수 : {button2Score}</div>
    <button onClick={button2plus}>버튼 2 +</button>
    <button onClick={button2minus}>버튼 2 -</button>
  </div>
  );
}

export default Index;