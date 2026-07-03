document.getElementById("year").textContent = new Date().getFullYear();

const boton = document.querySelector(".hamburguesa");
const menu = document.querySelector("nav ul");

boton.addEventListener("click", function () {
    menu.classList.toggle("activo");
});
