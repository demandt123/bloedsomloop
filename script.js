document.addEventListener('DOMContentLoaded', () => {
    // Video logica
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/yPUDriwcQak" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;

    // Quiz logica
    const quizContainer = document.getElementById('quiz-container');
    const questions = [
        {
            question: "Wat is de functie van de grote bloedsomloop?",
            answers: ["Zuurstofrijk bloed naar het lichaam brengen", "Zuurstofarm bloed naar de longen brengen", "Voedingsstoffen naar de longen brengen", "Afvalstoffen naar de nieren brengen"],
            correct: 0
        },
        {
            question: "Wat is de functie van de kleine bloedsomloop?",
            answers: ["Zuurstofrijk bloed naar het lichaam brengen", "Zuurstofarm bloed naar de longen brengen", "Voedingsstoffen naar de longen brengen", "Afvalstoffen naar de nieren brengen"],
            correct: 1
        },
        // Voeg hier meer vragen toe
    ];

    let currentQuestion = 0;
    function showQuestion() {
        if (currentQuestion < questions.length) {
            const q = questions[currentQuestion];
            quizContainer.innerHTML = `
                <p>${q.question}</p>
                ${q.answers.map((answer, index) => `<button onclick="checkAnswer(${index})">${answer}</button>`).join('')}
            `;
        } else {
            quizContainer.innerHTML = '<p>Je hebt de quiz voltooid!</p>';
        }
    }

    window.checkAnswer = function(index) {
        if (index === questions[currentQuestion].correct) {
            alert('Correct!');
        } else {
            alert('Fout!');
        }
        currentQuestion++;
        showQuestion();
    };

    showQuestion();
});