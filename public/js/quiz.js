export const quiz = [
    { name: "Afghanistan", flag: "/images/flags/afghanistan.png" },
    { name: "Albania", flag: "/images/flags/albania.png" },
    { name: "Andorra", flag: "/images/flags/andorra.png" },
    { name: "Austria", flag: "/images/flags/austria.png" },
    { name: "Bangladesh", flag: "/images/flags/bangladesh.png" },
    { name: "Barbados", flag: "/images/flags/barbados.png" },
    { name: "Belgium", flag: "/images/flags/belgium.png" },
    { name: "Bosnia and Herzegovina", flag: "/images/flags/bosnia.png" },
    { name: "Brazil", flag: "/images/flags/brazil.png" },
    { name: "Bulgaria", flag: "/images/flags/bulgaria.png" },
    { name: "Burkina Faso", flag: "/images/flags/burkina_faso.png" },
    { name: "Cape Verde", flag: "/images/flags/cape_verde.png" },
    { name: "Chad", flag: "/images/flags/chad.png" },
    { name: "Colombia", flag: "/images/flags/colombia.png" },
    { name: "Croatia", flag: "/images/flags/croatia.png" },
    { name: "Cuba", flag: "/images/flags/cuba.png" },
    { name: "Cyprus", flag: "/images/flags/cyprus.png" },
    { name: "Czech Republic", flag: "/images/flags/czech_republic.png" },
    { name: "Ecuador", flag: "/images/flags/ecuador.png" },
    { name: "Egypt", flag: "/images/flags/egypt.png" },
    { name: "Equatorial Guinea", flag: "/images/flags/equatorial_guinea.png" },
    { name: "Ethiopia", flag: "/images/flags/ethiopia.png" },
    { name: "France", flag: "/images/flags/france.png" },
    { name: "Gabon", flag: "/images/flags/gabon.png" },
    { name: "Germany", flag: "/images/flags/germany.png" },
    { name: "Gibraltar", flag: "/images/flags/gibraltar.png" },
    { name: "Greece", flag: "/images/flags/greece.png" },
    { name: "Guam", flag: "/images/flags/guam.png" },
    { name: "Guatemala", flag: "/images/flags/guatemala.png" },
    { name: "India", flag: "/images/flags/india.png" },
    { name: "Ireland", flag: "/images/flags/ireland.png" },
    { name: "Israel", flag: "/images/flags/israel.png" },
    { name: "Italy", flag: "/images/flags/italy.png" },
    { name: "Jamaica", flag: "/images/flags/jamaica.png" },
    { name: "Kenya", flag: "/images/flags/kenya.png" },
    { name: "Latvia", flag: "/images/flags/latvia.png" },
    { name: "Liechtenstein", flag: "/images/flags/liechtenstein.png" },
    { name: "Lithuania", flag: "/images/flags/lithuania.png" },
    { name: "Madagascar", flag: "/images/flags/madagascar.png" },
    { name: "Malaysia", flag: "/images/flags/malaysia.png" },
    { name: "Mexico", flag: "/images/flags/mexico.png" },
    { name: "Morocco", flag: "/images/flags/morocco.png" },
    { name: "Mozambique", flag: "/images/flags/mozambique.png" },
    { name: "Myanmar", flag: "/images/flags/myanmar.png" },
    { name: "New Zealand", flag: "/images/flags/new_zealand.png" },
    { name: "Niger", flag: "/images/flags/niger.png" },
    { name: "Nigeria", flag: "/images/flags/nigeria.png" },
    { name: "Peru", flag: "/images/flags/peru.png" },
    { name: "Philippines", flag: "/images/flags/philippines.png" },
    { name: "Poland", flag: "/images/flags/poland.png" },
    { name: "Qatar", flag: "/images/flags/qatar.png" },
    { name: "Romania", flag: "/images/flags/romania.png" },
    { name: "Saudi Arabia", flag: "/images/flags/saudi_arabia.png" },
    { name: "Senegal", flag: "/images/flags/senegal.png" },
    { name: "Serbia", flag: "/images/flags/serbia.png" },
    { name: "Seychelles", flag: "/images/flags/seychelles.png" },
    { name: "South Africa", flag: "/images/flags/south_africa.png" },
    { name: "Spain", flag: "/images/flags/spain.png" },
    { name: "Sri Lanka", flag: "/images/flags/sri_lanka.png" },
    { name: "Sweden", flag: "/images/flags/sweden.png" },
    { name: "Switzerland", flag: "/images/flags/switzerland.png" },
    { name: "Thailand", flag: "/images/flags/thailand.png" },
    { name: "Trinidad and Tobago", flag: "/images/flags/trinidad_and_tobago.png" },
    { name: "Turkey", flag: "/images/flags/turkey.png" },
    { name: "Ukraine", flag: "/images/flags/ukraine.png" },
    { name: "Vietnam", flag: "/images/flags/vietnam.png" },
    { name: "Yemen", flag: "/images/flags/yemen.png" },
    { name: "Zimbabwe", flag: "/images/flags/zimbabwe.png" }
]


