import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AddRestaurant from "./pages/AddRestaurant";
import Restaurants from "./pages/Restaurants";
import RestaurantDetails from "./pages/RestaurantDetails";
import About from "./pages/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "/restaurants", element: <Restaurants /> },
        {
          path: "/add-restaurant",
          element: <AddRestaurant />,
        },
        {
          path: "/update-restaurant/:id",
          element: <AddRestaurant />,
        },
        {
          path: "/restaurant/:id",
          element: <RestaurantDetails />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
