import Navbar from "./components/Navbar/Navbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import { useRef, useState } from "react";

function App() {
  const bottomElem = useRef(null);
  const [activeDropdownMenu,setActiveDropDownMenu] = useState(false);


  const scrollViewToBottom = () => {
    setActiveDropDownMenu(false);
    bottomElem?.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const handleDropdownMenu = () => {

    setActiveDropDownMenu(!activeDropdownMenu);
}

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar scrollViewToBottom = {scrollViewToBottom} 
        handleDropdownMenu = {handleDropdownMenu} 
        activeDropdownMenu = {activeDropdownMenu}
        setActiveDropDownMenu={setActiveDropDownMenu}
      />,
      children:[
        {index:true,element:<Home bottomElem = {bottomElem} />},
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
