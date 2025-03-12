import {Link} from "react-router-dom";

function NavBar(){
    return(
        <div className="flex flex-row justify-between w-full bg-gray-100 p-4 shadow-md">
            <div className="flex justify-center w-1/5">
                <div className="flex">
                    <a href="/" className="text-xl font-semibold">INICIO</a>
                </div>
            </div>
            <div className="flex w-4/5 justify-end space-x-6 text-lg">
                <div className="flex ">
                    <Link to="/productos">Productos</Link>
                </div>
                <div className="flex ">
                    <Link to="/clientes" >Clientes</Link>
                </div>
                <div className="flex ">
                    <Link to="/proveedores">Proveedores</Link>
                </div>
            </div>

        </div>
    )
}

export default NavBar;