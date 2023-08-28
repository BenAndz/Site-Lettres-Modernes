let card = document.querySelector(".card");
let grammarBox = document.querySelectorAll(".grammar-box");
let grammarContainer = document.querySelector(".grammar-container");
let isCardLeft = false;

card.style.left = "0%";
card.style.transition = "left 1s";
grammarContainer.style.position = "absolute";
grammarContainer.style.padding = "115px";
grammarContainer.style.left = "0%";
grammarBox.forEach((box) => {
    box.style.display = "none";
});

card.addEventListener("click", () => {
    if (!isCardLeft) {
        card.style.left = "-25%";
        setTimeout(() => {
            grammarContainer.style.position = "absolute";
            grammarContainer.style.padding = "115px";
            grammarBox.forEach((box) => {
                box.style.display = "block";
            });
            grammarContainer.style.left = "37%";
        }, 650);
        isCardLeft = true;
    } else {
        card.style.left = "0%";
        grammarBox.forEach((box) => {
            box.style.display = "none";
        });
        grammarContainer.style.left = "0%";
        isCardLeft = false;
    };
});

let card2 = document.querySelector(".card2");
let conjugaisonBox = document.querySelectorAll(".conjugaison-box");
let conjugaisonContainer = document.querySelector(".conjugaison-container");
let isCard2Right = false;

card2.style.right = "0%";
card2.style.transition = "right 1s";
conjugaisonContainer.style.position = "absolute";
conjugaisonContainer.style.padding = "115px";
conjugaisonContainer.style.left = "0%";
conjugaisonBox.forEach((box) => {
    box.style.display = "none";
});

card2.addEventListener("click", () => {
    if(!isCard2Right) {
        card2.style.right = "-25%";
        setTimeout(() => {
            conjugaisonContainer.style.position = "absolute";
            conjugaisonContainer.style.padding = "115px";
            conjugaisonContainer.style.marginLeft = "28%";
            conjugaisonBox.forEach((box) => {
                box.style.display = "block";
            });
        }, 650);
        isCard2Right = true;
    } else {
        card2.style.right = "0%";
        conjugaisonBox.forEach((box) => {
            box.style.display = "none";
        });
        conjugaisonContainer.style.marginLeft = "0";
        isCard2Right = false;
    };
});
