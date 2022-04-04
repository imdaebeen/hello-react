 //번들러 사용 웹팩,Parcel,browserify 불러온 모듈을 모두 합쳐서 하나의 파일을 생성 
import './App.css';
//import { Fragment } from 'react';

// function App() {
//   const name = '리웩트';
//   return <div>{name === '리액트' && <h1>리액트 입니다.!</h1> }</div>; //조건부
//     /*
//     함수 컴포넌트
//     JSX코드 HTML태그 쓰듯이 작성
//     */
// }
// function App() {
//   const name = '리액트';
//   const style = {
//     // background-color는 backgroundColor와 같이 -가 사라지고 카메 표기법으로 작성된다.
//     backgroundColor : 'black',
//     color: 'aqua',
//     fontSize:'48px',//font-size-> fontSize
//     fontWeight:'bold',//font-weight-> fontWeight
//     padding:16 // 단위를 생략하면 px로 지정됨.
//   };

//   return <div style={style}>{name}</div>
// }


function App() {
  const name = '리액트';
  return (
  <>
  <div className='react'>{name}</div>
  {/*주석은 이렇게 작성한다. */}
  //이런주석
  /* 요런주석*/
  <input />
  </>
  );
}

export default App;
