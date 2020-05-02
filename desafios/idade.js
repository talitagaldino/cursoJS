const idade = prompt('idade: ');

var checaIdade = function () {
    return new Promise(function(resolve, reject){
        setTimeout( () => idade >= 18 ? resolve() : reject(), 2000)
    })
}

checaIdade(idade)
 .then(function() {
 console.log("Maior que 18");
 })
 .catch(function() {
 console.log("Menor que 18");
 });