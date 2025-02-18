// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const listaAmigos = document.getElementById("listaAmigos");

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    input.value = "";

    const li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 participantes para el sorteo.");
        return;
    }

    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; 

    const mezclados = [...amigos];
    mezclados.sort(() => Math.random() - 0.5);

    const sorteados = {};
    for (let i = 0; i < mezclados.length; i++) {
        const actual = mezclados[i];
        const siguiente = mezclados[(i + 1) % mezclados.length];
        sorteados[actual] = siguiente;
    }

    for (const [amigo, asignado] of Object.entries(sorteados)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${asignado}`;
        resultadoLista.appendChild(li);
    }
}