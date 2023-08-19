const calculobtn = document.getElementById("calculobtn");
const valorpago = document.getElementById("valorpago");
const btnborrar = document.getElementById("btnborrar");
const tipPorcentage = document.getElementById("tipPorcentage");
const resultado = document.getElementById("resultado");
const totalmonto = document.getElementById("totalmonto");


btnborrar.addEventListener('click', _ => {
    location.reload();
});


calculobtn.addEventListener("click", () => {
    const monto = parseFloat(valorpago.value);
    const propina = parseFloat(tipPorcentage.value);

   

        if (
            !isNaN(monto) && !isNaN(propina)) {
            const tipmonto = monto * (propina / 100);
            const total = monto + tipmonto;
            totalmonto.textContent = `$${total.toFixed(2)}`;
            resultado.classList.remove("hidden");
        }
    });



