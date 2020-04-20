var arreglo = [43,14,5,6,7,9];

function menor(params) {  
    miMenor = params[0];
    arreglo.map((val)=>{
        if (val < miMenor) {
            miMenor=val;
        }
    })
    console.log(miMenor);
}

menor(arreglo);