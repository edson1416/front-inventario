import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TablaProductos from "./components/productos/TablaProductos.jsx";
import NavBar from "./components/NavBar.jsx";
import App from "./App.jsx";
import {PrimeReactProvider} from "primereact/api";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/*<NavBar></NavBar>*/}
      {/*<TablaProductos></TablaProductos>*/}
      <PrimeReactProvider>
          <App></App>
      </PrimeReactProvider>
  </StrictMode>,
)
