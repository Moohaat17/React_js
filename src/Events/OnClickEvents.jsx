var OnClickEvents =()=>{
    function alertt(){
        alert("Button clicked");
    }
    function add(number){
        alert(number)
    }
    return(
        <>
        <div className="col-lg-6 mt-5 mx-auto shadow p-5 text-center">
            <h1>On click Events</h1>
            <button className="btn btn-outline-success ms-2" onClick={alertt}>Click here</button>
            <button className="btn btn-outline-success ms-2" onClick={()=>{add("hey")}}>Click here</button>
            <button className="btn btn-outline-success ms-2" onClick={()=>{add("namaste")}}>Click here</button>
            <button className="btn btn-outline-success ms-2" onClick={()=>{add("asallamualekum")}}>Click here</button>
            <button className="btn btn-outline-success ms-2" onClick={()=>{add("hiii")}}>Click here</button>
            <button className="btn btn-outline-success ms-2" onClick={()=>{add("Bye")}}>Click here</button>

        </div>
        </>
    )
}

export default OnClickEvents