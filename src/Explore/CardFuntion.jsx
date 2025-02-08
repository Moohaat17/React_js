const FunctionCardui = (props)=>{
    return (
       <>
       <div className="card mt-5 border-0 shadow rounded" >
           <img src={props.image} alt="" />
           <div className="card-body shadow">
               <h2 className="">{props.title}</h2>
               <p>{props.paragraph}</p>
           </div>
       </div>
       </>
    )
   }
   export default FunctionCardui;