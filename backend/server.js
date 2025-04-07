const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const dbPath = path.resolve(__dirname, './db/timecapsule.db');
const db = new sqlite3.Database(dbPath);

// GET all characters
app.get('/characters', (req, res) => {
  db.all("SELECT * FROM characters", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// GET all items for a character
app.get('/characters/:id/items', (req, res) => {
  const { id } = req.params;
  db.all("SELECT * FROM capsule_items WHERE character_id = ?", [id], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});