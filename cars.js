function car(marca,modelo,annio){
    this.marca=marca;
    this.modelo=modelo;
    this.annio=annio;
}
var autos=[]

for (var i=0;i<30;i++){
    var marca=prompt("escribe la marca")
    var modelo=prompt("escribe el modelo")
    var annio=prompt("escribe el año")
autos.push(new car(marca,modelo,annio))

}

console.log(autos)