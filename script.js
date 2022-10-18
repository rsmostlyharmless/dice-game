const img1El = document.querySelector(`.img1`);
const img2El = document.querySelector(`.img2`);
// const h1El = document.querySelector(`h1`);

// random number selection
const randomNumber1 = Math.trunc(Math.random() * 6) + 1;
const randomNumber2 = Math.trunc(Math.random() * 6) + 1;

// left hand dice
const role1 = function () {
    const randomImage1 = `dice${randomNumber1}.png`;
    const imgSource1 = `images/${randomImage1}`;
    img1El.setAttribute(`src`, imgSource1);
};
role1();

// right hand dice
const role2 = function () {
    const randomImage2 = `dice${randomNumber2}.png`;
    const imgSource2 = `images/${randomImage2}`;
    img2El.setAttribute(`src`, imgSource2);
};
role2();

// changing h1 text according to winner/draw
const winner = function () {
    if (randomNumber1 > randomNumber2) {
        document.querySelector(`h1`).innerHTML = `Player 1 wins🏆`;
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector(`h1`).innerHTML = `Player 2 wins🏆`;
    } else {
        document.querySelector(`h1`).innerHTML = `Draw🫥`;
    }
};
winner();

// const randomNumber1 = Math.trunc(Math.random() * 6) + 1;
// const randomNumber2 = Math.trunc(Math.random() * 6) + 1;

// const randomImage1 = `dice${randomNumber1}.png`;
// const randomImage2 = `dice${randomNumber2}.png`;

// const imgSource1 = `images/${randomImage1}`;
// const imgSource2 = `images/${randomImage2}`;

// const dice1 = img1El.setAttribute(`src`, imgSource1);
// const dice2 = img2El.setAttribute(`src`, imgSource2);
