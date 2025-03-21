
import TablaGenerica from "../TablaGenerica.jsx";
import TituloTablasGenerico from "../TituloTablasGenerico.jsx";
import FormularioEditarP from "./FormularioEditarP.jsx";
import {useFetchData} from "../../services/productoService.js";
import EliminarP from "./EliminarP.jsx";

function TablaProductos() {
    const {data, loading, error} = useFetchData()
    const titulo = "Inventario de productos";
    const columns = [
        {header: 'ID', field: 'id'},
        {header: 'Descripcion', field: 'descripcion'},
        {header: 'Precio', field: 'precio'},
        {header: 'Existencia', field: 'existencia'},
    ]
    if (loading) return <p>Cargando datos ...</p>
    if (error) return <p>{error.message}</p>;
    //console.log(data.data[0].categorias[0].nombre);
    return (
        <>
            <TituloTablasGenerico titulo={titulo}></TituloTablasGenerico>
            <TablaGenerica data={data.data} columns={columns} formEditar={<FormularioEditarP/>} eliminar={<EliminarP/>}></TablaGenerica>
        </>

    )

}

export default TablaProductos;