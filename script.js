window.onload = function () {
    setTimeout(function () {
        let intro = document.getElementById("intro");
        if (intro) {
            intro.style.display = "none";
        }
    }, 5000);
};
const text = "CSE Student | Web Developer | Front-End Learner";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}

setTimeout(typeWriter, 5200);

const themeBtn = document.getElementById("theme-btn");

themeBtn.onclick = function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.innerText = "☀️ Light Mode";
    } else {
        themeBtn.innerText = "🌙 Dark Mode";
    }
};

