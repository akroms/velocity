let toggler = document.querySelector("#toggler");
let navList = document.querySelector("#nav-list");

toggler.addEventListener("click", () => {
    if (navList.classList.contains("hidden")) {
        navList.classList.remove("hidden");
    } else {
        navList.classList.add("hidden");
    }
});