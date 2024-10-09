import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar/NavbarL"
import { About } from "./section/About/About"
import { Queries } from "./section/Queries/Queries"
import { Inicio } from "./section/Inicio/Inicio"
import { Products } from "./section/Productos/Products"
import { Error_404 } from "./section/Error404/ERROR_404"
import { Footer } from "./components/footer/Footer"
import { Scroll } from "./components/scroll/scroll"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Queries" element={<Queries />} />
          <Route path="*" element={<Error_404 />} />
        </Routes>
        <Footer />
        <Scroll />
      </BrowserRouter>
    </>
  )
}

export default App
