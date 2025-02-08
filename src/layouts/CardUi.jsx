const Cardui = (props)=>{
 return (
    <>
    <div className="card mt-5 border-0 shadow" style={{height : "200px"}}>
        <img src={props.image} alt="" />
        <div className="card-body shadow">
            <h2>{props.title}</h2>
            <p>{props.paragraph}</p>
        </div>
    </div>
    </>
 )
}
export default Cardui;