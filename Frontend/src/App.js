import { Menus } from "./Navi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { NewAccount01 } from "./Signup";
import { Login } from "./Login";
import { Home } from "./Home";

const App=()=>
{
  return(
    <>
    <BrowserRouter>
    <Menus/>
    <Routes>
      <Route path="/" exact element={<Login/>}/>
      <Route path='/one' exact element={<NewAccount01/>} />
      <Route path='/home' exact element={<Home/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;