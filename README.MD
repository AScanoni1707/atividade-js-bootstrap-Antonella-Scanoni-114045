# Painel de Estudos

**Aluna:** Antonella Scanoni

**Tema:** painel para acompanhar tarefas, horas de estudo e a meta semanal.

## Interface
A tela tem uma navbar com o nome do projeto e uma saudação, uma seção inicial com título, descrição e botão, um alert com a meta da semana, um menu lateral com botões e três cards de conteúdo (tarefas, horas estudadas e disciplina em foco). Cada card tem um badge de status e uma barra de progresso. No final tem um footer. O layout é responsivo: em telas grandes o menu fica ao lado dos cards, e no celular tudo empilha.

## Componentes Bootstrap utilizados
container, row, col, navbar, card, button, badge, alert, progress e footer. Também usei classes utilitárias de cor, espaçamento e texto (bg-*, text-*, text-bg-*, mt-*, mb-*, p-*, w-*, fw-bold, h-100).

## let, const e var
- `const`: guarda valores que não podem ser alterados depois, como `nomeAluno`, `curso`, `metaSemanal`, `horasSexta` e `horasSabado`.
- `let`: guarda valores que podem mudar, como `quantidadeTarefas` (alterei de 12 para 8) e `tarefasTotais`, que muda se eu adicionar mais tarefas.
- `var`: também permite mudar, mas deixa declarar a mesma variável duas vezes, o que pode causar bugs. Além disso, aparece somente em códigos antigos, como no exemplo `disciplinaAntiga`. Atualmente, se usa `let` e `const`.

### Por que cada variável é `const` ou `let`

**Exercício 3**
- `nomeAluno` (`const`): meu nome não muda durante o programa.
- `curso` (`const`): o curso continua o mesmo.
- `quantidadeTarefas` (`let`): o número de tarefas pode mudar, e no código eu alterei de 12 para 8.

**Exercícios 5 a 8**
- `disciplina`, `horasEstudadas`, `estudouHoje` e `proximaProva` (`const`): são dados fixos que só mostro no Console.
- `horasSexta`, `horasSabado`, `metaSemanal`, `horasDia` e `diasEstudo` (`const`): são valores que defini uma vez e não alterei.
- `totalHoras`, `horasRestantes`, `metaCalculo`, `mediaHoras` e `metaAtingida` (`const`): são resultados de cálculos e comparações, então não precisam mudar depois de calculados.

**Exercício 10**
- `tarefasConcluidas`, `tarefasRestantes` e `percentual` (`const`): o valor é definido uma vez ou calculado e não muda.
- `tarefasTotais` (`let`): o total de tarefas pode mudar se eu adicionar ou remover tarefas.

### Sobre o var
Usei `var` só no exercício 4, em `disciplinaAntiga`, para mostrar como era a declaração em códigos antigos.

## Tipos de dados utilizados
- string: `disciplina`, `nomeAluno`, `curso`
- number: `horasEstudadas`, `totalHoras`, `metaSemanal`
- boolean: `estudouHoje`, `metaAtingida`
- null: `proximaProva`

## Condição if/else
Se `totalHoras >= metaSemanal`, o Console mostra "Meta semanal atingida!". Se não, mostra "A meta semanal não foi atingida, estude mais!!". Testei os dois caminhos: com 4 + 5 horas aparece que a meta não foi atingida, e mudando `horasSabado` para 8 aparece "Meta semanal atingida!". No desafio final usei outra condição: se o percentual de tarefas concluídas for maior ou igual a 70, mostra "Bom ritmo de estudos! Continue."; senão, mostra "Acelere as tarefas! Vambora!".

## Maior dificuldade
1. Montar o layout com menu lateral e cards ao lado, usando `row` e `col`. Os cards ficavam fora do lugar e não sabia onde colocar o segundo `row`.

2. A barra de progresso precisava de uma largura correta, e a atividade não permite CSS próprio nem `style`.

## Como resolvi
1. Entendi que a linha é dividida em 12 partes: 3 para o menu (`col-md-3`) e 9 para o conteúdo (`col-md-9`). Dentro da coluna de 9 criei outro `row` para os cards. Testei diminuindo a janela para ver tudo empilhar no celular com `col-12`.

2. Usei as classes de largura do Bootstrap (`w-25`, `w-50`, `w-75`, `w-100`) e escolhi a que mais se aproxima da porcentagem de cada card.