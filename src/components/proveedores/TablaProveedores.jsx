import React from 'react';
import {allProveedores} from "../../services/proveedorService.js";
import TituloTablasGenerico from "../TituloTablasGenerico.jsx";
import TablaGenerica from "../TablaGenerica.jsx";

const TablaProveedores = () => {
    const {data, loading, error} = allProveedores()
    const titulo = "Proveedores";
    const columns = [
        {header: "ID", field: "id"},
        {header: "Nombre", field: "nombre"},
        {header: "Correo", field: "correo"},
        {header: "Direccion", field: "direccion"},
        {header: "Telefono", field: "telefono"},
    ]
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;
    return (
        <>
            <TituloTablasGenerico titulo={titulo}></TituloTablasGenerico>
            <TablaGenerica data={data.data} columns={columns} ></TablaGenerica>
        </>
    );
};

export default TablaProveedores;