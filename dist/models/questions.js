var questions = [
    {
        id: "43616EC3-7454-4440-8AB3-8DF093AB72E4",
        name: "O comportamento das instâncias presentes de uma classe dentro de um método é definido por",
        answerPosition: 1,
        options: ["Funções", "Classes", "Interfaces", "Classes e interfaces"],
        explanation: "Os objetos da classe também são conhecidos como instâncias da classe. O comportamento da instância de uma classe é definido pela classe e é compartilhado por todas as instâncias.",
    },
    {
        id: "98D9A410-BD6E-45A2-AED9-7C3ECA43F3EB",
        name: "A palavra-chave ou a propriedade que você usa para se referir a um objeto através do qual eles foram chamados é",
        answerPosition: 2,
        options: ["from", "to", "this", "object"],
        explanation: "'This' palavra-chave é usada para se referir ao objeto através do qual as propriedades ou métodos foram invocados. Este uso de 'this' é uma característica fundamental dos métodos de qualquer classe.",
    },
    {
        id: "6DB5C7C0-20B9-427B-9BC0-881143843368",
        name: "Qual será a saída do seguinte código JavaScript?",
        code: "var o = new F();\no.constructor === F",
        options: ["false", "true", "0", "1"],
        answerPosition: 1,
        explanation: "Construtor é uma propriedade de função da classe que é usada para criar objetos dessa classe. No código acima, ambas as instruções criam uma instância da classe.",
    },
    {
        id: "1507B8E8-65FF-4785-987F-0906271EF061",
        name: "A diferença básica entre JavaScript e Java é...",
        answerPosition: 3,
        options: [
            "Não há diferença",
            "As funções são consideradas como campos",
            "Variáveis ​​são específicas",
            "Funções são valores e não há distinção rígida entre métodos e campos",
        ],
        explanation: "Java é uma linguagem de programação OOP, enquanto o JavaScript é uma linguagem de script OOP. A diferença básica entre JavaScript e Java é que as funções são valores e não há distinção rígida entre métodos e campos.",
    },
    {
        id: "4F0560FD-768F-4779-9AE5-27EC55EE2206",
        name: "O significado para classes de aumento é que",
        answerPosition: 0,
        options: [
            "objetos herdam propriedades de protótipo mesmo em um estado dinâmico",
            "objetos herdam propriedades de protótipo apenas em um estado dinâmico",
            "objetos herdam propriedades de protótipo no estado estático",
            "objeto não herda protótipo propriedades no estado estático",
        ],
        explanation: "O mecanismo de herança baseado em protótipo do JavaScript é dinâmico: um objeto herda propriedades de seu protótipo, mesmo" +
            " se o protótipo mudar depois que o objeto for criado. Isso significa que podemos aumentar as classes JavaScript simplesmente " +
            " adicionando novos métodos a seus objetos de protótipo.",
    },
    {
        id: "15ADBDCE-1F18-4C7A-A8A3-2E1FEC6D5311",
        name: "Quando uma classe B pode estender outra classe A, nós que...",
        answerPosition: 0,
        options: [
            "A é a superclasse e B é a subclasse",
            "B é a superclasse e A é a subclasse",
            "Ambos A e B são a superclasse",
            "Ambos A e B são a subclasse",
        ],
        explanation: "Superclasse é a classe a partir da qual as subclasses são definidas. As subclasses também são " +
            " chamadas de extensões da superclasse. Portanto, no cenário acima, A será a superclasse e B, a subclasse.",
    },
    {
        id: "C35F4860-0781-4B9F-B951-C8FA6ED2C3AC",
        name: " O método que pode ser usado para criar novas propriedades e também para modificar os atributos de propriedades existentes é _________",
        answerPosition: 2,
        options: [
            "Object.defineProperty()",
            "Object.defineProperties()",
            "Ambos Object.defineProperty() e Object.defineProperties()",
            "Object.inherit()",
        ],
        explanation: "O método Object.defineProperty () define uma nova propriedade diretamente em um objeto ou modifica uma propriedade existente em um" +
            " objeto e retorna o objeto. Ambos Object.defineProperty () e Object.defineProperties () podem ser usados para definir novas propriedades.",
    },
];
