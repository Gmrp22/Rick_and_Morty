var arreglo = [19,12,10,100,340,40,600,20,98,133]
var len = arreglo.length
var mayor = arreglo[0]

for(var x=0; x<len;x++){
    for(var y=x; y<len;y++){
        if(mayor < arreglo[y]){
            mayor = arreglo[y]
            
        }
        
    }
}
console.log(mayor)