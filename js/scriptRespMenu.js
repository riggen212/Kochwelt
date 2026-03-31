function openSidebar() {
    const navbarRef = document.getElementById("navBar");

    navbarRef.classList.add("show");
    console.log("Sidebar opened");
}

function closeSidebar() {
    const navbarRef = document.getElementById("navBar");
    navbarRef.classList.remove("show");
    console.log("Sidebar closed");
}