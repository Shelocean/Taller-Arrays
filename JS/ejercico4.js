let lista_Estudiantes=[
    { item_nombre: "Ana Torres", item_edad: 14, item_curso: "9A" },
    { item_nombre: "Mateo Ruiz", item_edad: 15, item_curso: "10B" },
    { item_nombre: "Lucía Gómez", item_edad: 13, item_curso: "8A" },
    { item_nombre: "Samuel Díaz", item_edad: 16, item_curso: "11A" },
    { item_nombre: "Valentina Cruz", item_edad: 14, item_curso: "9B" }
];

function buscarEstudiante() {

    let Busqueda = document.getElementById("nombre-e").value.trim().toLowerCase();
    let Resultado = document.getElementById("mensajeBusqueda");


    if (Busqueda === "") {
        Resultado.innerHTML = "";
        alert("Por favor, llena el campo para buscar al estudiante.");
        return;
    }

    let encontrado = lista_Estudiantes.find(est => est.item_nombre.toLowerCase() === Busqueda);
    
    if (encontrado) {
        Resultado.innerHTML = 
        `<p>
            <strong>Estudiante:</strong> ${encontrado.item_nombre}
            <br>
            <strong>Edad:</strong> ${encontrado.item_edad} 
            <br>
            <strong>Curso:</strong> ${encontrado.item_curso}
        </p>`;
        return;
    } else { Resultado.innerHTML = "Estudiante no encontrado. <br><strong>-Revise la escritura del nombre </strong> <br> <strong>-Vuelva a escribir el nombre </strong> <br> <strong>-Registre el estudiante </strong>"
        alert("El estudiante no fue encontrado");}  
        
}