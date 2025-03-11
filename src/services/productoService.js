import apiClient from "../api/apiClient.js";
import {useEffect, useState} from "react";

export const useFetchData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await apiClient.get('/productos');
                setData(result);
            }catch (e) {
                setError(e);
            }finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return {data, error, loading};
}

export const createProduct = async (product) => {
    return await apiClient.post('/productos', product);
}

export const deleteProduct = async (id) => {
    return await apiClient.delete(`/productos/${id}`);
}