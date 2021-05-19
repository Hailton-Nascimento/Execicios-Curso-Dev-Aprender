//Troca do valor das variaveis
function trocaVariaveis() {
    let a = 'vermelho';
    let b = "azul";

    console.log(a, b);
    let temp = a;
    a = b;
    b = temp;

    console.log(a, b);

}

//trocaVariaveis();

var a = 16;
var b = 16;

//maiorValor(a,b);


function maiorValor(a, b) {

    if (a == b) {
        console.log("Os valores são igual!")
    } else if (a > b) {
        console.log(a)
    } else {
        console.log(b)
    }

}


// const resultado = fizzBuzz(undefined);
// console.log(resultado);

function fizzBuzz(entrada) {
    if ("number" == typeof entrada) {
        if (entrada % 5 == 0 && entrada % 3 == 0) {
            return "fizzBuzz";
        }
        if (entrada % 5 == 0 || entrada % 3 == 0) {
            if (entrada % 3 == 0) {
                return "fizz";
            }
            if (entrada % 5 == 0) {
                return "Buzz";
            }
        }
        if (!entrada % 5 == 0 && !entrada % 3 == 0) {
            return "Não é divisivel por 3 ou por 5,"
        }
    } else return `Não é um número, é um(a): ${typeof entrada}`
}

// medidorVelocidade(129);

function medidorVelocidade(velocidade) {
    var velocidadeMax = 70;
    var qtdPontosMax = 12;
    var kmPorPOntos = 5;
    if (velocidade <= velocidadeMax) {
        console.log("Velocidade OK, Boa viagem!");
    } else {
        let pontos = parseInt((velocidade - velocidadeMax) / kmPorPOntos);

        if (pontos > qtdPontosMax) {
            console.log("Adora fudeu, vc correu muito, sua caretira esta suspensa.");
        }
        else {
            console.log(`Você esta acima da velocidade, foi multado e perdera ${pontos} pontos.`);
        }
    }
}

//exibirTipo(19);

function exibirTipo(entrada) {
    for (let index = 0; index <= entrada; index++) {
        var resultado;
        index % 2 == 0 ? resultado = `${index} "PAR"` : resultado = `${index} "IMPAR"`;
        console.log(resultado);
    }
}


// const carro = {
//     marca: "HB20S",
//     ano: 2020,
//     modele: "evolution",
//     fabricante: "Hyundai"
// }
// exibirPropriedades(carro, "number");
function exibirPropriedades(obj, tipo) {

    for (prop in obj) {
        if (typeof obj[prop] == tipo) {
            console.log(prop, obj[prop]);
        }
    }


}

//for- in
// const carro = {
//     marca: "HB20S",
//     ano: 2020,
//     modele: "evolution",
//     fabricante: "Hyundai"
// }

// for( propriedades in carro){
//     console.log(carro[propriedades]);
// }

// const estados = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];

// for (estado in estados){
//     console.log(estados[estado]);
// }

// // for of
// for ( estado of estados){
//     console.log(estado)
// }

//Saldação
// var hora =  new Date().getHours();
// console.log(hora);
// console.log(saldacao(hora));

function saldacao(hora) {
    if (hora <= 12) {
        return ("bom dia!");
    } else if (hora <= 18) {
        return ("Boa tarde!");
    } else if (hora <= 20) {
        return ("Boa noite!");
    } else
        return ("hora de dormir");
}
// somar Multiplos 3 e de 5
//console.log(somarMultiplos(15));

function somarMultiplos(entrada) {
    var multiplos = [];
    var resultado = 0;
    for (let index = 0; index <= entrada; index++) {
        if (index % 3 == 0) {
            resultado += index;
            multiplos.push(index);
        }
        if (index % 5 == 0) {
            resultado += index;
            multiplos.push(index);
        }

    }

    return resultado;

}

const notas = [70, 30, 90, 80];

// console.log(verificarSituacaoAluno(notas));

