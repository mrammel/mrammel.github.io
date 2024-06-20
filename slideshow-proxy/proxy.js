// proxy.js
import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

const folderId = '17t-Qk9aTI2A5hwNEKp_y8mv5WUuENY--';
const apiKey = 'AIzaSyC8EjkrlWKpP_IJWiXC-an6i7u53Eh3a68';
const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,mimeType,thumbnailLink)`;

app.get('/images', async (req, res) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch images' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});
