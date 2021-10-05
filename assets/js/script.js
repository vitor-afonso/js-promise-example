/*jshint esversion:6 */

// Exemplo a simular uma promise
function getTemperature() {
    // Obrigatorio ao callback ter 2 funções, resolve e reject
    return new Promise(function(resolve, reject){
        console.log(`Getting temperature...`);

        setTimeout(function(){
            resolve(`40deg in the shadow.`);
        }, 2000);
    });
}


// MANIPULAÇÃO DE PROMISE

//variavel temp recebe a promise
let temp = getTemperature();

//console.log(temp);

//.then() para quando tudo corre como previsto. 
temp.then(function(result){
    console.log(`The temperature is ${result}`);
});

//.catch() para o caso de dar erro
temp.catch(function(error){
    console.log(`Ops! Something went wrong...`);
});



// Ver aula seguinte com manipulação de json e uso do fetch