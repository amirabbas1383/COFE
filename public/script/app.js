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


function myFunction() {
    var element = document.getElementById("submenu");
    element.classList.toggle("submenu--open");
    console.log("salam")
 }



// toggleThemeBtn.addEventListener("click" , () => {
//     if (localStorage.theme === "dark"){
//         document.documentElement.classList.remove("dark");
//         localStorage.theme = "light";
//     } else {
//         document.documentElement.classList.add("dark");
//         localStorage.setItem("theme" , "dark");
//     }
// })