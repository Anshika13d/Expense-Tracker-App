import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Dashboard, { dashboardLoader } from './Pages/Dashboard';
import Error from "./Pages/Error";
import Main, {mainLoader} from "./Layouts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />,
      },
    ]
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
