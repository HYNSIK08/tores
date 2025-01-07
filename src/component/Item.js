import React from 'react'
import './Item.css'


const Item = ({id,content,isDone,createdDate, onUpdate,onDelete}) => {
  const onChangeCheckbox=()=>{
    onUpdate(id)
  }
  const onClickDelete=()=>{
    onDelete(id)
  }
  return (
    <div className='Item'>
        <div><input onChange={onChangeCheckbox} checked ={isDone} type='checkbox'/></div>
        <div className='title'>{content}</div>
        <div className='date'>{new Date(createdDate).toLocaleDateString()}</div>
        <div className='btn'><button onClick={onClickDelete}>삭제</button>
        </div>
    </div>
  )
}

export default Item