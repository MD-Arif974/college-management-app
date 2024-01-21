import Navbar from "./components/Navbar/Navbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children:[
        {index:true,element:<Home />},
        {
          path:'about',
          element:<About />
        },
        {
          path:"contact",
          element:<Contact />
        }
      ]
   
    },
   
  ]);

  return (
    <>
      
        <RouterProvider router={router} />
      </>
    
  );
}

export default App;
