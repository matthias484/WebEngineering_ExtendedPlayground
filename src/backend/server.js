"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const app = (0, express_1.default)();
const port = 3000;
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
app.use((0, cors_1.default)());
const fetchBearData = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const url = `${baseUrl}?${new URLSearchParams(params).toString()}`;
    const res = yield (0, node_fetch_1.default)(url);
    const data = yield res.json();
    // @ts-ignore
    const wikitext = data.parse.wikitext['*'];
    const speciesTables = wikitext.split('{{Species table/end}}');
    const bears = [];
    for (const table of speciesTables) {
        const rows = table.split('{{Species table/row');
        for (const row of rows) {
            const nameMatch = row.match(/\|name=\[\[(.*?)\]\]/);
            const binomialMatch = row.match(/\|binomial=(.*?)\n/);
            const imageMatch = row.match(/\|image=(.*?)(\||\n)/);
            const rangeMatch = row.match(/\|range=(.*?)(\||\n)/);
            if (nameMatch && binomialMatch && imageMatch && rangeMatch) {
                const fileName = (_b = (_a = imageMatch[1]) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : '';
                const range = (_d = (_c = rangeMatch[1]) === null || _c === void 0 ? void 0 : _c.trim()) !== null && _d !== void 0 ? _d : '';
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
});
app.get('/api/bears', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bears = yield fetchBearData();
        res.json(bears);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch bear data' });
    }
}));
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
