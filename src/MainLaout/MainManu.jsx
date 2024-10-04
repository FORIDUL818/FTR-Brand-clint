import { Outlet } from "react-router-dom"
import Navber from "./Navber"
import Footer from "../Component/Footer"


function MainManu() {
  return (
    <div>
      <Navber/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainManu