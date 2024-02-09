/*
    1° Quando passar o mouse no pokemon da listagem teremos que esconder o cartão aberto e mostrar o cartão correspondente ao que foi selecionado.
*/

const listaSelecaoPokemons = document.querySelectorAll(".pokemon");
const pokemonsCard = document.querySelectorAll(".cartao-pokemon");

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', ()=>{
        const cartaoPokemonParaAberto = document.querySelector('.aberto')
        cartaoPokemonParaAberto.classList.remove('aberto')
        
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado;

        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir);

        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })

})

