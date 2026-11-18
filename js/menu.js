const menuButton = document.querySelector(".nav-toggle");
const menu = document.querySelector("#site-nav");
const mobileHeader = matchMedia("(max-width: 768px)");

function menuIsOpen() {
    return menuButton.getAttribute("aria-expanded") === "true";
}

function setMenuOpen(isOpen) {
    menuButton.setAttribute("aria-expanded", String(isOpen));
}

menuButton.hidden = false;
menuButton.addEventListener("click", () => setMenuOpen(!menuIsOpen()));

menu.addEventListener("click", (event) => {
    if (menuIsOpen() && event.target.closest("a")) {
        setMenuOpen(false);
        menuButton.focus();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuIsOpen()) {
        setMenuOpen(false);
        menuButton.focus();
    }
});

mobileHeader.addEventListener("change", () => {
    if (!mobileHeader.matches) {
        setMenuOpen(false);
    }
});
