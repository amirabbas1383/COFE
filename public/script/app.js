const toggleThemeBtn = document.querySelectorAll(".toggle-theme");

toggleThemeBtn.forEach(btn => {
    btn.addEventListener("click",function() {
        if (localStorage.theme === "dark"){
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme" , "dark");
        }
    })
})

let sideLeft = document.querySelector('.side-list')
let darkBack = document.querySelector('.backgruond-dark')
let closesidelist = document.querySelector('.close-Side-list')
// let submenuList = document.querySelector('.submenu')
function OpenSide() {
    sideLeft.style.display = 'block'
    darkBack.style.display = 'block'
    sideLeft.classList.add('w-64')
}
closesidelist.addEventListener("click",function () {
    darkBack.style.display = 'none'
    sideLeft.style.display = 'none'
})
