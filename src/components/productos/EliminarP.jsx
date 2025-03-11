import React from 'react';
import {Button} from "primereact/button";
import {deleteProduct} from "../../services/productoService.js";

const EliminarP = ({id,cerrarModal,showInfo}) => {

    const eliminar = async ()=>{
        await deleteProduct(id)
        showInfo();
        cerrarModal();
    }

    return (
        <div className="flex flex-col space-y-8">
            <h1>¿ Esta seguro de eliminar este registro ?</h1>
            <div className="flex justify-between">
                <Button label="Cancelar" size="small" severity="secondary" onClick={cerrarModal} />
                <Button label="Eliminar" size="small" onClick={eliminar} />
            </div>
        </div>
    );
};

export default EliminarP;