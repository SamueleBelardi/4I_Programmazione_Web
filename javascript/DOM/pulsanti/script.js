"use strcit";

function creaPagina() {
    for (let i = 0; i <= 39; i++) { 
        const nuovo = document.createElement("div");
        nuovo.addEventListener("click", elimina);
        nuovo.innerText = i;
        document.body.appendChild(nuovo)
    }    
}

function elimina(elemento) {
    const nuovo = elemento.target; 
    elemento.target.remove();
    document.body.appendChild(nuovo);
}

