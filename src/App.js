import {useReducer, useState, useRef} from 'react';
import './App.css';
import Editor from './component/Editor';
import Header from './component/Header';
import List from './component/List';

const mockTodo = [
  {
    id:0,
    isDone: false,
    content:"React 공부하기",
    createdDate: new Date().toLocaleDateString(),
  },
  {
    id:1,
    isDone: false,
    content:"빨래널기",
    createdDate: new Date().toLocaleDateString(),
  },
  {
    id:2,
    isDone: false,
    content:"줄넘기 하기",
    createdDate: new Date().toLocaleDateString(),
  }
];
function App() {
//  const [todo, setTodo] = useState(mockTodo);
//❤️리듀서로 바꾸기
const [todo, dispatch]= useReducer(reducer, mockTodo)
 const idRef = useRef(3);//초기값
 const onCreate = (content) => {
  dispatch({
    type:"CREATE",
    newItem:{
      id:idRef.current,
      content,
      isDone:false,
      createdDate: new Date().toLocaleDateString(),
    }
  })
 }
 idRef.current+=1;
 const onUpdate = (targetId) => {
dispatch({
  type:"UPDATE",
  targetId,
})
  }
 
  const onDelete = (targetId)=> {
    dispatch({
      type:"DELETE",
      targetId,
    })
  };
  // const [count, setCount] = useState(0)
  // const onIncrease=()=>{
  //   setCount(count+1)
  // }

 function reducer(state,action){
//   switch(action.type){
//     case "INCREASE":
//       return state + action.data;
//   }
switch (action.type){
  case "CREATE":{
    return [action.newItem, ...state]
  }
  case "UPDATE":{
    return state.map((item)=>item.id===action.targetId?{
      ...item,
      isDone:!item.isDone,
    }
    :item)
  }
  case "DELETE": {
    return state.filter((item => item.id !== action.targetId))
  }
}
}
//❤️useReducer 컴포넌트에서 상태 변화 코드(State)를 쉽게 분리(외부로)
//count 변수, dispatch 촉발함수 (reducer 상태 변화 함수, 초기값)
  // const [count,dispatch]=useReducer(reducer, 0)

 return(
  <div className='App'>
  <h4>useReducer 테스트</h4>
  {/* <div>{count}</div> */}
  <div>
  {/* <button onClick={onIncrease}>+</button> */}
  {/* <button onClick={()=>dispatch({type:"INCREASE", data:1})}>+</button> */}

  {/* <button>-</button> */}
  </div>

  <Header/>
  <Editor onCreate={onCreate}/>
  { <List todo ={todo} onUpdate={onUpdate} onDelete={onDelete}/> }
  </div>
 );
}

export default App;
