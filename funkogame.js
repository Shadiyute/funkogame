const prizes = [
    "Funko Pop 1",
    "Funko Pop 2",
    "Funko Pop 3",
    "Funko Pop 4",
    "Funko Pop 5",
    "Funko Pop 6",
    "Funko Pop 7",
    "Funko Pop 8"
];

function revealPrize(box) {
    const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
    box.innerHTML = randomPrize;
    box.style.backgroundColor = "#32cd32";
    box.style.pointerEvents = "none"; // Disable further clicks
}
