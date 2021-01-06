const start = document.getElementById("start")
const reset = document.getElementById("reset")

let m =document.getElementById("minute")
let s =document.getElementById("second")

start.addEventListener("click",function(){
    function startInterval(){
        startTimer = setInterval(time,1000);
    }
    startInterval();
})

pause.addEventListener("click",function(){
    stopInterval()
})

reset.addEventListener("click",function(){
    m.value = 0;
    s.value = 0; 
    stopInterval();
})


function time(){
    if(m.value==0 && s.value==0){
        m.value = 0;
        s.value = 0;
        
    } else if(m.value != 0 && s.value == 0){
        m.value--;
        m.value= m.value< 10 ? '0'+m.value: m.value
        s.value = 59;
    }
    else if(s != 0){
        s.value--;
        s.value= s.value< 10 ? '0'+s.value: s.value
    }
}

function stopInterval(){
    clearInterval(startTimer);
}