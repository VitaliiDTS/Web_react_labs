import { useState, useEffect } from 'react';

const useFetchStadiums = () => {
    const [stadiums, setStadiums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStadiums = async () => {
            try {
                const response = await fetch("http://localhost:5000/stadiums");
                if (!response.ok) {
                    throw new Error("Failed to fetch stadiums");
                }
                const data = await response.json();
                setStadiums(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setTimeout(() => setLoading(false), 2000);
            }
        };

        fetchStadiums();
    }, []);

    return { stadiums, loading, error };
};

export default useFetchStadiums;
