import { defineConfig } from 'vite';
export default defineConfig({
    root: './src/frontend', // Root-Verzeichnis für das Frontend
    build: {
        outDir: '../../dist/frontend', // Ausgabeordner für das Frontend-Build
        emptyOutDir: true, // Vorherige Inhalte löschen
        rollupOptions: {
            input: './src/frontend/index.html', // Pfad zur index.html
        },
    },
    server: {
        host: true, // Externe Verbindungen zulassen
        port: 3000, // Frontend läuft auf Port 3000
    },
});
