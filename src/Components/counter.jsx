import React,{useState} from 'react'
function Counter() {
    const [nbr,setCount] = useState(0);
    return ( 
        <div>
        <h1>Counter</h1>
        <button onClick={()=>setCount(nbr-1)}>-</button>
        <span>{nbr}</span>
        <button  onClick={()=>setCount(nbr+1)}>+</button>
    </div>
     );
}

export default Counter; 