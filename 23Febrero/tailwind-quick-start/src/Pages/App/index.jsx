import { useRoutes , BrowserRouter } from 'react-router-dom';
import Home from '../Home';
import Developers from '../Developers'
import './App.css'
import Navbar from '../../Components/navbar';
import Projects from '../Projects';
import About_me from '../About_me';

const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/Home', element:<Home />},
    { path: '/Developers', element: <Developers /> },
    { path: '/Projects', element: <Projects /> },
    { path: '/About_me', element: <About_me /> }
  ])
  return routes
}

const App = () => {

  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
    
  )
}
export default App
