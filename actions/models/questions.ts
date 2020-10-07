interface Question {
  readonly name: string;
  readonly id: string;
  readonly code?: string;
  readonly options: string[];
  readonly answerPosition: number;
  readonly explanation: string;
}

const questions: Question[] = [
  {
    id: "43616EC3-7454-4440-8AB3-8DF093AB72E4",
    name: `Qual será a saida ?`,
    code: `
    function sayHi() {
      console.log(name);
      console.log(age);
      var name = "Person";
      let age = 21;
    }
    
    sayHi();
    `,
    answerPosition: 3,
    options: [
      "Person e undefined",
      "Person e ReferenceError",
      "ReferenceError e 21",
      "undefined e ReferenceError",
    ],
    explanation: `
      Dentro da função, nós primeiro declaramos a variável name usando a palavra-chave var. Isso significa que a variável é
      elevada(hoisted) (O espaço na memória é separado durante a fase de criação) com o valor padrão undefined, até que 
      chegue na linha onde definimos a variável. Ainda não definimos a variável na linha onde tentamos usar colocar no log
      o valor da variável name, portanto ela ainda tem o valor undefined.

      Variáveis com a palavra-chave let (e const) são elevadas, mas diferente de var, não são inicializadas. Elas não estão acessíveis
      antes da linha em que as declaramos (ou inicializamos). Esse é um conceito chamado de "temporal dead zone". Quando tentamos acessar
      essas variáveis antes de serem declaradas, o JavaScript lança um ReferenceError.
      `,
  },
  {
    id: "98D9A410-BD6E-45A2-AED9-7C3ECA43F3EB",
    name: "Qual será a saída?",
    code: `
    for (var i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 1);
    }
    
    for (let i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 1);
    }
    `,
    answerPosition: 2,
    options: [
      "0 1 2 e 0 1 2",
      "0 1 2 e 3 3 3",
      "3 3 3 e 0 1 2",
      "1 2 3 e 0 1 2",
    ],
    explanation: `
      "'This' palavra-chave é usada para se referir ao objeto através do qual as propriedades
       ou métodos foram invocados. Este uso de 'this' é uma característica fundamental dos métodos de qualquer classe.",
      `,
  },
  {
    id: "6DB5C7C0-20B9-427B-9BC0-881143843368",
    name: "Qual será a saída?",
    code: `
    const shape = {
      radius: 10,
      diameter() {
        return this.radius * 2;
      },
      perimeter: () => 2 * Math.PI * this.radius
    };
    
    shape.diameter();
    shape.perimeter();
    `,
    options: ["20 e 62.83185307179586", "20 e NaN", "20 e 63", "NaN e 63"],
    answerPosition: 1,
    explanation: `
      Perceba que o valor de diameter é uma função normal, enquanto que o valor de perimeter é uma arrow function.
      Com arrow functions, a palavra-chave this faz referência ao escopo atual em que está inserida, diferente de funções normais!
      Isso significa que quando nós chamamos perimeter, ela não faz referência ao objeto shape, mas ao seu escopo atual (por exemplo, window).
      Não há radius fora de shape, então retorna undefined.
      `,
  },
  {
    id: "1507B8E8-65FF-4785-987F-0906271EF061",
    name: "Qual será a saída?",
    code: `
    +true;
    !"User";
    `,
    answerPosition: 0,
    options: ["1 e false", "false e NaN", "false e false", "true e true"],
    explanation: `
      O operador unário + tenta converter um operando para um número. true é 1, e false é 0.
      A string 'User' tem valor truthy*. O que estamos realmente perguntando é "Esse valor truthy é falsy?". Isso retorna false.
      `,
  },
  {
    id: "4F0560FD-768F-4779-9AE5-27EC55EE2206",
    name: "Qual será a saída?",
    code: `
    const bird = {
      size: "small"
    };
    
    const mouse = {
      name: "Mickey",
      small: true
    };
    `,
    answerPosition: 0,
    options: [
      "mouse.bird.size não é válido",
      "mouse[bird.size] não é válido",
      "mouse[bird['size']] não é válido",
      "Todos são válidos",
    ],
    explanation: `
      No JavaScript, todas chaves dos objetos são strings (a não ser que sejam um símbolo). Ainda que não possamos digitá-las
      como strings, elas são sempre convertidas para string sob o capô.
      JavaScript interpreta afirmações. Quando usamos a notação de colchetes, ele vê o colchete de abertura [ e continua lendo
      até encontrar o colchete que o fecha ]. Só então vai avaliar e rodar as afirmações.
      mouse[bird.size]: Primeiro avalia bird.size, que é "small". mouse["small"] retorna true
      Por outro lado, com a notação de ponto ., isso não acontece. mouse não tem uma chave chamada bird, o que significa que mouse.bird 
      é undefined. Então, pedimos pelo size usando a notação de ponto: mouse.bird.size. Uma vez que mouse.bird é undefined, estamos realmente pedindo undefined.size. Isso não é válido, e irá gerar um erro similar a Cannot read property "size" of undefined.
      `,
  },
  {
    id: "15ADBDCE-1F18-4C7A-A8A3-2E1FEC6D5311",
    name: "Qual será a saída?",
    code: `
    let c = { greeting: "Hey!" };
    let d;
    
    d = c;
    c.greeting = "Hello";
    console.log(d.greeting);
    `,
    answerPosition: 0,
    options: ["Hello", "Hey", "undefined", "ReferenceError"],
    explanation: `
      Em JavaScript, todos objetos interagem por referência quando os colocamos um igual ao outro.
      Primeiro, a variável c guarda o valor de um objeto. Depois, declaramos d com a mesma referencia que c tem para o objeto.
      `,
  },
  {
    id: "C35F4860-0781-4B9F-B951-C8FA6ED2C3AC",
    name: "Qual será a saída?",
    code: `
    let a = 3;
    let b = new Number(3);
    let c = 3;
    
    console.log(a == b);
    console.log(a === b);
    console.log(b === c);
    `,
    answerPosition: 2,
    options: [
      "true false true",
      "false false true",
      "true false false",
      "false true true",
    ],
    explanation: `
      new Number() é uma função construtura padrão do JavaScript. Ainda que parece com um número, não é realmente um número: Tem um monte de funções extras e é um objeto.
      Quando usamos o operador ==, só conferimos se ambas tem o mesmo valor. Ambas tem o valor de 3, então retorna true.
      Contudo, quando usamos o operador ===, ambos valor e tipo tem de ser o mesmo. E não são: new Number() não é um número, é um objeto. Ambos retornam false.
      `,
  },
  {
    id: "422A325A-D034-453F-A071-559C1377D555",
    name: "Qual será a saída?",
    code: `
    class Chameleon {
      static colorChange(newColor) {
        this.newColor = newColor;
        return this.newColor;
      }
    
      constructor({ newColor = "green" } = {}) {
        this.newColor = newColor;
      }
    }
    
    const freddie = new Chameleon({ newColor: "purple" });
    freddie.colorChange("orange");
    `,
    options: ["orange", "purple", "green", "TypeError"],
    answerPosition: 3,
    explanation: `
    A função colorChange é estática. Métodos estáticos são designados para viver somente nos construtores em que são criados,
    e filhos não herdam esses métodos. Já que freddie é filho de Chameleon, a função não é herdada, e não está disponível para freddie: 
    Um erro TypeError é gerado.
    `,
  },
  {
    id: "4FF53449-4F74-4AC2-8C07-C7BCADB30CF9",
    name: "Qual será a saída?",
    code: `
    let greeting;
    greetign = {}; // Erro de digitação!
    console.log(greetign); 
    `,
    answerPosition: 0,
    options: [
      "{}",
      "ReferenceError: greetign is not defined",
      "undefined",
      "0",
    ],
    explanation: `
    Cria o log do objeto, pois criamos um objeto vazio no objeto global! Quando erramos a digitação de greeting como greetign,
    o interpretador do JavaScript viu isso como global.greetign = {} (ou window.greetign = {} em um navegador).
    Para evitar esse comportamento, podemos usar "use strict". Isso garante que você tenha declarado uma variável
    antes de poder inicializá-la com algum valor.
    `,
  },
  {
    id: "B1AB38B9-4B2C-4897-91CF-701297B60C97",
    name: "Qual será a saída?",
    code: `
    function bark() {
      console.log("Woof!");
    }
    
    bark.animal = "dog";
    `,
    options: [
      "Nada, isso é ok!",
      "SyntaxError. Não se pode adicionar propriedades em uma função dessa maneira.",
      "undefined",
      "ReferenceError",
    ],
    answerPosition: 0,
    explanation: `
    Isso é possível em JavaScript, pois funções são objetos! (Tudo menos tipos primitivos são objetos)
    Uma função é um tipo especial de objeto. O código que você escreve não é a verdadeira função. 
    A função é um objeto com propriedades. E essa propriedade é invocável.
    `,
  },
  {
    id: "5C4694EC-8FDF-4902-BC50-8A081AEC4C54",
    name: "Qual será a saída?",
    code:
      `
    function Person(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    const member = new Person("Lydia", "Hallie");
    Person.getFullName = function() {\n` +
      "       return ${this.firstName} ${this.lastName};\n" +
      `    };
    
    console.log(member.getFullName());
    `,
    answerPosition: 0,
    options: [
      "TypeError",
      "SyntaxError",
      "Lydia Hallie",
      "undefined undefined",
    ],
    explanation: ``,
  },
  {
    id: "75BC8885-833A-422B-94F4-379CD23DEBBB",
    name: "Qual será a saída?",
    code: `
    function Person(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    const lydia = new Person("Lydia", "Hallie");
    const sarah = Person("Sarah", "Smith");
    
    console.log(lydia);
    console.log(sarah);
    `,
    answerPosition: 0,
    options: [
      "Person {firstName: 'Lydia', lastName: 'Hallie'} e undefined",
      "Person {firstName: 'Lydia', lastName: 'Hallie'} e Person {firstName: 'Sarah', lastName: 'Smith'}",
      "Person {firstName: 'Lydia', lastName: 'Hallie'} e {}",
      "Person {firstName: 'Lydia', lastName: 'Hallie'} e ReferenceError",
    ],
    explanation: "",
  },
];
