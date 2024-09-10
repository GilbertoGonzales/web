function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === "grid") {
        section.style.display = "none";
    } else {
        section.style.display = "grid";
    }
}

function togglePhoto(button) {
    var img = button.nextElementSibling;
    if (img.style.display === "block") {
        img.style.display = "none";
        button.textContent = "Mostrar Foto";
    } else {
        img.style.display = "block";
        button.textContent = "Ocultar Foto";
    }
}
