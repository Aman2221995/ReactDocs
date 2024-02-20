import React from "react";
import { useState,useRef } from "react";

const Stopwatch=()=>{

    const[time,setTime] = useState(0);
    const timeRef = useRef(0);

    const handleStart=()=>{
        timeRef.current = setInterval(()=>{
            setTime(prev=>prev+1);
        },1000)
    }

    const handleStop=()=>{
        clearInterval(timeRef.current);
        timeRef.current=0;
    }

    const handleReset = () =>{
        handleStop();
        if(time){
            setTime(0)
        }
    }

    return(
        <>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
            <div>{time}</div>
        </>
    )
}

export default Stopwatch;