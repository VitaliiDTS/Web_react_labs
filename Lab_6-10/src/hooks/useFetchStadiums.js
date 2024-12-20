import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchStadiums = () => {
    const [stadiums, setStadiums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStadiums = async () => {
            try {
                const response = await axios.get("http://localhost:5000/stadiums");
                setStadiums(response.data);
            } catch (error) {
                setError(error.response?.data?.message || error.message);
            } finally {
                setTimeout(() => setLoading(false), 1500);
            }
        };

        fetchStadiums();
    }, []);

    return { stadiums, loading, error };
};

export default useFetchStadiums;
