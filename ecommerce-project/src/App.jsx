import {HomePage} from './pages/HomePage'
import './App.css'
import{CheckoutPage} from './pages/CheckoutPage'
import {Routes,Route} from 'react-router'
import {OrdersPage} from './pages/OrdersPage'
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/orders" element={<OrdersPage />} />
    </Routes>
     
       
    </>
    //if path is / then u can write Route index element =instead of the = 
    //routing is used to navigate between different pages in the application. The Routes component defines the different routes and their corresponding components. The Route component specifies the path and the element to render when that path is accessed. In this case, the HomePage component is rendered when the root path ("/") is accessed, and a simple heading is rendered for the "/checkout" path .
  )
}

export default App
