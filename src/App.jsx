import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Dashboard from './Pages/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/about",
    element: <h1>About Page</h1>
  },
]);

function App() {

  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  )
}

export default App
