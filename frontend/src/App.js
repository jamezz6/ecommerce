import Navbar from "./components/Navbar"
import AddItem from "./pages/AddItem"
import Home from "./Pages/Home"
import EditItem from "./Pages/EditItem"
import Storefront from "./components/Storefront"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <h1>Food</h1>
      <Routes>
        <Route
         path="/"
         element={<Storefront />}
         />
         <Route
         path="/add-item"
         element={<AddItem />}
         />
         <Route
         path="/:id"
         element={<EditItem />}
         />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App