function ligarLampada() {
    const img_lampada = document.getElementById("lampada");
    img_lampada.src = "lampada-acesa.png";
    document.getElementById("estado-lampada").textContent = "Lâmpada acesa!";
}

function desligarLampada() {
    const img_lampada = document.getElementById("lampada");
    img_lampada.src = "lampada-apagada.png";
    document.getElementById("estado-lampada").textContent = "Lâmpada apagada!";
}