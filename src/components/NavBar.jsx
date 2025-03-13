import {Link} from "react-router-dom";
import {useState} from "react";
import {Button} from "primereact/button";
import {Sidebar} from "primereact/sidebar";

function NavBar(){
    const [visibleRight, setVisibleRight] = useState(false);
    return(
        <div className="flex flex-row justify-between w-full bg-gray-100 p-4 shadow-md">
            <div className="flex justify-center w-1/5">
                <div className="flex items-center space-x-2">
                    <i className="pi pi-home" style={{ fontSize: '1.5rem' }}></i>
                    <a href="/" className="text-md font-semibold">INICIO</a>
                </div>
            </div>
            <div className="flex w-4/5 justify-end space-x-6 text-lg">
                <div className="hidden sm:flex items-center space-x-2">
                    <i className="pi pi-box"></i>
                    <Link to="/productos">Productos</Link>
                </div>
                <div className="hidden sm:flex items-center space-x-2">
                    <i className="pi pi-users"></i>
                    <Link to="/clientes" >Clientes</Link>
                </div>
                <div className="hidden sm:flex items-center space-x-2">
                    <i className="pi pi-briefcase"></i>
                    <Link to="/proveedores">Proveedores</Link>
                </div>
                <div className="hidden sm:flex items-center space-x-2">
                    <i className="pi pi-shopping-bag"></i>
                    <Link to="/pedidos">Pedidos</Link>
                </div>
            </div>

            <div className="sm:hidden">
                <Button icon="pi pi-bars" size="smalls" onClick={() => setVisibleRight(true)} />
            </div>

            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                <div className="flex flex-col space-y-4">
                    <Link to="/productos" onClick={()=> setVisibleRight(false)}>
                    <div className="flex p-2 space-x-3 items-center hover:bg-gray-100 shadow-sm">
                        <i className="pi pi-box"></i>
                        <h1>Productos</h1>

                    </div>
                    </Link>
                    <Link to="/clientes" onClick={()=> setVisibleRight(false)} >
                    <div className="flex p-2 space-x-3 items-center hover:bg-gray-100 shadow-sm">
                        <i className="pi pi-users"></i>
                        <h1>Clientes</h1>
                    </div>
                    </Link>
                    <Link to="/proveedores" onClick={()=> setVisibleRight(false)}>
                    <div className="flex p-2 space-x-3 items-center hover:bg-gray-100 shadow-sm">
                        <i className="pi pi-briefcase"></i>
                        <h1>Proveedores</h1>
                    </div>
                    </Link>
                </div>
            </Sidebar>

        </div>
    )
}

export default NavBar;