const { db, initializeDatabase } = require('./database');

// Initialize the database first
initializeDatabase();

// Function to populate the database with sample data
function populateDatabase() {
  db.serialize(() => {
    // Insert categories
    db.run('INSERT INTO categories (name) VALUES (?)', ['Master of Wine'], (err) => {
      if (err) console.error('Error inserting category:', err.message);
    });
    db.run('INSERT INTO categories (name) VALUES (?)', ['Drama.ai'], (err) => {
      if (err) console.error('Error inserting category:', err.message);
    });
    db.run('INSERT INTO categories (name) VALUES (?)', ['PotterMania'], (err) => {
      if (err) console.error('Error inserting category:', err.message);
    });
    db.run('INSERT INTO categories (name) VALUES (?)', ['Peak Performance'], (err) => {
      if (err) console.error('Error inserting category:', err.message);
    });
    db.run('INSERT INTO categories (name) VALUES (?)', ['What\'s Poppin\'?'], (err) => {
      if (err) console.error('Error inserting category:', err.message);
    });

    // Master of Wine (category_id: 1)
    // Question 1
    db.run(
      'INSERT INTO questions (category_id, question, answer, points) VALUES (?, ?, ?, ?)',
      [1, 'The right side is a regular bottle of wine.\n\nA. What is the size of the bottle on the left called?\n\nB. What is its volume?', 'A. Magnum\n\nB. 1.5 Liters', 100],
      (err) => {
        if (err) console.error('Error inserting question:', err.message);
      }
    );
    db.run(
      'INSERT INTO question_images (question_id, image_path) VALUES (?, ?)',
      [1, '/images/magnum.jpg'],
      (err) => {
        if (err) console.error('Error inserting image:', err.message);
      }
    );
    // Question 2
    db.run(
      'INSERT INTO questions (category_id, question, answer, points) VALUES (?, ?, ?, ?)',
      [1, 'What part of the grape imparts color to the wine?', 'Grape skins', 200],
      (err) => {
        if (err) console.error('Error inserting question:', err.message);
      }
    );
    // Question 3
    db.run(
      'INSERT INTO questions (category_id, question, answer, points) VALUES (?, ?, ?, ?)',
      [1, 'Order these wines from lightest to darkest:\nMerlot, Cabernet Sauvignon, Pinot Noir', 'Pinot Noir -> Merlot -> Cabernet Sauvignon', 300],
      (err) => {
        if (err) console.error('Error inserting question:', err.message);
      }
    );
    // Question 4
    db.run(
      'INSERT INTO questions (category_id, question, answer, points) VALUES (?, ?, ?, ?)',
      [1, 'What does non-vintage mean?', 'The grapes are not from a single year, but a blend from multiple years', 400],
      (err) => {
        if (err) console.error('Error inserting question:', err.message);
      }
    );
    // Question 5
    db.run(
      'INSERT INTO questions (category_id, question, answer, points) VALUES (?, ?, ?, ?)',
      [1, 'A. What is this?\n\nB. Name a wine made from this.', 'A. Botrytis\n\nB. Sauternes', 500],
      (err) => {
        if (err) console.error('Error inserting question:', err.message);
      }
    );
    db.run(
      'INSERT INTO question_images (question_id, image_path) VALUES (?, ?)',
      [5, '/images/botrytis.png'],
      (err) => {
        if (err) console.error('Error inserting image:', err.message);
      }
    );

    // Drama.ai (category_id: 2)
    // Question 6
    db.run(
      'INSERT INTO questions (category_id, question, answer, points) VALUES (?, ?, ?, ?)',
      [2, 'Explain', 'DeepSeek released a SotA model trained at (allegedly) a fraction of the cost,\ncausing Nvidia stock to crash', 100],
      (err) => {
        if (err) console.error('Error inserting question:', err.message);
      }
    );
    db.run(
      'INSERT INTO question_images (question_id, image_path) VALUES (?, ?)',
      [6, '/images/deepseek-logo.jpg'],
      (err) => {
        if (err) console.error('Error inserting image:', err.message);
      }
    );
    db.run(
      'INSERT INTO question_images (question_id, image_path) VALUES (?, ?)',
      [6, '/images/stock-crash.jpg'],
      (err) => {
        if (err) console.error('Error inserting image:', err.message);
      }
    );
    // Question 7
    db.run(
      'INSERT INTO questions (category_id, question, answer, points) VALUES (?, ?, ?, ?)',
      [2, 'Explain', 'When LLMs went woke and generated images of founding fathers of America', 200],
      (err) => {
        if (err) console.error('Error inserting question:', err.message);
      }
    );
    db.run(
      'INSERT INTO question_images (question_id, image_path) VALUES (?, ?)',
      [7, '/images/founding-fathers.webp'],
      (err) => {
        if (err) console.error('Error inserting image:', err.message);
      }
    );
    // Question 8
    db.run(
      'INSERT INTO questions (category_id, question, answer, points) VALUES (?, ?, ?, ?)',
      [2, 'Explain', 'Scarlett Johansson sued OpenAI for using her voice for their AI voice assistant', 300],
      (err) => {
        if (err) console.error('Error inserting question:', err.message);
      }
    );
    db.run(
      'INSERT INTO question_images (question_id, image_path) VALUES (?, ?)',
      [8, '/images/openai-logo.jpg'],
      (err) => {
        if (err) console.error('Error inserting image:', err.message);
      }
    );
    db.run(
      'INSERT INTO question_images (question_id, image_path) VALUES (?, ?)',
      [8, '/images/her-poster.jpg'],
      (err) => {
        if (err) console.error('Error inserting image:', err.message);
      }
    );
    // Question 9
    db.run(
      'INSERT INTO questions (category_id, question, answer, points) VALUES (?, ?, ?, ?)',
      [2, 'Explain', 'AI deepfakes of Taylor Swift began circulating on social media\nshortly after she was named Time Person of the Year', 400],
      (err) => {
        if (err) console.error('Error inserting question:', err.message);
      }
    );
    db.run(
      'INSERT INTO question_images (question_id, image_path) VALUES (?, ?)',
      [9, '/images/taylor-swift.jpg'],
      (err) => {
        if (err) console.error('Error inserting image:', err.message);
      }
    );
    // Question 10
    db.run(
      'INSERT INTO questions (category_id, question, answer, points) VALUES (?, ?, ?, ?)',
      [2, 'BUZZER ROUND', '', 500],
      (err) => {
        if (err) console.error('Error inserting question:', err.message);
      }
    );

    // PotterMania (category_id: 3)
    // Question 11
    db.run(
      'INSERT INTO questions (category_id, question, answer, points) VALUES (?, ?, ?, ?)',
      [3, 'Identify', 'The Burrow', 100],
      (err) => {
        if (err) console.error('Error inserting question:', err.message);
      }
    );
    db.run(
      'INSERT INTO question_images (question_id, image_path) VALUES (?, ?)',
      [11, '/images/the-burrow.webp'],
      (err) => {
        if (err) console.error('Error inserting image:', err.message);
      }
    );
    // Question 12
    db.run(
      'INSERT INTO questions (category_id, question, answer, points) VALUES (?, ?, ?, ?)',
      [3, 'Which pub in London conceals the entrance to Diagon Alley?', 'The Leaky Cauldron', 200],
      (err) => {
        if (err) console.error('Error inserting question:', err.message);
      }
    );
    // Question 13
    db.run(
      'INSERT INTO questions (category_id, question, answer, points) VALUES (?, ?, ?, ?)',
      [3, 'What does a boggart turn into when Professor Lupin sees it?', 'A full moon', 300],
      (err) => {
        if (err) console.error('Error inserting question:', err.message);
      }
    );
    // Question 14
    db.run(
      'INSERT INTO questions (category_id, question, answer, points) VALUES (?, ?, ?, ?)',
      [3, 'A. Where is Arthur Weasley admitted after sustaining a\nlife-threatening injury?\n\nB. What is the cause of the injury?', 'A. St Mungo\'s Hospital for Magical Maladies and Injuries\n\nB. Attacked by Nagini while guarding the Department of Mysteries', 400],
      (err) => {
        if (err) console.error('Error inserting question:', err.message);
      }
    );
    // Question 15
    db.run(
      'INSERT INTO questions (category_id, question, answer, points) VALUES (?, ?, ?, ?)',
      [3, 'BUZZER ROUND', '', 500],
      (err) => {
        if (err) console.error('Error inserting question:', err.message);
      }
    );

    // Peak Performance (category_id: 4)
    // Question 16
    db.run(
      'INSERT INTO questions (category_id, question, answer, points) VALUES (?, ?, ?, ?)',
      [4, '', 'Half Dome, Yosemite', 100],
      (err) => {
        if (err) console.error('Error inserting question:', err.message);
      }
    );
    db.run(
      'INSERT INTO question_images (question_id, image_path) VALUES (?, ?)',
      [16, '/images/half-dome-hike.jpg'],
      (err) => {
        if (err) console.error('Error inserting image:', err.message);
      }
    );
    // Question 17
    db.run(
      'INSERT INTO questions (category_id, question, answer, points) VALUES (?, ?, ?, ?)',
      [4, '', 'The Matterhorn, Switzerland', 200],
      (err) => {
        if (err) console.error('Error inserting question:', err.message);
      }
    );
    db.run(
      'INSERT INTO question_images (question_id, image_path) VALUES (?, ?)',
      [17, '/images/matterhorn-hike.png'],
      (err) => {
        if (err) console.error('Error inserting image:', err.message);
      }
    );
    // Question 18
    db.run(
      'INSERT INTO questions (category_id, question, answer, points) VALUES (?, ?, ?, ?)',
      [4, '', 'Machu Pichu, Peru', 300],
      (err) => {
        if (err) console.error('Error inserting question:', err.message);
      }
    );
    db.run(
      'INSERT INTO question_images (question_id, image_path) VALUES (?, ?)',
      [18, '/images/machu-pichu-hike.jpg'],
      (err) => {
        if (err) console.error('Error inserting image:', err.message);
      }
    );
    // Question 19
    db.run(
      'INSERT INTO questions (category_id, question, answer, points) VALUES (?, ?, ?, ?)',
      [4, '', 'The Great Wall of China', 400],
      (err) => {
        if (err) console.error('Error inserting question:', err.message);
      }
    );
    db.run(
      'INSERT INTO question_images (question_id, image_path) VALUES (?, ?)',
      [19, '/images/great-wall-hike.webp'],
      (err) => {
        if (err) console.error('Error inserting image:', err.message);
      }
    );
    // Question 20
    db.run(
      'INSERT INTO questions (category_id, question, answer, points) VALUES (?, ?, ?, ?)',
      [4, '', 'Petra, Jordan', 500],
      (err) => {
        if (err) console.error('Error inserting question:', err.message);
      }
    );
    db.run(
      'INSERT INTO question_images (question_id, image_path) VALUES (?, ?)',
      [20, '/images/petra-hike.webp'],
      (err) => {
        if (err) console.error('Error inserting image:', err.message);
      }
    );

    // What's Poppin'? (category_id: 5)
    // Question 21
    db.run(
      'INSERT INTO questions (category_id, question, answer, points) VALUES (?, ?, ?, ?)',
      [5, 'A. Where is this?\n\nB. What happened next?', 'A. Grammys\n\nB. Everything was revealed', 100],
      (err) => {
        if (err) console.error('Error inserting question:', err.message);
      }
    );
    db.run(
      'INSERT INTO question_images (question_id, image_path) VALUES (?, ?)',
      [21, '/images/bianca-censori.webp'],
      (err) => {
        if (err) console.error('Error inserting image:', err.message);
      }
    );
    // Question 22
    db.run(
      'INSERT INTO questions (category_id, question, answer, points) VALUES (?, ?, ?, ?)',
      [5, 'Identify both individuals', '1. Optimus\n\n2. Kim Kardashian', 200],
      (err) => {
        if (err) console.error('Error inserting question:', err.message);
      }
    );
    db.run(
      'INSERT INTO question_images (question_id, image_path) VALUES (?, ?)',
      [22, '/images/kim-optimus-final.jpg'],
      (err) => {
        if (err) console.error('Error inserting image:', err.message);
      }
    );
    // Question 23
    db.run(
      'INSERT INTO questions (category_id, question, answer, points) VALUES (?, ?, ?, ?)',
      [5, '', 'Conan O\'Brien will be hosting the 2025 Oscars', 300],
      (err) => {
        if (err) console.error('Error inserting question:', err.message);
      }
    );
    db.run(
      'INSERT INTO question_images (question_id, image_path) VALUES (?, ?)',
      [23, '/images/oscars.jpg'],
      (err) => {
        if (err) console.error('Error inserting image:', err.message);
      }
    );
    // Question 24
    db.run(
      'INSERT INTO questions (category_id, question, answer, points) VALUES (?, ?, ?, ?)',
      [5, '', 'Henrik Christiansen, the "Olympic Muffin Man"', 400],
      (err) => {
        if (err) console.error('Error inserting question:', err.message);
      }
    );
    db.run(
      'INSERT INTO question_images (question_id, image_path) VALUES (?, ?)',
      [24, '/images/muffin-man.jpg'],
      (err) => {
        if (err) console.error('Error inserting image:', err.message);
      }
    );
    // Question 25
    db.run(
      'INSERT INTO questions (category_id, question, answer, points) VALUES (?, ?, ?, ?)',
      [5, '$1.69B    $1.34B    $1.05B', 'Highest grossing movies of 2024\n\n1. Inside Out 2\n\n2. Deadpool & Wolverine\n\n3. Moana 2', 500],
      (err) => {
        if (err) console.error('Error inserting question:', err.message);
      }
    );

    console.log('Sample data inserted.');
  });
}

// Run the population script
populateDatabase();

// Close the database connection after insertion
setTimeout(() => {
  db.close((err) => {
    if (err) console.error('Error closing database:', err.message);
    console.log('Database connection closed.');
  });
}, 1000); // Delay to ensure insertions complete
