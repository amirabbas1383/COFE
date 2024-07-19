const toggleThemeBtn = document.querySelectorAll(".toggle-theme");
let sideLeft = document.querySelector('.side-list')
let darkBack = document.querySelector('.backgruond-dark')
let closesidelist = document.querySelector('.close-Side-list')
let btnOpenSideShop = document.querySelector('.open-side-shop')
let SideShop = document.querySelector('.SideShop')
let btnCloseSideShop = document.querySelector('.close-Side-shop')

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


//open & close sidebar menu mobile
function OpenSide() {
    sideLeft.style.display = 'block'
    darkBack.style.display = 'block'
    sideLeft.classList.add('w-64')
}
closesidelist.addEventListener("click",function () {
    darkBack.style.display = 'none'
    sideLeft.style.display = 'none'

})

//open & close sidebar shoping mobile
btnOpenSideShop.addEventListener("click",function () {
    SideShop.style.display = 'flex'
    darkBack.style.display = 'block'
})
btnCloseSideShop.addEventListener("click",function () {
      SideShop.style.display = 'none'
    darkBack.style.display = 'none'
})