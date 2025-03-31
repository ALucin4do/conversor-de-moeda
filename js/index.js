function cambio(){
    const valorEmWon = document.getElementById("won").value;
    const won = 0.004;
    return (valorEmWon * won).toFixed(2);
}


document.getElementById("btn-converter").addEventListener("click", () => {
    const conversor = document.getElementById("conversor");
    const convertido = document.getElementById("convertido");
    
    conversor.style.display = "none";
    convertido.style.display = "flex";
        
    
    const real = document.getElementById("real");
    const valorConvertido = parseFloat(cambio()).toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    /* formatar o valor convertido pra ficar parecendo que é dinheiro em reais */


    
    
    real.textContent = `R$ ${valorConvertido}`;
})

