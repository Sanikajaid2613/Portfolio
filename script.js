function toggleMode() {
    document.body.classList.toggle("dark");
}
let text = "Hi, I'm Sanika 👋";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();