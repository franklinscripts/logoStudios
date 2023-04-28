const hamBtn = document.getElementById("hamBtn");
const closeBtn = document.getElementById("closeBtn");
const navBar  = document.getElementById("navBar");


hamBtn.addEventListener("click", () => {
    navBar.style.display = " block";
});

closeBtn.addEventListener("click", () => {
    navBar.style.display = " none";
});
