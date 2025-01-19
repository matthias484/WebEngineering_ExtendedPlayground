import React, { useEffect, useState } from 'react';
// @ts-ignore
import { getBearData } from '../bearData';

interface Bear {
    name: string;
    binomial: string;
    image: string | undefined;
    range: string;
}

const Bears: React.FC = () => {
    const [bears, setBears] = useState<Bear[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBears = async () => {
            try {
                const data = await getBearData();
                setBears(data);
            } catch (err) {
                setError('Failed to fetch bear data');
            }
        };

        fetchBears();
    }, []);

    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Bears</h1>
            {bears.map((bear, index) => (
                <div key={index}>
                    <h3>
                        {bear.name} ({bear.binomial})
                    </h3>
                    {bear.image && <img src={bear.image} alt={bear.name} style={{ width: '200px', height: 'auto' }} />}
                    <p>
                        <strong>Range:</strong> {bear.range}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Bears;
