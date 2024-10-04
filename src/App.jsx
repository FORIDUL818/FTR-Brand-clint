import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Ragistration from "./Pages/Ragistration"
import Login from "./Pages/Login"
import MainManu from "./MainLaout/MainManu"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Service from "./Pages/service"
import Blog from "./Pages/Blog"
import Contact from "./Pages/Contact"


function App() {
   let router=createBrowserRouter([
    {
      path:"/",element:<h1>this is landing page</h1>
    },
    {
      path:"/ragistration",element:<Ragistration/>
    },
    {
      path:"/login",element:<Login/>
    },

    {
      path:"/main-mainu",element:<MainManu/>,
      children:[
        {
          path:"/main-mainu/home",element:<Home/>
        },
        {
          path:"/main-mainu/about",element:<About/>
        },
        {
          path:"/main-mainu/service",element:<Service/>
        },
        {
          path:"/main-mainu/blog",element:<Blog/>
        },
        {
          path:"/main-mainu/contact",element:<Contact/>
        },
      ]
    }
   ])
  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  )
}

export default App