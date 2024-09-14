import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./componentes/NavbarL"
import { About } from "./SECCIONES/About"
import { Queries } from "./SECCIONES/Queries"
import { Inicio } from "./SECCIONES/Inicio"
import { Products } from "./SECCIONES/Products"
import { Error_404 } from "./SECCIONES/ERROR_404"

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
      </BrowserRouter>
    </>
  )
}

export default App
