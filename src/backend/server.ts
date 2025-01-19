import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import { Request, Response } from 'express';

const app = express();
const port = 5000;

const baseUrl = 'https://en.wikipedia.org/w/api.php';
const title = 'List_of_ursids';

const params = {
    action: 'parse',
    page: title,
    prop: 'wikitext',
    section: '3',
    format: 'json',
    origin: '*',
};

interface Bear {
    name: string;
    binomial: string;
    image: string | undefined;
    range: string;
}

app.use(cors());

const fetchBearData = async (): Promise<Bear[]> => {
    const url = `${baseUrl}?${new URLSearchParams(params as Record<string, string>).toString()}`;
    const res = await fetch(url);
    const data = await res.json();

    // @ts-ignore
    const wikitext: string = data.parse.wikitext['*'];
    const speciesTables = wikitext.split('{{Species table/end}}');
    const bears: Bear[] = [];

    for (const table of speciesTables) {
        const rows = table.split('{{Species table/row');
        for (const row of rows) {
            const nameMatch = row.match(/\|name=\[\[(.*?)\]\]/);
            const binomialMatch = row.match(/\|binomial=(.*?)\n/);
            const imageMatch = row.match(/\|image=(.*?)(\||\n)/);
            const rangeMatch = row.match(/\|range=(.*?)(\||\n)/);

            if (nameMatch && binomialMatch && imageMatch && rangeMatch) {
                const fileName = imageMatch[1]?.trim() ?? '';
                const range = rangeMatch[1]?.trim() ?? '';
                bears.push({
                    name: nameMatch[1].trim(),
                    binomial: binomialMatch[1].trim(),
                    image: fileName ? `https://commons.wikimedia.org/wiki/Special:FilePath/${fileName}` : undefined,
                    range,
                });
            }
        }
    }

    return bears;
};

app.get('/api/bears', async (_req: Request, res: Response) => {
    try {
        const bears = await fetchBearData();
        res.json(bears);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch bear data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
