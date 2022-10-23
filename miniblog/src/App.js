/* eslint-disable */
//warning 메세지 끄는 기능

import './App.css';
import { useState } from 'react';


function App() { 
  //첫번째 변수는 state에 보관했던 자료 나옴, 두번째 변수는 state 변경을 도와주는 함수
  let [title, setTitle] = useState(['블로그 만들기','프로젝트 대비 공부하기','리액트 공부하기']); 
  let [like, setLike] = useState(0);
  let [modal, setModal] = useState(false);
  let [name, setName] = useState(0);
  let [write, setWrite] = useState('');


  return (
    <div className="App">
      <div className="black-nav">
        <h4>My Blog</h4>
      </div>

      <button onClick={()=>{
        let reset = [...title];
        reset = reset.sort();
        setTitle(reset);
      }}>가나다순정렬</button>

      <button onClick={()=>{
        let copy = [...title];  //array와 object를 다룰 때 원본은 보존하는 것이 좋다, ...은 괄호 벗기기, 독립적 카피본을 만들어서 수정해야 한다. 
        copy[0] = '블로그 완성';
        setTitle(copy);
        }}>글 수정</button>
    
    { 
    //map()함수
    //1.왼쪽 array 자료 만큼 내부토드 실행해줌 2.return 오른쪽에 있는 걸 array로 담아줌 3. 유용한 파라미터 2개 사용가능
      title.map(function(a, i){ //a는 array안에 있던 데이터, i는 반복문이 돌 때마다 0부터 1씩 증가하는 정수
        return (
          <div className="list" key={i} >
            <h4 onClick={()=>{setModal(!modal); setName(i)}}>
              { title[i] }
            <span onClick={(e)=>{ e.stopPropagation(); setLike(like+1)}}>👍🏻</span>{like}</h4>
            <p>10월 11일 발행</p>
            <button onClick={()=>{
              let copy = [...title];
              // copy.shift(title);
              copy.splice(i,1);
              setTitle(copy);
            }}>삭제</button>
          </div>
        )
      })
    }
    <button onClick={()=>{ setName(0)}}>title0</button>
    <button onClick={()=>{ setName(1)}}>title1</button>
    <button onClick={()=>{ setName(2)}}>title2</button>
  
  <input onChange={(e)=>
    {setWrite(e.target.value); //비동기처리
    }} />
    <button onClick={()=>{
      let copy = [...title];
      copy.unshift(write);
      setTitle(copy)
    }}>글 발행</button>
  {
      //if문을 사용할 수 없으니, 삼항 연산자 -> 조건식 ? 참일때 실행할 코드 : 거짓일때 실행할 코드
      modal === true 
      ? <Modal color={'rgb(235,235,235'} 
      title={title} name={name}/> 
      : null
  }
    </div>
  );
}

//컴포넌트 만드는 법 
//1.function을 만들고(다른 function 바깥에서 영어대문자로) 2.return()안에 html 담기 3. <함수명></함수명> 쓰기

//어떤걸 컴포넌트로 만들면 좋은가
//1.반복적인 html 축약할 때 2.큰 페이지들 3.자주 변경되는 것들

function Modal(props){
  return (
    <div className="modal" 
    style={{ background : props.color }}>
        <h4>{props.title[props.name]}</h4>
        <p>날짜</p>
        <p>상세내용 </p>
        <button>글 수정</button>
    </div>
  )
};

//동적인 UI 만드는 step
//1.Html css로 미리 디자인 완성 2.ui의 현재 상태를 state로 저장 3.state에 따라 ui가 어떻게 보일지 작성

export default App;
