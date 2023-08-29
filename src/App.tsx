import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./routes/Home";
import CustomHook from './routes/CustomHook';
import Header from './components/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1>Error</h1>
    
  },
  {
    path: "/custom-hook",
    element: <CustomHook/>
  }
])

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
