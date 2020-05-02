var listaDeRepositorios = document.querySelector('ul');
var input = document.querySelector('input');

function renderizaRepositorios(repositorios){
    listaDeRepositorios.innerHTML = "";
    for (repositorio of repositorios){
        const pegaConteudo = document.createTextNode(repositorio.name);
        const elementoDaLista = document.createElement('li');

        elementoDaLista.appendChild(pegaConteudo);
        listaDeRepositorios.appendChild(elementoDaLista);
    }

}

function rendCarregando(){
    listaDeRepositorios.innerHTML = "";

    var mensagem = document.createTextNode('Carregando Repositorios');
    var elementoCarregando = document.createElement('li');

    elementoCarregando.appendChild(mensagem);
    listaDeRepositorios.appendChild(elementoCarregando);
}

function rendeErro(){
    listaDeRepositorios.innerHTML = "";

    var mensagem = document.createTextNode('Usuário não existe!');
    var erro = document.createElement('li');

    erro.style.color = "#F00";

    erro.appendChild(mensagem);
    listaDeRepositorios.appendChild(erro);
}

function pegaListaDeRepositorios(){
    var usuario = input.value;

    rendCarregando();

    axios.get('https://api.github.com/users/' + usuario + '/repos')
    .then(function(response){
        renderizaRepositorios(response.data);
    }).catch(function(){
        rendeErro();
    })
}