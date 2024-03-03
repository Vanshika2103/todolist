"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([])

  const set_title = (e) => {
    setTitle(e.target.value);
  };

  const set_desc = (e) => {
    setDesc(e.target.value);
  };


  const submitHandler =(e)=>{
    e.preventDefault()

    // console.log(title)
    // console.log(desc)

    setMainTask([...mainTask, {title, desc}])
    console.log(mainTask)

    setTitle("")
    setDesc("")
  }


  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }

  let renderTask = <h2>No Task Available</h2>

  if(mainTask.length>0){

    renderTask = mainTask.map((t, i)=>{
      return(
        <li key={i} className="flex items-center justify-between mb-5">
          <div className="flex items-center justify-between w-2/3">
            <h3 className="text-2xl font-medium">{t.title}</h3>
            <p className="text-lg font-semibold">{t.desc}</p>
          </div>
          <button onClick={()=>{
            deleteHandler(i)
          }} 
          className="px-4 py-2 bg-red-400 text-white text-xl font-bold rounded">Delete</button>
        </li>
      )
    })
  }



  return (
    <>
      <h1 className="bg-slate-900 text-white p-5 text-5xl font-bold text-center">
        My TODO List
      </h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-3 m-5 px-4 py-2"
          placeholder="Task here..."
          value={title}
          onChange={set_title}
        />

        <input
          type="text"
          className="text-2xl border-zinc-800 border-3 m-5 px-4 py-2"
          placeholder="Description here..."
          value={desc}
          onChange={set_desc}
        />

        <button className="bg-green-500 text-white px-4 py-2 text-2xl font-bold ">
          Add task
        </button>
      </form>

      <hr className="m-5"/>

      <div className="p-8 bg-slate-300 ">
        <ul>
          {renderTask}
        </ul>

      </div>
    </>
  );
};

export default page;