function verificarSituacaoAluno(notas) {
    var media = mediaAluno(notas);
    var conceito = classificarMedia(media);
    var status = statusAluno(media);

    return `${status} conceito: ${conceito}`

}
function mediaAluno(notas) {
    var soma=0;
    for (nota of notas) {
        soma += nota;
    }
    return (soma / notas.length);
}
function classificarMedia(media) {
    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A';
}
function statusAluno(media) {
    if (media < 69) {
        return `Lamento você foi REPROVADO, sua nota foi: ${media}`
    } else return `Parabéns você foi APROVADO, sua nota foi: ${media}`
}


//desenharCubo(15);


function desenharCubo(tamanho){
    for (let index = 0; index < tamanho; index++) {
        linha = ''
        for (let indexLinha = 0; indexLinha < tamanho; indexLinha++) {
            linha+= "#";
        }
        console.log(linha);
    }
}
//exibirAsteriscos(15);
function exibirAsteriscos(qtd){
   
    for (let index = 0; index < qtd; index++) {
        padrao = '';
        for(let indexLinha = 0; indexLinha < index; indexLinha++) {
            padrao+="*";

        }
        console.log(padrao);
        
    }
    padrao = '';
    for (let index = 0; index < qtd; index++) {
        padrao += '$';
        console.log(padrao);
    }
    
}
//exibirNumerosPrimos(10);
function  exibirNumerosPrimos(entrada){
    var primos = [];
    for(let i = 2; i<= entrada;i++){  
        if(isPrimo(i)){
            console.log(i);
            primos.push(i);
        }
    }
}
 function isPrimo(numero){
    for(let j = 2; j < numero; j++){
        if(numero%j===0)return false;    
     }
     return true;
}

let endereco = {
    Rua:"Rodovia raposo tavares",
    Bairro: "Butantã",
    Cidade: "São Paulo",
    Estado: "SP",
    Cep:"05577-100"
}


// let endereco = {
//     Rua:"Rodovia raposo tavares",
//     Bairro: "Butantã",
//     Cidade: "São Paulo",
//     Estado: "SP",
//     Cep:"05577-100"
// }


function exibirEndereço(endereco){
    for ( propriedade in endereco){
        console.log(`${propriedade}: ${endereco[propriedade]}`);
    }
}


//exibirEndereço(endereco);


function Endereço( Rua, Bairro, Cidade, Estado, Cep){
    this.Rua = Rua,
    this.Bairro = Bairro,
    this.Cidade = Cidade,
    this.Estado = Estado,
    this.Cep = Cep
}

var endereco1 = new Endereço(
    "Rodovia raposo tavares",
    "Butantã",
   "São Paulo",
    "SP",
    "05577-100"
)
var endereco2 = new Endereço(
    "Rodovia raposo tavares",
    "Butantã",
    "São Paulo",
    "SP",
    "05577-100"
)
//console.log(saoIguais(endereco1,endereco2));

function saoIguais(endereco1, endereco2){
    var isIguais = true;
    for(propriedade in endereco1, endereco2){
        if(endereco1[propriedade]!==endereco2[propriedade]) return isIguais=false;
    }
    return isIguais;
}
//console.log(temEnderecoMemoriaIgiais(endereco1,endereco2));
function temEnderecoMemoriaIgiais(endereco1,endereco2){
    return endereco1==endereco2;
}



let postagem = {
    titulo:"leite",
    mensagem: "Não tomei leite hoje ainda",
    autor: "Jose Ferreira",
    visualizacoes: 10,
    comentarios:[
        {autor:"luiz",mensagem:"O Leite ta caro"},
        {autor:"Pedro",mensagem:"Toma cafe ao inves de leite"}
    ],
    estaAoVivo: true
}

//exibirPostagem(postagem);

