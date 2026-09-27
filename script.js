/* =================================
   FLOATING HEARTS
================================= */

const heartsContainer =
    document.getElementById("hearts");

function createHeart() {

    if (!heartsContainer) return;

    const heart =
        document.createElement("div");

    heart.className = "heart";

    const heartTypes = [
        "💗",
        "💕",
        "💖",
        "💞",
        "♡",
        "❤️"
    ];

    heart.innerText =
        heartTypes[
            Math.floor(
                Math.random() * heartTypes.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 700);


/* =================================
   PAGES
================================= */

const opening =
    document.getElementById("opening");

const letterPage =
    document.getElementById("letter-page");

const forgivePage =
    document.getElementById("forgive-page");

const nom2Page =
    document.getElementById("nom2-page");

const finalPage =
    document.getElementById("final-page");


/* =================================
   ENVELOPE
================================= */

const envelope =
    document.getElementById("envelope");

let envelopeOpened = false;

if (envelope) {

    envelope.addEventListener("click", () => {

        if (envelopeOpened) return;

        envelopeOpened = true;

        envelope.classList.add("open");

        const tapText =
            document.querySelector(".tap-text");

        if (tapText) {
            tapText.innerText =
                "Tap the letter 💌";
        }

    });

}


/* =================================
   OPEN LETTER
================================= */

const letterInside =
    document.querySelector(".letter-inside");

if (letterInside) {

    letterInside.addEventListener("click", () => {

        if (!envelopeOpened) return;

        if (opening) {
            opening.classList.add("hidden");
        }

        if (letterPage) {
            letterPage.classList.remove("hidden");
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =================================
   CONTINUE BUTTON
================================= */

const continueBtn =
    document.getElementById("continue-btn");

if (continueBtn) {

    continueBtn.addEventListener("click", () => {

        if (letterPage) {
            letterPage.classList.add("hidden");
        }

        if (forgivePage) {
            forgivePage.classList.remove("hidden");
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =================================
   FORGIVE YES
================================= */

const yesBtn =
    document.getElementById("yes-btn");

if (yesBtn) {

    yesBtn.addEventListener("click", () => {

        if (forgivePage) {
            forgivePage.classList.add("hidden");
        }

        if (nom2Page) {
            nom2Page.classList.remove("hidden");
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =================================
   FORGIVE NO
================================= */

const noBtn =
    document.getElementById("no-btn");

if (noBtn) {

    noBtn.addEventListener(
        "mouseenter",
        moveNoButton
    );

    noBtn.addEventListener(
        "touchstart",
        (event) => {
            event.preventDefault();
            moveNoButton();
        }
    );

    noBtn.addEventListener(
        "click",
        (event) => {
            event.preventDefault();
            moveNoButton();
        }
    );

}


function moveNoButton() {

    const button =
        document.getElementById("no-btn");

    if (!button) return;

    const maxX =
        Math.max(
            20,
            window.innerWidth -
            button.offsetWidth -
            30
        );

    const maxY =
        Math.max(
            20,
            window.innerHeight -
            button.offsetHeight -
            30
        );

    const x =
        Math.random() * maxX;

    const y =
        Math.random() * maxY;

    button.style.position = "fixed";
    button.style.left = x + "px";
    button.style.top = y + "px";
    button.style.zIndex = "999";
}


/* =================================
   NOM2 YES
================================= */

const nom2YesBtn =
    document.getElementById("nom2-yes-btn");

if (nom2YesBtn) {

    nom2YesBtn.addEventListener("click", () => {

        if (nom2Page) {
            nom2Page.classList.add("hidden");
        }

        if (finalPage) {
            finalPage.classList.remove("hidden");
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =================================
   NOM2 NO
================================= */

const nom2NoBtn =
    document.getElementById("nom2-no-btn");

if (nom2NoBtn) {

    nom2NoBtn.addEventListener(
        "mouseenter",
        moveNom2NoButton
    );

    nom2NoBtn.addEventListener(
        "touchstart",
        (event) => {
            event.preventDefault();
            moveNom2NoButton();
        }
    );

    nom2NoBtn.addEventListener(
        "click",
        (event) => {
            event.preventDefault();
            moveNom2NoButton();
        }
    );

}


function moveNom2NoButton() {

    const button =
        document.getElementById("nom2-no-btn");

    if (!button) return;

    const maxX =
        Math.max(
            20,
            window.innerWidth -
            button.offsetWidth -
            30
        );

    const maxY =
        Math.max(
            20,
            window.innerHeight -
            button.offsetHeight -
            30
        );

    const x =
        Math.random() * maxX;

    const y =
        Math.random() * maxY;

    button.style.position = "fixed";
    button.style.left = x + "px";
    button.style.top = y + "px";
    button.style.zIndex = "999";
}


/* =================================
   EXTRA HEARTS
================================= */

for (let i = 0; i < 8; i++) {

    setTimeout(() => {
        createHeart();
    }, i * 300);

}