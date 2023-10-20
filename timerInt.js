// Tempo de Intervalo
let contador2 = 0;


const valor2 = document.querySelector("#valor2");


//seleciona os botões pelo classe .btn
const btms = document.querySelectorAll(".btm");
console.log(btms);


btms.forEach(function(btm){
    //console.log(btn)
    btm.addEventListener('click',function(event){
        const classee = event.currentTarget.classList;
        if(classee.contains('Dec')){
            contador2--;
                if (contador2<=0){
                    contador2=0;
                }
        }
        else if (classee.contains('Inc')) {
            contador2++;
        } 
        else if (classee.contains('Res')) {
            contador2=0;
        }else{
            contador2=0
        }
        

        // if(contador2>10){
          
        // }else if(contador2<=10 && contador2>=6){
        //     valor2.style.color="yellow"
        // }else if(contador2<=5 && contador2>0){
        //     valor2.style.color="red"
        // }else if (contador2=0){
        //     valor2.style.color= "green";
        // }else{
        //     valor2.style.color= "green";
        // }
        
        valor2.textContent=contador2;
    });
});
//-----------------------------------------