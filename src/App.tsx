import { Link, Route, Routes } from "react-router-dom"
import About from "./routes/About"
import Blog from "./routes/Blog"
import Contact from "./routes/Contact"
import Home from "./routes/Home"
import NotFound from "./routes/NotFound"
import CustomerDetail from "./routes/CustomerDetail"
import Customers from "./routes/Customers"



function App() {

  return (<>
      <ul style={{display:'flex', justifyContent:'space-between'}}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Blog'>Blog</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
        <li><Link to='/Customers'>Customers</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Customers" element={<Customers/>}/>
        <Route path="/Customers/:id" element={<CustomerDetail/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

      <h3>Footer</h3>
  </>)
}

export default App