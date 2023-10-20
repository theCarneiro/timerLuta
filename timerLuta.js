//contador inicial
let contador = 0;

// seleciona o valor inicial pelo id #
const valor = document.querySelector("#valor");


//seleciona os botões pelo classe .btn
const btns = document.querySelectorAll(".btn");
console.log(btns);

// Tempo de Luta
btns.forEach(function(btn){
    //console.log(btn)
    btn.addEventListener('click',function(evento){
        const classe = evento.currentTarget.classList;
        if(classe.contains('Dim')){
            contador--;
                if (contador<=0){
                    contador=0;
                }
        }
        else if (classe.contains('Aum')) {
            contador++;
        } 
        else if (classe.contains('Zer')) {
            contador=0;
        }else{
            contador=0
        }
        
        valor.textContent=contador;
    });
});
//-----------------------------------------
