import React, { useState } from 'react'
import './ToDoApp.css';

const ToDoApp = () => {

    const[title,setTitle] = useState("");
    const[desc,setDes] = useState("");
    const[notes,setNotes] = useState([]);
    const[count,setCount] = useState(1);

    const removeItems = (id) => {
        setNotes(notes.filter((item)=>item.key!==id));
    }

    const handleSubmit =()=>{
        if(!title || !desc){
            alert("Please fill the title and desc")
        }
        setNotes([...notes,{key:count,title:title,desc:desc}]);
        setCount(count+1)
        setTitle("");
        setDes("")
    }

  return (
    <div className='App'>
            <h1>React Notes</h1>
        <div className='notes'>
            {
                notes.map((item)=>{
                    return(
                        <div className='notes-item'>
                            <div style={{display:'flex',flexDirection:'row'}}>
                            <h4>Title: {item.title}</h4>
                            <p>Notes: {item.des}</p>
                            </div>
                                <button style={{margin:'0px 5px'}} onClick={()=>removeItems(item.key)} >
                                    X
                                </button>
                        </div>
                    )
                })
            }
            <div className='add'>
            <h3>Add Notes</h3>
            <input type='text' onChange={(e)=>setTitle(e.target.value)} placeholder='Title' />
            <input type="text" onChange={(e)=>setDes(e.target.value)} placeholder='Notes' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
        </div>
        
    </div>
  )
}

export default ToDoApp