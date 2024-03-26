import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Dashboard, { dashboardLoader, dashboardAction } from './Pages/Dashboard';
import Error from "./Pages/Error";
import Main, {mainLoader} from "./Layouts/LayoutMain";
import BudgetPage, { budgetAction, budgetLoader } from "./components/BudgetPage";


//actions
import { LogoutAction } from "./action/Logout";
import { deleteBudget } from "./action/deleteBudget";

//toast lib
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ExpensesName, { expensesAction, expensesLoader } from "./components/ExpensesName";

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
        path: 'budget/:id',
        element: <BudgetPage />,
        loader: budgetLoader,
        errorElement: <Error />,
        action: budgetAction,
        children: [
          {
            path: "delete",
            action: deleteBudget
          }
        ]
      },
      {
        path: 'expenses',
        element: <ExpensesName />,
        loader: expensesLoader,
        action: expensesAction,
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
