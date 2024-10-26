import {
  BrowserRouter,
  useRoutes,
} from "react-router-dom";
import {NavBar} from '../../Components/NavBar'
import { Content } from "../../Components/Content";
import { Home } from "../Home";


function AppRoutes(){
  const Routes = useRoutes(
    [
      {path : '/' , element : <Home/>},
      {path : '/ciberseguridad',element:<>Me encanta la ciberseguridad</>},
      {path : '/*',element:<>Sea sapo que eso no existe</>}

    ]
)
  return Routes
}
function App() {
  

  return (
    <div >
      <BrowserRouter>
    
        <NavBar/>
        <Content>
          <AppRoutes/>
        </Content>
      </BrowserRouter>
    </div>
  )
}

export default App
