var user="piedra";
var pc="tijeras";


switch(user){
    case "piedra":
        switch(pc){
            case "piedra":
                console.log("Empate");
                break;
            case "papel":
                console.log("Pierdes");
                break;
            case "tijeras":
                console.log("Ganas");
                break;
        }
        break;
    case "papel":
        switch(pc){
            case "piedra":
                console.log("Ganas");
                break;
            case "papel":
                console.log("Empate");
                break;
            case "tijeras":
                console.log("Pierdes");
                break;
        }
        break;
    case "tijeras":
        switch(pc){
            case "piedra":
                console.log("Pierdes");
                break;
            case "papel":
                console.log("Ganas");
                break;
            case "tijeras":
                console.log("Empate");
                break;
        }
        break;

}

