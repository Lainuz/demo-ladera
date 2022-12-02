
/* Obtenemos fecha y hora actual */
var currentTime = new Date;
var hora = currentTime.getHours();
let fondo = document.getElementById("cuerpo");

/* Cambia imagen-fondo según horario */
((hora < 6) || (hora > 19)) ? fondo.className = "cuerpo2" : console.log("Día");



let formulario = document.getElementById("formulario");
let agregar = document.getElementById("b_agregar");
let new_form = document.getElementById("nuevo_form");
let numero = 2

agregar.addEventListener("click", async (e) => {
    e.preventDefault();
    let div = document.createElement("div");
    div.setAttribute("class", "selectores");
    div.innerHTML = `<form>
                        <label>Habitacion ${numero} <i class="fa-solid fa-arrow-right-to-bracket"></i></label>
                        <label>Adultos:</label>
                        <select name="adultos">
                            <option value="1 Adulto">1</option>
                            <option value="2 Adultos">2</option>
                            <option value="3 Adultos">3</option>
                        </select>
                        <label>Niños</label>
                        <select name="ninios">
                            <option value="0 ninio">0</option>
                            <option value="1 ninio">1</option>
                            <option value="2 ninio">2</option>
                        </select>
                    </form>`;

    new_form.appendChild(div);

    numero = numero + 1
    console.log("pruebando")
});