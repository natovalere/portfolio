// -------------------------
// 🌙 CHANGER LE THÈME
// -------------------------
const themeButton = document.createElement("button");
themeButton.innerText = "🌙 / ☀️";
themeButton.classList.add("theme-btn");
document.body.appendChild(themeButton);

// Si un thème est sauvegardé
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.removeItem("theme");
    }
});

// -------------------------
// 🖱️ CURSEUR PERSONNALISÉ
// -------------------------
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
});

// -------------------------
// ✨ EFFET CLICK
// -------------------------
document.addEventListener("click", (e) => {
    const boom = document.createElement("span");
    boom.className = "click-effect";
    boom.style.top = e.pageY + "px";
    boom.style.left = e.pageX + "px";
    document.body.appendChild(boom);

    setTimeout(() => {
        boom.remove();
    }, 400);
});
