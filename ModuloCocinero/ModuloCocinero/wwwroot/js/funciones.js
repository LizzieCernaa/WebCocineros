function cambiarEstado() {
    var boton = document.getElementById("estado-btn");
    if (boton.innerHTML === "En proceso") {
        boton.innerHTML = "Finalizado";
        boton.classList.add("finalizado");
    } else {
        boton.innerHTML = "En proceso";
        boton.classList.remove("finalizado");
    }
}
