axios.get('https://api.github.com/users/talitagaldino')
    .then(function(response){
        console.log(response);

    })
    .catch(function(error){
        console.warn(error)
});

//axios: encapsulamento do xmlhttprequest, ajuda a retornar os valores mais facilmente
//ja entende que a resposta é um JSON e ja retorna um js