function exibirPostagem(postagem){
    for(chave in postagem){
    
        if(chave==="comentarios"){
            for(atributo of postagem[chave]){
                
                for(atributoPost in atributo){
                console.log( `${atributoPost} : ${atributo[atributoPost]}`);
                }
            }
            break;
        }
        console.log(`${chave}: ${postagem[chave]}`)

    }
}


function Postagem(titulo,mensagem,autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios =[],
    this.estaAoVivo = false
}

let postagem1 = new Postagem("Cotidiano","Foi dificil acordar hoje","Hailton Nascimento")

//exibirPostagem(postagem1);

postagem1.comentarios.push({autor:"jose",mensagem:"putz!! nem me fale, ainda estou tentando levantar da cama"});

//exibirPostagem(postagem1);


// faixa de preços


//primeria opções
 function Faixas (valor){
     this.maximo = (valor+100),
     this.minimo = (valor-100),
     this.dica = `de ${this.minimo} até ${this.maximo}`
 }


 let faixas=[];
    faixas.push(new Faixas (500));
    faixas.push(new Faixas (700));
    faixas.push(new Faixas (900));

//console.log(faixas);



// const alunos = ["hailton","lucas","Thiago","Lisberto"];

// console.log(alunos.indexOf("hailtom"));

// console.log(alunos.includes("lucas"));




// var ages1= ages;

// ages.forEach(element => {
//    element+=1; 
//    console.log(element);
// });
// console.log(ages)

// for (let index = 0; index < ages.length; index++) {
//     ages[index]=ages[index]+1;
    
// }
// for( idade of ages){
//     idade+=idade+1;
// }
//ages1 = ages.map(value=>value+1);


// for(idade of ages1){
//     idade+=1;
//     console.log(idade);
// }
// console.log(ages)

// const impares = ages.filter(valor => valor%2==1);
// console.log(impares);
// const pares = ages.filter(valor=>valor%2==0);
// console.log(pares);

// ages = ages.map(valor =>valor%2==1?valor+1:valor);

// ages = ages.map(valor =>{
//     if(valor%2==1){
//         return valor+1;
//     }
//     return valor;

// })

// ages = ages.filter(valor => valor<20)


//retorna um vetor com o valores menor que 17 e incrementa em 1;

// const menores = ages
//     .filter(valor=> valor<17)
//     .map(valor=> valor+1);
// console.log(menores);

//  let soma = ages
//     .filter(valor => valor <20)
//     .reduce((soma,next)=> soma+=next)


// poderia determinar um valor incial pra contagem

// let soma1 = ages
// .filter(valor => valor <20)
// .reduce((soma,next)=> { return soma+=next},2000);

    // console.log(soma1);

// incrementar em 1 o purchaseday de tdoso objetos

var clientes = [
    {nome:"Hailton",birth:1986, genre:'M', purchaseDaysAgo:16,},
    {nome:"lucas",birth:1940, genre:'M', purchaseDaysAgo:5,},
    {nome:"thiago",birth:2002, genre:'M', purchaseDaysAgo:9,},
    {nome:"lisberto",birth:1982, genre:'M', purchaseDaysAgo:24,},
    {nome:"renata",birth:1960, genre:'F', purchaseDaysAgo:13,}

];



// incrementar em 1 o purchaseday de tdoso objetos

// let newClietes = clientes.map(v=>({...v}));

// newClietes = newClietes.map(valor =>{
//     valor.purchaseDaysAgo+=1;
//     return valor;
// })
// console.log(clientes);
// console.log(newClietes);

//console.log(clientes.filter(cliente => cliente.birth===1986));



// let  ages = [15,16,19,20,23,45,69,80,50,78];

// ages.splice(ages.indexOf(69),1);

// console.log(ages);


const primeiro = [1,2,3,4];
const segundo = [5,6,7,8];
const combinado = primeiro.concat(segundo);


console.log(primeiro);
console.log(segundo);
console.log(combinado);


combinado.splice()

fdgsdf gsdf