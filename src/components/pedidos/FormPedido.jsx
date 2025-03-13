import React, {useState} from 'react';
import {Dropdown} from "primereact/dropdown";
import {InputNumber} from "primereact/inputnumber";
import {InputTextarea} from "primereact/inputtextarea";
import {Button} from "primereact/button";

const FormPedido = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const [value, setValue] = useState(0);
    const [valueText, setValueText] = useState("");
    return (
        <div className="flex flex-col items-center p-6 space-y-6">
            <div className="flex">
                <h1 className="text-2xl font-semibold">Pedido de productos</h1>
            </div>
            <div className="flex flex-col p-6 space-y-6 bg-gray-100 shadow-md w-3/4">
                <div className="flex flex-row space-x-4" >
                    <div className="card flex flex-col space-y-2 justify-content-center w-1/4">
                        <label htmlFor="dd-city">Categoria del producto</label>
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                  placeholder="Selecciona una categoria" className=" md:w-14rem" />
                    </div>
                    <div className="card flex flex-col space-y-2 justify-content-center w-1/4">
                        <label htmlFor="dd-city">Proveedor para el pedido</label>
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                  placeholder="Selecciona un proveedor" className=" md:w-14rem" />
                    </div>
                    <div className="card flex flex-col space-y-2 justify-content-center w-1/4">
                        <label htmlFor="dd-city">Producto</label>
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                  placeholder="Selecciona un producto" className=" md:w-14rem" />
                    </div>
                    <div className="card flex flex-col space-y-2 justify-content-center w-1/4">
                        <label htmlFor="dd-city">Cantidad de producto</label>
                        <InputNumber inputId="stacked-buttons" value={value} onValueChange={(e) => setValue(e.value)} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="card flex flex-col space-y-2 justify-content-center">
                        <label htmlFor="dd-city">Descripción extra</label>
                        <InputTextarea value={valueText} onChange={(e) => setValueText(e.target.value)} rows={3} cols={30} />
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex w-1/7">
                        <Button label="Cancelar" severity="secondary" className="w-full" />
                    </div>

                    <div className="flex w-1/7">
                        <Button label="Enviar" className="w-full" />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default FormPedido;