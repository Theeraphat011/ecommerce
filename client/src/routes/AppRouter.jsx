import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from "../layouts/LayoutPage"
import Shop from "../pages/Shop"
import Category from "../pages/category"
import Mens from '../pages/Mens'
import Womens from "../pages/womens"
import Perfume from "../pages/Perfume"
import Blog from "../pages/blog"
import HotOffers from "../pages/HotOffers"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {index: true, element: <Shop/>},
            {path: "category", element: <Category/>},
            {path: "mens", element: <Mens/>},
            {path: "womens", element: <Womens/>},
            {path: "perfume", element: <Perfume/>},
            {path: "blog", element: <Blog/>},
            {path: "hotoffers", element: <HotOffers/>},
        ]
    }
])

const AppRouter = () => {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}
export default AppRouter