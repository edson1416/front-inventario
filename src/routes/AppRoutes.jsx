import {Route, Routes} from "react-router-dom";
import TablaProductos from "../components/productos/TablaProductos.jsx";
import TablaClientes from "../components/clientes/TablaClientes.jsx";
import Inicio from "../components/Inicio.jsx";
import TablaProveedores from "../components/proveedores/TablaProveedores.jsx";
import FormPedido from "../components/pedidos/FormPedido.jsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio/>}></Route>
            <Route path="/productos" element={<TablaProductos/>}></Route>
            <Route path="/clientes" element={<TablaClientes/>}></Route>
            <Route path="/proveedores" element={<TablaProveedores/>}></Route>
            <Route path="/pedidos" element={<FormPedido/>}></Route>
        </Routes>
    )
}

export default AppRoutes;
