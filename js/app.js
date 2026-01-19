// Toggle mobile menu on button click
document.getElementById("menu-btn").addEventListener("click", function () {
    let menu = document.getElementById("mobile-menu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});
