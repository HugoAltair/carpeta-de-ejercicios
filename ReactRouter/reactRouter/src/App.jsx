import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Acerca } from "./pages/Acerca";
import { Contacto } from "./pages/Contacto";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Error404 } from "./components/Error404";
import { Productos } from "./pages/Productos";
import { ProductoDetalle } from "./pages/ProductoDetalle";
import { useState } from "react";
import { Servicios } from "./pages/Servicios";
import { ServiciosHome } from "./pages/ServiciosHome";
import { ServiciosGarantia } from "./pages/ServiciosGarantia";
import { ServiciosLista } from "./pages/ServiciosLista 3";
import { ServiciosPoliticas } from "./pages/ServiciosPoliticas";
import { ServicioDetalle } from "./pages/ServicioDetalle";
function App() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Producto 1", precio: 100 },
    { id: 2, nombre: "Producto 2", precio: 200 },
    { id: 3, nombre: "Producto 3", precio: 300 },
    { id: 4, nombre: "Producto 4", precio: 400 },
    { id: 5, nombre: "Producto 5", precio: 500 },
  ]);
  const [servicios, setServicios] = useState([
    { id: 1, nombre: "Servicio 1", precio: 1000 },
    { id: 2, nombre: "Servicio 2", precio: 2000 },
    { id: 3, nombre: "Servicio 3", precio: 3000 },
    { id: 4, nombre: "Servicio 4", precio: 4000 },
    { id: 5, nombre: "Servicio 5", precio: 5000 },
  ]);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/about" element={<Navigate to="/acerca" />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route
            path="/productos"
            element={<Productos productos={productos} />}
          />
          <Route
            path="/productos/:id"
            element={<ProductoDetalle productos={productos} />}
          />
          <Route path="/servicios" element={<Servicios />}>
            <Route index element={<ServiciosHome />}></Route>
            <Route path="garantia" element={<ServiciosGarantia />}></Route>
            <Route
              path="lista"
              element={<ServiciosLista servicios={servicios} />}
            ></Route>
            <Route
              path=":id"
              element={
                <>
                  <ServiciosLista servicios={servicios} />
                  <ServicioDetalle servicios={servicios} />
                </>
              }
            ></Route>
            <Route path="politicas" element={<ServiciosPoliticas />}></Route>
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
