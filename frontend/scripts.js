document.addEventListener('DOMContentLoaded', () => {
  loadGrid();

  // Reset button functionality
  document.getElementById('reset').addEventListener('click', () => {
    if (confirm('Are you sure you want to reset the game?')) {
      fetch('/api/reset', { method: 'POST' })
        .then(response => {
          if (response.ok) {
            location.reload();
          } else {
            alert('Error resetting game');
          }
        })
      .catch(error => console.error('Reset error:', error));
    }
  }); 
});

async function loadGrid() {
  try {
    // Fetch categories
    const categoriesResponse = await fetch('/api/categories');
    const categories = await categoriesResponse.json();

    // Fetch all questions
    const questionsResponse = await fetch('/api/questions');
    const questions = await questionsResponse.json();

    // Group questions by category_id
    const questionsByCategory = {};
    questions.forEach(question => {
      if (!questionsByCategory[question.category_id]) {
        questionsByCategory[question.category_id] = []
      }
      questionsByCategory[question.category_id].push(question);
    });

    const grid = document.getElementById('grid');
    grid.innerHTML = '';  // Clear any existing content

    // Add category headers
    categories.forEach(category => {
      const div = document.createElement('div');
      div.className = 'category';
      div.textContent = category.name;
      grid.appendChild(div)
    });

    // Add question rectangles (assuming 5 questions per category)
    const numQuestionsPerCategory = 5;
    for (let i = 0; i < numQuestionsPerCategory; i++) {
      categories.forEach(category => {
        const question = questionsByCategory[category.id][i];
        if (question) {
          const div = document.createElement('div');
          div.className = question.visited ? 'question visited' : 'question';
          div.textContent = question.points;
          div.addEventListener('click', () => {
            markAsVisited(question.id);
            window.location.href = `question.html?id=${question.id}`;
          });
          grid.appendChild(div);
        }
      });
    }
  } catch (error) {
    console.error('Error loading grid:', error);
    alert('Failed to load game data');
  }
}

function markAsVisited(id) {
  fetch(`/api/questions/${id}/visit`, { method: 'POST' })
    .then(response => {
      if (!response.ok) {
        console.error('Error marking question as visited');
      }
    })
    .catch(error => console.error('Visit error:', error));
}
