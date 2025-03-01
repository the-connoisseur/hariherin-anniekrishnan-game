const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Path to the database file
const dbPath = path.join(__dirname, '../data/game.db');

// Connect to or create the database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Function to initialize the tables
function initializeDatabase() {
  db.serialize(() => {
    // Create categories table
    db.run(`
      CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
      )
    `);

    // Create questions table
    db.run(`
      CREATE TABLE IF NOT EXISTS questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        category_id INTEGER,
        question TEXT NOT NULL,
        answer TEXT NOT NULL,
        points INTEGER NOT NULL,
        visited INTEGER DEFAULT 0,
        FOREIGN KEY (category_id) REFERENCES categories(id)
      )
    `);

    // Create question_images table
    db.run(`
      CREATE TABLE IF NOT EXISTS question_images (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        question_id INTEGER NOT NULL,
        image_path TEXT NOT NULL,
        FOREIGN KEY (question_id) REFERENCES questions(id)
      )
    `);

    console.log('Database tables created or already exist.');
  });
}

// Export the database connection and initialization function
module.exports = { db, initializeDatabase };
