import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';
import login from './pages/login';
import register from './pages/register';


let routerList=createBrowserRouter([
  {path:"login",element:<login/>},
  {path:"/",element:<Home/>},
  {path:"register",element:<register/>},
  {path:"details",element:<Details/>}
  
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={routerList}/>
    </div>
  );
}

export default App;