import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Services from './components/Services.jsx'
import AdminServices from './components/admin/Services.jsx'
import Booking from './components/Booking.jsx'
import StaffAllocation from './components/StaffAllocation.jsx'
import Admin from './pages/Admin.jsx'
import Bookings from './components/admin/Bookings.jsx'
import Cleaners from './components/admin/Cleaners.jsx'
import Reports from './components/admin/Reports.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
    children: [
      {
        path: "/dashboard/services",
        element: <Services/>
      },
      {
        path: "/dashboard/booking",
        element: <Booking/>
      },
      {
        path: "/dashboard/staff-allocation",
        element: <StaffAllocation/>
      }
    ]
  },
  {
    path: "/admin",
    element: <Admin/>,
    children: [
      {
        path: "/admin/bookings",
        element: <Bookings/>
      },
      {
        path: "/admin/cleaners",
        element: <Cleaners/>
      },
      {
        path: "/admin/services",
        element: <AdminServices/>
      },
      {
        path: "/admin/reports",
        element: <Reports/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
