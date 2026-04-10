const navbarRef = document.getElementById("navBar");
const openButton = document.getElementById("btnOpenSidebar");
const media = window.matchMedia("(width < 1020px)");

media.addEventListener("change", (e) => updateNavbar(e));

function openSidebar() {
    navbarRef.classList.add("show");
    navbarRef.removeAttribute("inert");
    openButton.setAttribute("aria-expanded", "true");

}

function closeSidebar() {
    navbarRef.classList.remove("show");
    navbarRef.setAttribute("inert", "");
    openButton.setAttribute("aria-expanded", "false");
}

function updateNavbar(e) {
    const isMobile = e.matches;

    if(isMobile) {
        navbarRef.setAttribute("inert", "");
    }
    else {
        navbarRef.removeAttribute("inert");
    }
}

updateNavbar(media)