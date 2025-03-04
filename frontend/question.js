document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const questionId = urlParams.get('id');

  if (!questionId) {
    alert('No question ID provided');
    window.location.href = 'index.html';
    return;
  }

  fetch(`/api/questions/${questionId}`)
    .then(response => {
      if (!response.ok) throw new Error('Question not found');
      return response.json();
    })
    .then(question => {
      // console.log('Question ID: ', questionId)
      console.log('Fetched data: ', question)
      const questionText = document.getElementById('question-text');
      console.log("Question element:", questionText);
      if (questionText) {
        console.log('Question text: ', question.question)
        questionText.textContent = question.question;
      } else {
        console.error('Element with ID "question-text" not found');
      }

      // Display images
      const imagesContainer = document.getElementById('question-images');
      if (imagesContainer) {
        imagesContainer.innerHTML = '';
        question.images.forEach(imagePath => {
          const img = document.createElement('img');
          img.src = imagePath;
          img.classList.add('question-image');
          img.alt = 'Question Image';
          img.style.margin = '5px';
          imagesContainer.appendChild(img);
        });
      } else {
        console.error('Element with ID "question-images" not found');
      }

      const revealAnswerButton = document.getElementById('reveal-answer');
      if (revealAnswerButton) {
        revealAnswerButton.addEventListener('click', () => {
          const answerElement = document.getElementById('answer');
          console.log("Answer element:", answerElement);
          if (answerElement) {
            answerElement.textContent = question.answer;
            answerElement.style.display = 'block';
          } else {
            console.error('Element with ID "answer" not found')
          }
        });
      } else {
        console.error('Element with ID "reveal-answer" not found')
      }
    })
    .catch(error => {
      console.error('Error fetching question:', error);
      alert('Error loading question');
      window.location.href = 'index.html';
    });

  const backButton = document.getElementById('back');
  if (backButton) {
    backButton.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  } else {
    console.error('Element with ID "back" not found');
  }
});
