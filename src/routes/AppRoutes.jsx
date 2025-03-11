import {Route, Routes} from "react-router-dom";
import TablaProductos from "../components/productos/TablaProductos.jsx";
import TablaClientes from "../components/clientes/TablaClientes.jsx";
import Inicio from "../components/Inicio.jsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio/>}></Route>
            <Route path="/productos" element={<TablaProductos/>}></Route>
            <Route path="/clientes" element={<TablaClientes/>}></Route>
        </Routes>
    )
}

export default AppRoutes;
