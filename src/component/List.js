import React,  {useState}from 'react'
import './List.css'
import Item from './Item'

const List = ({todo, onUpdate, onDelete}) => {
  const analyzeTodo = ()=>{
    const totalCount = todo.length;
    const doneCount = todo.filter((item)=>item.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return{
      totalCount,
      doneCount,
      notDoneCount,
    }
  }
  const {totalCount, doneCount, notDoneCount} = analyzeTodo();
  const[search,setSearch]  = useState("")
  const onChangeSaerch = (e) => {
    setSearch(e.target.value)
  }
  const getSearchResult = () => {
    //삼항연산자
    //return search === ""?todo:todo.filter((item)=>item.content.includes(search))
    if(!Array.isArray(todo))return [];
    return search === ""?todo:
    todo.filter((item)=>item.content.toLowerCase().includes(search.toLowerCase()))
  }
  return (
    <div>
    <h3>😁List 컴포넌트 기록한 내용 보기</h3>
    <div>
      <div>총개수: {totalCount}</div>
      <div>완료 개수: {doneCount}</div>
      <div>미완료 개수: {notDoneCount}</div>
    </div>
    <input 
    value={search}
    onChange={onChangeSaerch}
    placeholder="검색어를 입력하세요"/>

    <div className='list_wrapper'>
    {/*배열요소 item 의 모든 프로퍼티를 props로 전달 */}
    {/*todo 할일 아이템 객체 저장 = 객체로 전달*/}
    {getSearchResult().map((item)=>(<Item key={item.id} {...item} onUpdate={onUpdate} onDelete={onDelete}/>))}

    </div>
    {/* <div>
    {todo.map((item) => (
        <Item key={item.id}{...item}/>
      ))}
    </div> */}
    </div>
  );
};

export default List

//🟡변향메서드 maP() 콘솔에 헤보기
//let arr = [1,2,3,4]
//let newArr = arr.map((item)=>item)
//console.log(newArr)
//결과 [3,6,9,12]