import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import 'primereact/resources/themes/lara-light-blue/theme.css';  // Puedes cambiar el tema
import 'primereact/resources/primereact.min.css';




function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <AppRoutes></AppRoutes>

        </BrowserRouter>
    )
}

export default App
