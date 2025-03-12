import {Dialog} from "primereact/dialog";
import React, {useRef, useState} from "react";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Button} from "primereact/button";
import {Toast} from "primereact/toast";

const TablaGenerica = ({data, columns, formEditar, eliminar}) => {
    const [visible, setVisible] = useState(false);
    const [visibleEliminar, setVisibleEliminar] = useState(false);
    const [nombreModal, setNombreModal] = useState(null);
    const [datos, setDatos] = useState(null);
    const [idRegistro, setIdRegistro] = useState(null);

    const abrirModalEditar = (data) => {
        if (data) {
            setNombreModal('Editar registro');
        } else {
            setNombreModal('Nuevo registro');
        }
        setDatos(data);
        setVisible(true)
    }

    const abrirEliminar = (id) => {
        setIdRegistro(id)
        setVisibleEliminar(true);
    }

    const toast = useRef(null);
    const showSuccess = () => {
        toast.current.show({severity: 'success', summary: 'Success', detail: 'Save', life: 1500});
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    }

    const showInfo = () => {
        toast.current.show({severity:'info', summary: 'Info', detail:'Registro eliminado', life: 1500});
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    }

    return (
        <div className="flex flex-col space-y-6 items-center">
            <Toast ref={toast}/>
            {/*<Button label="Success" severity="success" onClick={showSuccess} />*/}
            <div className="flex flex-col w-3/5 space-y-4">
                <div className="flex justify-end">
                    <Button type="button" label="Nuevo producto" size="small" severity="secondary"
                            onClick={() => abrirModalEditar()}/>
                </div>
                <DataTable className="w-full" value={data["content"]} paginator rows={5}
                           rowsPerPageOptions={[5, 10, 25, 50]}
                           tableStyle={{minWidth: '50rem'}}>
                    {columns.map((column, index) => (
                        <Column key={index} field={column.field} header={column.header}></Column>
                    ))}
                    <Column
                        header="Acciones"
                        body={(rowData) => (
                            <div className="flex font-light">
                                <div
                                    className="bg-blue-500 text-white flex justify-center p-1 m-2 rounded-lg w-2/5 shadow-sm cursor-pointer hover:bg-blue-300">
                                    <button
                                        type="button"
                                        onClick={() => abrirModalEditar(rowData)}
                                        className="cursor-pointer"
                                    >Editar
                                    </button>
                                </div>

                                <div
                                    className="bg-red-500 text-white flex justify-center p-1 m-2 rounded-lg w-2/5 shadow-sm cursor-pointer hover:bg-red-300">
                                    <button
                                        type="button"
                                        onClick={() => abrirEliminar(rowData.id)}
                                        className="cursor-pointer"
                                    >Eliminar
                                    </button>
                                </div>
                            </div>
                        )}
                    />
                </DataTable>

            </div>
            <Dialog header={nombreModal} visible={visible} style={{width: '40vw'}} onHide={() => setVisible(false)}>
                {React.cloneElement(formEditar, {data: datos, onCancelar: () => setVisible(false), showSuccess})}
            </Dialog>

            <Dialog header="Eliminar producto" visible={visibleEliminar} style={{width: '30vw'}}
                    onHide={() => setVisibleEliminar(false)}>
                {React.cloneElement(eliminar, {id: idRegistro ,cerrarModal: () => setVisibleEliminar(false), showInfo})}
            </Dialog>

        </div>
    )
}

export default TablaGenerica;