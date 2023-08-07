console.log('Olá, Javascript!')

var userName = 'Patrick Strogueia'

document.getElementById('user-name').innerHTML = userName

// var nome = 'Mestre Yoda'
// var idade = 100
// var jedi = true

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof jedi)

// Operadores matemáticos //

// var n1 = 7
// var n2 = 2.5

// console.log(typeof n1)
// console.log(typeof n2)

// + para somar
// - para subtrair
// * para multiplicar
// / para dividir

// var total = n1 / n2
// console.log(total)

// Operadores de comparação //

// var v1 = 5
// var v2 = '5'

// var resultado = v1 !== v2
// console.log(resultado)

// Funções //

// function soma(n1, n2) {
//     console.log(n1 + n2)
// }

// soma(5, 100)

// function boasVindas(nome) {
//     alert(nome + ', seja bem-vindo')
// }

// boasVindas('Patrick')

// function soma(n1, n2) {
//     return n1 + n2
// }

// var resultado = soma(5,5)
// console.log(resultado)

// var saldo = 1000

// function saque(valor) {
//     if (valor > saldo) {
//         console.log('Valor do saque superior ao saldo')
//     } else if (valor > 700) {
//         console.log('Valor do saque é superior ao máximo permitido por operação')
//     } else {
//         saldo = saldo - valor
//     }
// }

// saque(701)
// console.log(saldo)

// Arrays

// var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']

// console.log(gaveteiro[1])

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

// personagens.push('C3pO')
// personagens.push('R2D2')

// // personagens.pop()

// personagens = personagens.filter(function(p) {
//     return p !== 'Darth Vader'
// })

// personagens = personagens.filter(function(p) {
//     return p === 'Mestre Yoda'
// })

// console.log(personagens)

// Controles de repetição (Loops) //

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader', 'R2D2']

// personagens.forEach(function(p){
//     console.log(p)
// })

// for (var i in personagens) {
//     console.log(personagens[i])
// }

// for (var i = 0; i <= 10; i++) {
//     console.log(i)
//     // código vai ser executado até a condição retornar false
// }

// Objetos //

// var yoda = {
//     nome: 'Mestre Yoda',
//     idade: 100,
//     jedi: true,
//     mostraIdade: function() {
//         console.log(`A idade do ${this.nome} é ${this.idade} anos.`)
//     }
// }

// yoda.nome = 'Mestre Yoda'
// yoda.idade = 100
// yoda.jedi = true
// yoda.outro_campo = 'qualquer coisa'

// console.log(yoda)
// yoda.mostraIdade()

// Constante //

// const nome = 'Darth Vader'
// console.log(nome)

// nome = 'Mestre Yoda'
// console.log(nome)