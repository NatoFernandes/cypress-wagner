//Funções

it('nada agora', function () { })

//Correto
// function soma(a, b) {
//     return a + b;
// }

//Correto
// const soma = function (a, b) {
//     return a + b;
// }

//Correto
// const soma = (a, b) => a + b

//Errado
// const soma = (a, b) => {
//     a + b
// }

//const soma = (a) => a + a 
//Como existe apenas um parâmetro não precisa colocar entre ()
// const soma = a => a + a 


//Caso não existir parâmetro é necessário os ()
//const soma = () => 5 + 5 
//console.log(soma(1, 4))

//This é a referencia para o escopo em que ela está sendo executada
it ('a function test...', function(){
    console.log('Function',this)
})

it ('an arrow test...', () =>{
    console.log('Function',this)
})