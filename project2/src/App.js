import { Menus } from "./Navi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Goal, Mingle, Step } from "./MyPairs";

const App=()=>
{
  return(
    <>
    <BrowserRouter>
    <Menus/>
    <Routes>
      <Route path='/' exact element={<Step/>} />
      <Route path='/Two' exact element={<Mingle/>} />
      <Route path='/Three/:SmallHouse' exact element={<Goal/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;