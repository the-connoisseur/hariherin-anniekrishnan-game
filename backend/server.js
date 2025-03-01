const express = require('express');
const { db, initializeDatabase } = require('./database');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Serve static image files from the frontend/images directory
app.use(express.static(path.join(__dirname, '../frontend/images')))

// Basic route to serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Middleware to parse JSON bodies.
app.use(express.json());

// Initialize the database (creates tables if they don't exist)
initializeDatabase();

// API route to get all the categories
app.get('/api/categories', (req, res) => {
  db.all('SELECT * FROM categories', [], (err, rows) => {
    if (err) {
      console.error('Error fetching categories:', err.message);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json(rows);
  });
});

// API route to get all the questions
app.get('/api/questions', (req, res) => {
  db.all('SELECT * FROM questions', [], (err, rows) => {
    if (err) {
      console.error('Error fetching questions:', err.message);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json(rows);
  });
});

// API route to get a single question by its id
app.get('/api/questions/:id', (req, res) => {
  const { id } = req.params;
  db.get('SELECT id, question, answer FROM questions WHERE id = ?', [id], (err, question) => {
    if (err) {
      console.error('Error fetching questions:', err.message);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }

    db.all('SELECT image_path FROM question_images WHERE question_id = ?', [id], (err, images) => {
      if (err) {
        console.error('Error fetching images:', err.message);
        return res.status(500).json({ error: 'Internal server error' });
      }
      question.images = images.map(img => img.image_path);
      res.json(question);
    });
  });
});

app.post('/api/questions/:id/visit', (req, res) => {
  const { id } = req.params;
  db.run(
    'UPDATE questions SET visited = 1 WHERE id = ?',
    [id],
    function (err) {
      if (err) {
        console.error('Error updating question:', err.message);
        return res.status(500).json({ error: 'Internal server error' });
      }
      if (this.changes === 0) {
        return res.status(404).json({ error: 'Question not found' });
      }
      res.json({ message: 'Question marked as visited' });
    }
  );
});

app.post('/api/reset', (req, res) => {
  db.run(
    'UPDATE questions SET visited = 0',
    function(err) {
      if (err) {
        console.error('Error updating question:', err.message);
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.json({ message: 'Game reset successfully' });
    }
  );
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
});
