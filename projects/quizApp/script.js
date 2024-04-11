const apiUrl = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple';
        let currentQuestion = 0;
        let questions = [];

        function fetchQuestions() {
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    questions = data.results;
                    showQuestion();
                })
                .catch(error => console.error('Error fetching questions:', error));
        }

        function showQuestion() {
            const questionElement = document.getElementById('question');
            const optionsElement = document.getElementById('options');
            questionElement.textContent = questions[currentQuestion].question;

            // Clear previous options
            optionsElement.innerHTML = '';

            // Display options
            questions[currentQuestion].incorrect_answers.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.classList.add('option');
                optionElement.textContent = option;
                optionElement.addEventListener('click', () => checkAnswer(option, index));
                optionsElement.appendChild(optionElement);
            });

            const correctOptionElement = document.createElement('div');
            correctOptionElement.classList.add('option');
            correctOptionElement.textContent = questions[currentQuestion].correct_answer;
            correctOptionElement.addEventListener('click', () => checkAnswer(questions[currentQuestion].correct_answer, -1));
            optionsElement.appendChild(correctOptionElement);
        }

        function checkAnswer(selectedAnswer, selectedIndex) {
            const correctAnswer = questions[currentQuestion].correct_answer;
            const isCorrect = selectedIndex === -1 ? true : false;

            if (selectedAnswer === correctAnswer || isCorrect) {
                alert('Correct!');
            } else {
                alert('Incorrect!');
            }

            // Move to the next question or end the quiz
            currentQuestion++;
            if (currentQuestion < questions.length) {
                showQuestion();
            } else {
                alert('Quiz Ended');
            }
        }

        document.getElementById('next-btn').addEventListener('click', showQuestion);

        // Fetch questions when the page loads
        fetchQuestions();