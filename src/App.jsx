import ClassCounter from "./classComponent/ClassCounter"
import ClassProps from "./Explore/Classprops"
import DisplayFunction from "./Explore/FunctionDisplay"
import Counter from "./Hooks/Counter"
import RenderApi from "./Hooks/RenderApi"
import About from "./pages/About"
import Home from "./pages/Home"
const App = () => {
  return(
    <>
    {/* <Home/> */}
    {/* <h1 className="text-center mt-2">Using Function Component</h1>
    <DisplayFunction/>
    <h1 className="text-center mt-5">Using Class Component</h1>
    <ClassProps/> */}
    {/* <RenderApi/> */}
    <Counter/>
    <ClassCounter/>

  

    </>
  )
}

export default App