document.addEventListener("DOMContentLoaded", () => {
    const homeScreen = document.getElementById("home-screen")
    const content = document.getElementById("content");

    function viewContent() {

        homeScreen.style.opacity = "0";

        setTimeout(() => {
            homeScreen.style.display = "none";
        }, 800);

        content.classList.remove("hidden");
        content.classList.add("show");

        window.removeEventListener("click", viewContent);
    }

        window.addEventListener("click", viewContent);
});