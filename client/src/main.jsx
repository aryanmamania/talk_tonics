import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './routes/homepage/Homepage'
import DashboardLayout from './layouts/dashboardLayout/dashboardLayout'
import Dashboard from './routes/dashboard/Dashboard'
import Chatpage from './routes/chatpage/Chatpage'
import Rootlayout from './layouts/rootlayouts/RootLayout'
import SignInPage from './routes/signInPage/signInPage'
import SignUpPage from './routes/signUpPage/signUpPage'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'




const router = createBrowserRouter([
{
  element: <Rootlayout />,
  children: [
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/sign-in/*",
      element: <SignInPage />,
    },
    {
      path: "/sign-up/*",
      element: <SignUpPage />,
    },
    {
      element: <DashboardLayout />,
      children:[
        {
          path:"/dashboard",
          element:<Dashboard />
        },
        {
          path:"/dashboard/chats/:id",
          element:<Chatpage />
        }
      ]
    }
  ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
