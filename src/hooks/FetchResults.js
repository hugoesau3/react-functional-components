import { useState, useEffect } from 'react';

const useFetchResults = (searchTerm) => {
    const [results, setResults] = useState({ results: [] }); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!searchTerm) {
            setResults({ results: [] });
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.discogs.com/database/search?q=${searchTerm}&token=YNXtTBAnQEBUIbrbpuITCKBPCAuNsYmHjvSfusFz`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setResults({ results: data.results || [] }); 
                console.log(data); 
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [searchTerm]);

    return { results, loading, error };
};

export default useFetchResults;