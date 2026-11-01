//Exercício 1: 
console.log("Meu primeiro script foi executado!");

// Exercício 2:
console.log("Painel de Estudos.");
console.log(2 + 3);
console.log("Atividade realizada com sucesso!");

// Exercício 3: variáveis com const e let
const nomeAluno = "Antonella";
const curso = "Desenvolvimento Web";
let quantidadeTarefas = 12;

console.log(nomeAluno);
console.log(curso);
console.log(quantidadeTarefas);

quantidadeTarefas = 8; 
console.log(quantidadeTarefas);

// Exercício 4:
var disciplinaAntiga = "Portugol";
console.log(disciplinaAntiga);

// Exercício 5:
const disciplina = "Programação Web"; // string
const horasEstudadas = 5;             // number
const estudouHoje = true;             // boolean
const proximaProva = null;            // null

console.log(disciplina);
console.log(horasEstudadas);
console.log(estudouHoje);
console.log(proximaProva);

// Exercício 6:
const horasSexta = 4;
const horasSabado = 5;
const metaSemanal = 12;

const totalHoras = horasSexta + horasSabado;        // soma
const horasRestantes = metaSemanal - totalHoras;    // subtração
const horasDia = 3;
const diasEstudo = 5;
const metaCalculo = horasDia * diasEstudo;          // multiplicação
const mediaHoras = totalHoras / 2;                  // divisão
const metaAtingida = totalHoras >= metaSemanal;     // comparação

console.log(totalHoras);
console.log(horasRestantes);
console.log(metaCalculo);
console.log(mediaHoras);
console.log(metaAtingida);

// Exercício 7:
const mensagem = `O aluno ${nomeAluno} está no curso de ${curso} e possui ${quantidadeTarefas} tarefas, estudou ${totalHoras} horas.`;
console.log(mensagem);

// Exercício 8: Se atingiu a meta semanal
if (totalHoras >= metaSemanal) {
  console.log("Meta semanal atingida!");
} else {
  console.log("A meta semanal não foi atingida, estude mais!!");
}

// Exercício 10: Tarefas concluídas
const tarefasConcluidas = 6;
let tarefasTotais = 8;

const tarefasRestantes = tarefasTotais - tarefasConcluidas;
const percentual = (tarefasConcluidas / tarefasTotais) * 100;

console.log(`Você concluiu ${tarefasConcluidas} de ${tarefasTotais} tarefas, sendo ${percentual}%. Faltam ${tarefasRestantes}!`);

if (percentual >= 70) {
  console.log("Bom ritmo de estudos! Continue.");
} else {
  console.log("Acelere as tarefas! Vambora!");
}