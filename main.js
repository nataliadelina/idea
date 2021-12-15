let menu = document.getElementById("menu");
let menuIcon = document.getElementById("menu-icon");

menu.style.maxHeight = "0";

let toggleMenu = (e) => {
    console.log("hm")
    e.preventDefault();
    if (menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
// menuIcon.addEventListener("click", toggleMenu);


// add icon
const addIcon = document.getElementById("add-icon");
const addIconInfo = document.getElementById("add-icon-info");

addIcon.addEventListener("mouseover", () => {
    addIconInfo.style.visibility = "visible";
})

addIcon.addEventListener("mouseleave", () => {
    console.log("hover")
    addIconInfo.style.visibility = "hidden";
})
