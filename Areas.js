function areacirculo (pi, raio) {
    
    let areabolinha = pi * raio **2
    return areabolinha
    

}

const retangulo = function (base, altura){
    return base + altura 
}

function triangulo(base, altura) {
    return base * altura / 2
}





module.exports  = {
    areacirculo,
    triangulo,
    retangulo
}