
function bloquear_scroll(){

    let body = document.getElementById("body")

    body.classList.add("no_scroll")
}

function activar_scroll(){

    let body = document.getElementById("body")

    body.classList.remove("no_scroll")
}