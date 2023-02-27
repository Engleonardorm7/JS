var user="piedra";
var pc="tijeras";



function logic(user, pc){
    if (user===pc){
        console.log("empate");
    }else{

        if (user==="tijeras"&& pc==="piedra" || user==="papel"&& pc==="tijeras" || user==="piedra"&& pc==="papel"){
            console.log("PC gana");
            }else{
                console.log("Tu ganas");
            }
        }
    }

logic(user,pc)

