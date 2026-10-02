import {createBrowserRouter, RouterProvider} from "react-router-dom";
import First from "./pages/First";
import Singleproduct from "./pages/SingleProduct";
import Home from "./pages/Home";
import "./ecommerce.css";
const routes =createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
  {
    path:"/product",
    element: <Singleproduct />
  }
]);

function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App