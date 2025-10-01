let card = document.getElementById("card");
let question = document.getElementById("question");
let message = document.getElementById("answer");
let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let yesSound = document.getElementById("yesSound");
let noSound = document.getElementById("noSound");

// Exibir a mensagem caso seja selecionado o 'sim'
yesButton.addEventListener("click", function () {
    card.style.backgroundImage = "url('https://img1.picmix.com/output/stamp/normal/5/1/0/1/1171015_f458c.gif')";
    question.style.display = "none";
    message.style.display = "flex";
    yesSound.play();
    createHearts();
});

// Movimento aleatório do botão 'não'
noButton.addEventListener("mouseover", function () {
    let width = window.innerWidth - noButton.offsetWidth;
    let height = window.innerHeight - noButton.offsetHeight;
    let newX = Math.random() * width;
    let newY = Math.random() * height;

    noButton.style.position = "absolute";
    noButton.style.left = ${newX}px;
    noButton.style.top = ${newY}px;

    noSound.play();
});

// Criar corações caindo
function createHearts() {
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 2 + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}