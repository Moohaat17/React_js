import { useState } from "react"

var Form=()=>{
    const[username,setUsername]=useState("")
    const[mobile,setMobile]=useState("")
    const[email,setEmail]=useState("")
    const[date,setDate]=useState("")

    console.log(username)
    console.log(mobile)
    console.log(email)
    console.log(date)
    function submitData(e){
        e.preventDefault()
        const user={username,mobile,email,date
        }
        console.log(user)
        alert("Hello")
    }

    return(
        <>
        <form className="col-lg-6 mx-auto my-5 p-5 shadow" method="post" onSubmit={submitData}>
               <div className="mt-4">
                <input type="text" onChange={(m)=>setUsername(m.target.value)} className="form-control" placeholder="Enter Username"/>
               </div>
               <div className="mt-4">
                <input type="number" onChange={(m)=>setMobile(m.target.value)} className="form-control" placeholder="Enter Mobile Number"/>
               </div>
               <div className="mt-4">
                <input type="email" onChange={(m)=>setEmail(m.target.value)} className="form-control" placeholder="Enter Email"/>
               </div>
               <div className="mt-4">
                <input type="date" onChange={(m)=>setDate(m.target.value)} className="form-control" placeholder="Enter date"/>
               </div>
               <div className="mt-4">
                <button className="btn btn-success">Submit</button>
               </div>
        </form>
        </>
    )
}
export default Form