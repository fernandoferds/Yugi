const state = {
    score: {
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById("score_box"),
    },
    cardSprites: {
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),

    },
    fieldCard: {
        player: document.getElementById("player-fiel-card"),
        computer: document.getElementById("computer-fiel-card"),
    },
    action: {
        button: document.getElementById("next-duel"),
    },
};

const playerSides = {
    player1: "player-field-card",
    computer: "computer-field-card",
};

const pathImages = ".src/assets/icons/"
const cardData = [
    {
        id: 0,
        name: "Blue Eyes White Dragon",
        type: "Paper",
        img: `${pathImages}dragon.png`,
        WinOf: [1],
        LoseOf: [2],
    },
    {
        id: 1,
        name: "Dark Magician",
        type: "Rock",
        img: `${pathImages}magician.png`,
        WinOf: [2],
        LoseOf: [0],
    },
    {
        id: 2,
        name: "Exodia",
        type: "Scissors",
        img: `${pathImages}exodia.png`,
        WinOf: [0],
        LoseOf: [1],
    },
];


async function drawCards(cardNumbers, fieldSide) {
    for (let i = 0; i < cardNumbers; i++) {
        const ramdomIdCard = await getRamdomCardId();
        const cardImage = await createCardImage(ramdomIdCard, fieldSide);
        document.getElementById(fieldSide).appendChild(cardImage);
    }
}

function init() {
    drawCards(5, playerSides.player1);
    drawCards(5, playerSides.computer);
};

init();