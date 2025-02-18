import React, { useState } from 'react'

const Random = () => {
  const[name,setName]= useState('');
  const [count,setCount]=useState(0);
  console.log(count)

  const handleClick=()=>{
    setName('jianlu')
  }
  const counter=()=>{
    setCount((count)=>count+1)
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
<div>
  {name}
</div>
<div>
  <div>
 
  {count}
  </div>
  <button onClick={counter}>click</button>
 
</div>
    </div>


  )
}

export default Random