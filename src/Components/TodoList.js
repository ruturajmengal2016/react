import React, { useState } from 'react'

export function TodoList() {
  const [list, setList] = useState([])
  const [task, setTask] = useState("")
  function handleEvent(event) {
    setTask(event.target.value)
  }

  function addList() {
    setList([...list, task])
  }
  return (
      <div className='self-center'>
        <input type="text" onChange={handleEvent} className="border-2 border-blue-700" />
        <button onClick={addList} className="border-2 border-violet-600 bg-red-500 ml-2 w-12">Add</button>
        <div className='mt-10 h-[2rem]'>
          {list.map((e) => { return <h3>{e}</h3> })}
        </div>
    </div>
  )
}


export function Button(){
  const [count,setCount] = useState(0)
  return(
    <div className='self-center'>
      <button onClick={()=>{
        setCount(count+1)
      }} className="border-2 border-black mr-5 p-1">Increase</button> 
      <span className='text-red-600 text-xl'>{count}</span>
      <button onClick={()=>{
        setCount(count-1)
      }} className="border-2 border-black ml-5 p-1">Decrease</button> 
    </div>
  )
}


export function Changetext(){
  const [name,setName] = useState(true)
  return(
    <div className='self-center'>
      <h1 className='font-bold text-[3rem]'>My name is {name ? "Amit" : "Rajan"}</h1>
      <button onClick={()=>{
        setName(!name)
      }} className="border-2 border-black p-1">Click</button>
    </div>
  )
}