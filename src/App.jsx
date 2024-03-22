import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Dashboard, { dashboardLoader, dashboardAction } from './Pages/Dashboard';
import Error from "./Pages/Error";
import Main, {mainLoader} from "./Layouts/LayoutMain";

//actions
import { LogoutAction } from "./action/Logout";

//toast lib
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "logout",
        action: LogoutAction
      }
    ]
  },
]);

function App() {

  return (
    <div className="App">
       <RouterProvider router={router} />
       <ToastContainer />
    </div>
  )
}

export default App
