import Home from "./Components/home.jsx";
import MainLayout from "./Components/MainLayout.jsx";
import Cart from "./Components/cart.jsx";

import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
      <Route path="" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="Cart" element={<Cart />} />
      </Route>

));
function App() {
  return (
    <>
  
    <RouterProvider router={router} />
    </>
  );
}

export default App;