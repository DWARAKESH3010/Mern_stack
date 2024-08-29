import { Provider } from "react-redux";
import { myStore } from "./redux/config";
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Web from "./Web";

import { createBrowserRouter, RouterProvider, } from "react-router-dom";

let routerPaths = createBrowserRouter([
{"path":"/Home","element":<Home/>},
{"path":"/About","element":<About/>},
{"path":"/Contact","element":<Contact/>},
{"path":"/Web","element":<Web/>}

])
    
function App() {
  return (
    <Provider store={myStore}>
      <div>
        <RouterProvider router={routerPaths}/>
      </div>
    </Provider>

  );
}


export default App;
