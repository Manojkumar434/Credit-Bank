import { Menus } from "./Navi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Goal, Mingle, Step } from "./MyPairs";
import { NewAccount01 } from "./Signup";
import { Login } from "./Login";

const App=()=>
{
  return(
    <>
    <BrowserRouter>
    <Menus/>
    <Routes>
    <Route path="/" exact element={<Login/>}/>
      <Route path='/one' exact element={<NewAccount01/>} />
      <Route path='/Two' exact element={<Mingle/>} />
      <Route path='/Three/:SmallHouse' exact element={<Goal/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;