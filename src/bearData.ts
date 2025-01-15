const baseUrl = 'http://localhost:3000/api/bears';

export const getBearData = async (): Promise<any> => {
    try {
        const res = await fetch(baseUrl);
        if (!res.ok) {
            throw new Error('Failed to fetch bear data from the backend API');
        }
        return await res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};
