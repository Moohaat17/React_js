import { useEffect, useState} from "react";

var RenderApi = ()=>{
    var [users, setUser] = useState()
    async function showApi(){
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        console.log(data)
        setUser(data)

    }
   
    useEffect(()=>{
        Document.title = "UseEffect Hook"
        showApi()

    },[])

    return(
        <>
        {console.log(users)}
        </>
    )
     
}

export default RenderApi;