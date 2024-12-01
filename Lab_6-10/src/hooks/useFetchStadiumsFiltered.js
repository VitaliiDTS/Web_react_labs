import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchStadiumsWithParams = (searchFilter, seatsFilter) => {
    const [stadiums, setStadiums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStadiums = async () => {
            setLoading(true);
            try {

                const params = {};
                if (searchFilter) params.search = searchFilter;
                if (seatsFilter) params.seats = seatsFilter;

                console.log('Request params:', params);


                const response = await axios.get("http://localhost:5000/stadiums", { params });

                setStadiums(response.data);
            } catch (error) {
                setError(error.response?.data?.message || error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchStadiums();
    }, [searchFilter, seatsFilter]);

    return { stadiums, loading, error };
};

export default useFetchStadiumsWithParams;
