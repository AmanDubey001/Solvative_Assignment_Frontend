import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
  const[time,setTime]=useState(0);
  const [runing,setRuning]=useState(false);
  const [history,setHistory]=useState([])
  useEffect(()=>{
    let timer
   if(runing){
    timer=setInterval(()=>{
      setTime(prevTime=>prevTime+1)
    },1000)
   }
   return ()=>{
    clearInterval(timer)
  }
  },[runing])

  const handleStop=()=>{
    setRuning(false)
    setTime(0)
    time && setHistory([...history,getTime()])
  }
  const handleReset=()=>{
    setRuning(false)
    setTime(0)
    setHistory([])
  }

  const getTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
  
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  return (
    <div>
      <h1 style={{textAlign:"center"}}>{getTime()}</h1>
      <button style={{backgroundColor:runing?"blue":"green"}} onClick={()=>setRuning(prev=>!prev)}>{runing ? "Pause" : "Start"}</button>
      <button  style={{marginLeft:"10px",backgroundColor:"red"}} onClick={handleStop}>Stop</button>
      <button style={{marginLeft:"10px"}} onClick={handleReset}>Reset</button>
      <div>
        {history.map((time,index)=><p style={{fontSize:"1.5rem",textAlign:"center",color:"#E59500"}} key={index}>{index+1}{"."}{"   "}{time}</p>)}
       </div>
    </div>
  )
}

export default Stopwatch
