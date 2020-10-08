# JsQuizz

Aluno: Lucas Gomes da Silva Magalhães

A aplicação é um questionário de 5 perguntas sobre javascript. Onde são listados códigos para serem analisados pelo usuário, seguindo de 4 opções
para marcação. Após as 5 perguntas. O usuário é mandado para uma tela mostrando seu nome, a porcentagem de perguntas acertadas, bem como a listagem
das perguntas feitas, com a opção marcada pelo usuário(uma seta no inicio da opção) seguida pela opção correta (que ficará em verde).

## Primeira tela (index)

Nessa tela o usuário coloca seu nome e inicia o questionário

## Segunda tela(questionário das questões de 1 à 5)

Listagem das perguntas com as opções para serem selecionadas

## Terceira tela(tela de resultados)

Mostra o nome do usuário com a percentagem de acertos e as perguntas feitas no questionário com a marcação das perguntas acertadas e erradas.

A aplicação é original e não uma cópia da aplicação de um colega ou de uma aplicação já existente?

* A aplicação tem pelo menos duas interfaces (telas ou páginas) independentes? *Sim*
* A aplicação armazena e usa de forma relevante dados complexos do usuário? *Sim*
* A aplicação possui um manifesto para instalação no dispositivo do usuário? *Sim*
* A aplicação possui um service worker que permite o funcionamento off-line? *Sim*
* O código da minha aplicação possui comentários explicando cada operação? *Não, a nomenclatura dos nomes das funções já são bem descritivas*
* A aplicação está funcionando corretamente? *Sim*
* A aplicação está completa? *Sim*


Trabalho da matéria Tópicos especiais de Sistemas de Informação
(Typescript foi usado para o desenvolvimento da aplicação apenas por motivo de familiaridade com a linguagem.)

## Organização da aplicação

A aplicação foi desenvolvida usando a linguagem Typescript(Os arquivos .ts ficam na pasta **actions**  e depois de transpilados para javascript vãos para a pasta **dist**).

Dentro da pasta **actions** há uma pasta **models** onde estão todas as perguntas usadas no questionário bem como outras interfaces usadas na aplicação.

### Globals.ts

Contém a função de redirecionamento de páginas.

### index.ts 

Contém as funções usadas na páginas **index.html** que servem basicamente para inicialização da aplicação e persistência do nome do usuário.

## questionBuilder.ts

Maior arquivo da aplicação. Usado para fazer a seleção das questões, montagem da tela, coleta das respostas e persistencias das mesmas dentro
do local storage.

## results.ts

Monta a tela de respostas baseado no que foi respondido pelo usuário ao longo do questionário. 