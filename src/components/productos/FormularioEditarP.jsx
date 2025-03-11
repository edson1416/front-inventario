import React, {useEffect} from 'react';
import {InputText} from "primereact/inputtext";
import {InputNumber} from "primereact/inputnumber";
import {Button} from "primereact/button";
import {createProduct} from "../../services/productoService.js";

const FormularioEditarP = ({data, onCancelar, showSuccess}) => {

    const [producto, setProducto] = React.useState({
        idProducto: null,
        descripcion: "",
        precio: "",
        existencia: "",
    });
    React.useEffect(() => {
        if (data) {
            setProducto({
                idProducto: data.idProducto,
                descripcion: data.descripcion,
                precio: data.precio,
                existencia: data.existencia,
            });
        }
    }, [data]);

    const resetProducto = () => {
        onCancelar();
    };

    useEffect(() => {
        //console.log("Producto actualizado:", producto);
    }, [producto]);

    const handleChange = (e, field) => {
        const value = e.value || e.target.value;
        setProducto(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const enviarFormulario = async (e) => {
        e.preventDefault();
        console.log(producto);
        await createProduct(producto)
        showSuccess()
        onCancelar()
    }

    return (
        <form className="flex flex-col space-y-4"
              onSubmit={(e) => enviarFormulario(e)}>
            <div className="w-full flex flex-col">
                <div className="flex flex-col space-y-2 p-4">
                    <InputText id="idProducto"
                               value={producto.idProducto || ""} hidden/>
                    <label htmlFor="descripcion">Descripcion</label>
                    <InputText id="descripcion"
                               placeholder="Digite descripcion del producto"
                               value={producto.descripcion || ""}
                               onChange={(e) => handleChange(e, 'descripcion')}
                               required={true}/>
                </div>
                <div className="flex flex-col space-y-2 p-4">
                    <label htmlFor="precio">Precio</label>
                    <InputNumber id="precio" mode="currency" currency="USD" locale="en-US"
                                 placeholder="Digite precio del producto" value={producto.precio || null}
                                 onChange={(e) => handleChange(e, 'precio')}
                                 required={true}/>
                </div>
                <div className="flex flex-col space-y-2 p-4">
                    <label htmlFor="existencia">Existencias</label>
                    <InputNumber id="existencia" placeholder="digite la cantidad en stock"
                                 value={producto.existencia || null}
                                 onChange={(e) => handleChange(e, 'existencia')}
                                 required={true}/>
                </div>
            </div>
            <div className="flex justify-between">
                <Button type="button" label="Cancelar" size="small" severity="secondary" onClick={resetProducto}/>
                <Button type="submit" label="Aceptar" size="small"/>
            </div>
        </form>
    );
};

export default FormularioEditarP;