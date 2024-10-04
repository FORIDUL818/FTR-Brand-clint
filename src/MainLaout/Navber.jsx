import { Link, NavLink } from "react-router-dom"

function Navber() {
  return (
    <div>
        <nav className=" bg-[#30336b] p-[18px] flex justify-between items-center">
            <div className=" text-[#fff] uppercase">
                <Link to="/main-mainu/home">Foridul</Link>
            </div>
            <div className=" flex gap-3 capitalize text-[#fff] text-[18px] mr-10">
                <NavLink to="/main-mainu/home">Home</NavLink>
                <NavLink to="/main-mainu/about">About</NavLink>
                <NavLink to="/main-mainu/service">service</NavLink>
                <NavLink to="/main-mainu/contact">contact</NavLink>
                <NavLink to="/main-mainu/blog">blog</NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Navber