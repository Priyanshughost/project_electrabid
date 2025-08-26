import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'
import Login from './components/Login'
import BuyerSignUp from './components/BuyerSignUp'
import SellerSignUp from './components/SellerSignUp'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import GovDashboard from './Pages/Dashboard'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
        <div>
          <Nav />
          <Home />
          <Footer />
        </div>
    },
    {
      path: "/Login",
      element:
        <div>
          <Nav />
          <Login />
          <Footer />
        </div>
    },
    {
      path: "/registration/signUp/seller",
      element:
        <div>
          <Nav />
          <SellerSignUp />
          <Footer />
        </div>
    },
    {
      path: "/registration/signUp/buyer",
      element:
        <div>
          <Nav />
          <BuyerSignUp />
          <Footer />
        </div>
    },
    {
      path: "/user/dashboard",
      element:

        <GovDashboard />

    }
  ]
)

function App() {

  return (
    <div className="cont">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
