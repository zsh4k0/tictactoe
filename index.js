const items = document.querySelectorAll('.item');
const V = "Victoria", E = "Empate", O = "🐱", X = "🐭";
let jugador = O;
let resultado = "";
id = (x) => { return document.getElementById(x); }
id("reset").addEventListener("click", function () { location.reload(); });
const result = () => { return id("resultado").innerHTML = resultado; }
const turno = () => jugador = (jugador == O) ? X : O;
const color = (x) => { document.getElementsByTagName("body")[0].style.backgroundColor = x; }
const accion = (item) => {
    if (resultado === V) { return; }//Salir
    if (item.textContent === "") { item.textContent = turno(); }
    const tablero = Array.from(items).map((item) => item.textContent);
    const v = (a, b, c) => {
        if (tablero[a] === "") { return false; }
        return tablero[a] === tablero[b] && tablero[b] === tablero[c];
    }
    const a = v(0, 1, 2), b = v(3, 4, 5), c = v(6, 7, 8), d = v(0, 3, 6);
    const e = v(1, 4, 7), f = v(2, 5, 8), g = v(0, 4, 8), h = v(2, 4, 6);
    if (a || b || c || d || e || f || g || h) { resultado = V; color("green"); result(); }
    if (tablero.every((item) => item !== "") && resultado !== V) { resultado = E; color("red"); result(); }
}
const evento = (item) => { item.addEventListener('click', () => { accion(item) }); }
items.forEach((item) => { evento(item); });