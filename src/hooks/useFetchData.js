import {useEffect, useState} from "react";
import {apiService} from "../api/apiClient.js";


export const useFetchData = (endpoint) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await apiService.get(endpoint);
                setData(result);
            }catch (e) {
                setError(e);
            }finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [endpoint]);

    return {data, error, loading};
}