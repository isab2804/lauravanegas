let tareas = [];

function agregarTarea() {
    const tareaInput = document.getElementById("nueva-tarea");
    const tareaTexto = tareaInput.value.trim();
    const categoriaTarea = document.getElementById("categoria-tarea").value;

    if (tareaTexto === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    const nuevaTarea = {
        texto: tareaTexto,
        completada: false,
        categoria: categoriaTarea
    };

    tareas.push(nuevaTarea);

    tareaInput.value = "";

    mostrarTareas();
}

function mostrarTareas() {
    const listaTareas = document.getElementById("Lista-Tareas");
    listaTareas.innerHTML = ""; 
    const estadoFiltro = document.getElementById("estado-tarea").value;
    const categoriaFiltro = document.getElementById("categoria-filtro").value;

    const tareasFiltradas = tareas.filter(tarea => {
        const cumpleEstado = (estadoFiltro === "todas") ||
            (estadoFiltro === "completadas" && tarea.completada) ||
            (estadoFiltro === "pendientes" && !tarea.completada);

        const cumpleCategoria = (categoriaFiltro === "todas") || (tarea.categoria === categoriaFiltro);

        return cumpleEstado && cumpleCategoria;
    });

    tareasFiltradas.forEach((tarea, index) => {
        const tareaElemento = document.createElement("li");
        tareaElemento.classList.add(tarea.completada ? "completada" : "");

        tareaElemento.innerHTML = `
            ${tarea.texto} - ${tarea.categoria}
            <button class="eliminar" onclick="eliminarTarea(${index})">Eliminar</button>
        `;

        tareaElemento.addEventListener("click", () => {
            tarea.completada = !tarea.completada;
            mostrarTareas(); 
        });

        listaTareas.appendChild(tareaElemento);
    });
}

function eliminarTarea(indice) {
    tareas.splice(indice, 1); 
    mostrarTareas(); 
}

function filtrarTareas() {
    mostrarTareas();
}

mostrarTareas();

