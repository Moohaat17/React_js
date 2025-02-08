import { useState } from "react"

const Counter = ()=>{
    const [count, setcount] = useState(0)
    function inc(){
        setcount(count+1)
    }
    function dec(){
        count>0? setcount(count-1):setcount(0)
    }
    return(
        <>
        <h1 className="text-center mt-3">Using Function Component</h1>
        <div className="col-lg-6 mx-auto my-5 p-5 shadow text-center">
            <h1>{count}</h1>
            <button className="btn btn-success m-3" onClick={inc}>+</button>
            <button className="btn btn-danger m-3" onClick={dec}>-</button>
            
            </div>
        </>
    )
}

export default Counter