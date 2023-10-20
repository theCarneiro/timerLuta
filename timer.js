//cria o botão PlayPause
const btnStart = document.getElementById('btnPP');
const btnStop = document.getElementById('btnStop');
const minutos= document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const mostrador = document.getElementById('mostrador');
const audio = new Audio('apiot.ogg')

btnStart.addEventListener('click',()=>{
    //transforma os min em seg, soma com os seg e salva isso em duracao
    let duracao = (parseInt(minutos.value)*60)+parseInt(segundos.value);

    //chama a função timer e passa mostrador e duração
    timer(mostrador,duracao)
    btnStart.disabled=true;
    minutos.disabled=true;
    segundos.disabled=true;
    btnStart.style.backgroundColor="#29612d";
    btnStart.style.color="#124216";
    btnStop.style.color="red";
})

//aqui a função timer recebendo mostrador e duração
const timer = (mostrador,duracao)=>{
    let timer = duracao;
    let min,seg;

//esse metodo recebe informações para fazer a cada x tempo em ms
    setInterval(()=>{
        min = Math.floor(timer/60);
        seg = Math.floor(timer%60);

        //se min for menor que 10 então(?) '0' + min. se não(:), mantém min
        min = min < 10 ? '0'+ min : min;
        seg = seg < 10 ? '0'+ seg : seg;

        mostrador.innerHTML = `${min}:${seg}`;

        timer-=1;

        if(timer<0){
            mostrador.innerHTML = 'TEMPO!';
            audio.play();
                if(timer<-3){
                    audio.pause();
                }
        }
    },1000);
}

btnStop.addEventListener('click',()=>{
    location.reload();
})
