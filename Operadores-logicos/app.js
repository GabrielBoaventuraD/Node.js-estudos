const readline = require ('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log('Esse programa vai checar se voce e maior de 18 anos e tem habilitacao para saber se voce pode entrar no kart');
console.log('Alem de suas verificacoes, precisamos verificar se voce esta na lista de presenca do horario');

readline.question('Qual o ano do seu nascimento?', ano =>{
    if(ano > 2004){
        console.log('Voce nao tem 18 anos');
    }else{
        readline.question('Voce tem habilitacao? (Sim/Nao)', temHabilitacao => {
            if(temHabilitacao.toUpperCase() !== "SIM"){
                console.log('Voce nao tem habilitacao para entrar no kart');
            }else{
                readline.question('Qual seu nome?', nome =>{
                    switch(nome){
                        case 'Douglas' : 
                            console.log('Bem vindo ao Kart, Douglas');
                            break
                            case 'Gabriel' : 
                            console.log('Bem vindo ao Kart, Gabriel');
                            break
                            default:
                                console.log('Seu nome nao foi identificado na lista de presença');
                    }
                })
            }
        })
    }
})