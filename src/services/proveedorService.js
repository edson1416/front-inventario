import {useEffect, useState} from "react";
import apiClient from "../api/apiClient.js";

export const allProveedores = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const result = await apiClient.get('/proveedores');
                setData(result);
            }catch(e){
                setError(e);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    },[]);

    return {data, error, loading};
}