let correctAnswers = 0;

export function createquiz() {
    console.log("create quiz");
    const questions = getRandomCountry(11);
    let currentQuestion = 0;
    const quizContainer = document.createElement("div");
    quizContainer.id = "quiz-container";
    const questionContainer = document.createElement("div");
    questionContainer.id = "question-container";


    questions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.id = `question-${index}`;
        questionDiv.style.display = index === 0 ? "block" : "none";

        const flagContainer = document.createElement("div");
        flagContainer.innerHTML = `<img src="${question.flag}"/>`;
        questionDiv.appendChild(flagContainer);

        const questionText = document.createElement("p");
        questionText.innerHTML = `What is the name of this country?`;
        questionDiv.appendChild(questionText);

        const optionsContainer = document.createElement("div");
        optionsContainer.classList.add(`options-container`);
        questionDiv.appendChild(optionsContainer);

        const options = getRandomOptions(question, 4);
        options.forEach((option, i) => {
            const optionBtn = document.createElement("button");
            optionBtn.innerHTML = option.name;
            optionBtn.value = option.name;
            optionBtn.onclick = () => checkAnswer(option.isCorrect, index, questions.length);
            optionsContainer.appendChild(optionBtn);
        });
        questionContainer.appendChild(questionDiv);
    });
    quizContainer.appendChild(questionContainer);
    document.querySelector(".quiz-container").appendChild(quizContainer);

    
}

function checkAnswer(isCorrect, currentQuestion, amountOfQuestions) {
    
    if (isCorrect) {
        correctAnswers++;
        alert("Correct!");
    } else {
        alert("Incorrect");
    }


    document.querySelector(`#question-${currentQuestion}`).style.display = "none";
    currentQuestion++;

    if (currentQuestion !== 10) {
        document.querySelector(`#question-${currentQuestion}`).style.display = "initial";
    }

    if (currentQuestion === 10) {
        alert(`Quiz is finished! You got ${correctAnswers} out of 10 correct.`);
        window.location.href = "/home";
        return;
    }
    const currentQuestionContainer = document.getElementById(`options-container-${currentQuestion}`);
    currentQuestionContainer.style.display = "block";
    document.getElementById(`options-container-${currentQuestion - 1}`).style.display = "none";
}

function getRandomCountry(amount) {
    const countries = [...quiz];
    const randomCountries = [];
    for (let i = 0; i < amount; i++) {
        const randomIndex = Math.floor(Math.random() * countries.length);
        randomCountries.push(countries.splice(randomIndex, 1)[0]);
    }
    return randomCountries;
}

function getRandomOptions(question, amount) {
    const options = [];
    options.push({ name: question.name, isCorrect: true });
    while (options.length < amount) {
        const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
        if (!options.find((option) => option.name === randomCountry.name)) {
            options.push({ name: randomCountry.name, isCorrect: false });
        }
    }
    return options.sort(() => Math.random() - 0.5);
}





