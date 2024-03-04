import{Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import Skin from "../Pages/Skin"
import MomBaby from "../Pages/Mom-baby"
import WomenFashion from "../Pages/Women-fashion"


function Allroutes(){

  return(
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/skin" element={<Skin/>}/>
  <Route path="/momBaby" element={<MomBaby/>}/>
  <Route path="/womenFashion" element={<WomenFashion/>}/>
 </Routes>
  )
}
export default Allroutes;