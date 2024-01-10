function victory(partidas, derrotas){
    let vitorias = partidas - derrotas;
    let nivel;
    if(vitorias <= 10){
        nivel = "Ferro";
    }else if(vitorias <= 20){
        nivel = "Bronze";
    }else if(vitorias <= 50){
        nivel = "Prata";
    }else if(vitorias <= 80){
        nivel = "Ouro";
    }else if(vitorias <= 90){
        nivel = "Diamante";
    }else if(vitorias <= 100){
        nivel = "Lendário";
    }else if(vitorias > 100){
        nivel = "Imortal";
    }

    return nivel;
}

let result = victory(150, 40)
console.log(result)
