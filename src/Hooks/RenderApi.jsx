import { useEffect, useState} from "react";
import Cardui from "../layouts/CardUi";

var RenderApi = ()=>{
    var [users, setUser] = useState()
    async function showApi(){
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        console.log(data)
        setUser(data)

    }
   
    useEffect(()=>{
        document.title = "UseEffect Hook"
        showApi()

    },[])

    return(
        <>
        {!users && <h1>Loading.....</h1>}
        <div className="container">
            <div className="row">
                {
                    users && users.map((user,index)=>{
                        return(
                            <div className="col-lg-4" key={index}>
                                <Cardui title={user.name} para={user.username} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
     
}

export default RenderApi;