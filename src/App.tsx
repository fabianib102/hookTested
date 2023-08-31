import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./routes/Home";
import CustomHook from './routes/CustomHook';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DetailCountry from './components/DetailCountry';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1>Error</h1>
  },
  {
    path: "country/:codeCountry",
    element: <DetailCountry/>
  },
  {
    path: "/custom-hook",
    element: <CustomHook/>
  }
])

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900'>
        <div className='relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900'>
          <div className='px-4 pt-6'>
            <RouterProvider router={router}/>
          </div>
        </div>
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
