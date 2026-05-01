// =============================================
// COMPETÊNCIAS DO ENEM (Dados completos)
// =============================================
const competenciasData = {
    1: {
        title: "Competência 1: Domínio da Norma Culta",
        desc: "Demonstrar domínio da modalidade escrita formal da língua portuguesa. Esta competência avalia se você sabe escrever corretamente: ortografia, acentuação, concordância, regência, pontuação e vocabulário adequado.",
        do: [
            "Usar vocabulário preciso e formal (ex: 'hodiernamente', 'intrínseco', 'mitigar').",
            "Prestar muita atenção à concordância verbal e nominal.",
            "Revisar acentuação e pontuação (especialmente o uso de vírgulas).",
            "Diferenciar letras maiúsculas e minúsculas corretamente.",
            "Usar a crase corretamente ('à medida que', 'à vista disso').",
            "Variar a estrutura das frases (simples, compostas, intercaladas).",
            "Evitar períodos muito longos: use ponto final para dividir ideias.",
            "Consultar o Dicionário Avançado desta plataforma para trocar palavras comuns por formais."
        ],
        dont: [
            "Usar gírias ou marcas de oralidade (ex: 'tá', 'né', 'aí', 'tipo').",
            "Escrever frases muito longas sem pontuação adequada.",
            "Usar pleonasmos (ex: 'fato real', 'certeza absoluta', 'subir para cima').",
            "Repetir a mesma palavra muitas vezes no mesmo parágrafo.",
            "Escrever 'a nível de', 'onde' no lugar de 'em que', 'aonde' sem verbo de movimento.",
            "Usar abreviações (ex: 'vc', 'tb', 'pq').",
            "Misturar registro formal com informal no mesmo texto."
        ]
    },
    2: {
        title: "Competência 2: Tema, Repertório e Estrutura",
        desc: "Compreender a proposta de redação e aplicar conceitos das várias áreas de conhecimento para desenvolver o tema, dentro dos limites estruturais do texto dissertativo-argumentativo em prosa. Aqui se avalia se você entendeu o tema, se trouxe repertório sociocultural pertinente e produtivo, e se manteve a estrutura dissertativa.",
        do: [
            "Mencionar TODAS as palavras-chave do tema já na introdução.",
            "Trazer repertório sociocultural legitimado, pertinente e produtivo (filósofo, filme, lei, dado).",
            "Manter a estrutura: Introdução + 2 Desenvolvimentos + Conclusão (4 parágrafos).",
            "Usar o repertório para PROVAR seu argumento, não apenas citar de forma solta.",
            "Contextualizar o repertório: dizer quem é o autor, de que obra, e o que ele defende.",
            "Trazer pelo menos 2 repertórios diferentes no texto (um por desenvolvimento)."
        ],
        dont: [
            "Tangenciar o tema (falar de assunto próximo, mas não do recorte exato).",
            "Escrever texto narrativo, poema ou carta (deve ser dissertativo-argumentativo).",
            "Usar primeira pessoa do singular ('eu acho', 'eu penso').",
            "Colocar repertório que não tem relação real com o argumento (repertório solto).",
            "Copiar trechos da coletânea de textos motivadores.",
            "Usar 'repertório de bolso' sem conectar ao tema (o INEP já alertou sobre isso)."
        ]
    },
    3: {
        title: "Competência 3: Projeto de Texto e Argumentação",
        desc: "Selecionar, relacionar, organizar e interpretar informações, fatos, opiniões e argumentos em defesa de um ponto de vista. Avalia se seu texto tem um 'projeto' claro, se os argumentos são bem desenvolvidos e se há progressão lógica entre as ideias.",
        do: [
            "Ter um Projeto de Texto: a introdução deve adiantar os dois argumentos (A1 e A2).",
            "O D1 desenvolve o A1 e o D2 desenvolve o A2 (coerência com a intro).",
            "Aprofundar a argumentação: explicar o 'porquê' e as consequências do problema.",
            "Garantir progressão lógica: cada frase deve ser consequência da anterior.",
            "Usar dados, exemplos concretos e repertório para sustentar os argumentos.",
            "Fechar cada parágrafo de desenvolvimento com uma frase que arremate a ideia."
        ],
        dont: [
            "Expor fatos sem opinar ou argumentar (texto expositivo, não argumentativo).",
            "Apresentar ideias contraditórias entre si.",
            "Deixar afirmações sem justificativa (senso comum puro).",
            "Mudar de assunto abruptamente sem transição.",
            "Argumentar sobre algo que não foi anunciado na introdução.",
            "Usar generalização excessiva ('todo mundo sabe que', 'sempre foi assim')."
        ]
    },
    4: {
        title: "Competência 4: Coesão Textual e Conectivos",
        desc: "Demonstrar conhecimento dos mecanismos linguísticos necessários para a construção da argumentação. Avalia o uso de operadores argumentativos (conectivos) entre parágrafos e dentro dos parágrafos, além de mecanismos de referenciação (pronomes, sinônimos).",
        do: [
            "Iniciar TODOS os parágrafos (exceto intro) com operadores argumentativos.",
            "Usar conectivos DENTRO dos parágrafos (pelo menos 2 por parágrafo).",
            "Variar os conectivos: não repetir o mesmo mais de 2 vezes no texto todo.",
            "Usar pronomes e sinônimos para evitar repetição de palavras.",
            "Usar a seção de Conectivos desta plataforma para memorizar opções.",
            "Garantir que cada frase esteja conectada logicamente com a anterior e a próxima."
        ],
        dont: [
            "Repetir o mesmo conectivo várias vezes (ex: 'porém' 4 vezes).",
            "Usar conectivo com sentido errado (ex: 'portanto' para adicionar ideia).",
            "Começar frases sem ligação com a anterior.",
            "Usar 'e' excessivamente como único elemento de ligação.",
            "Esquecer de conectar a conclusão ao restante do texto.",
            "Trocar o sentido dos conectivos (ex: usar 'contudo' quando quer dizer 'portanto')."
        ]
    },
    5: {
        title: "Competência 5: Proposta de Intervenção",
        desc: "Elaborar proposta de intervenção para o problema abordado, respeitando os direitos humanos. A proposta DEVE conter 5 elementos: Agente, Ação, Meio/Modo, Efeito/Finalidade e Detalhamento de pelo menos um deles. Cada elemento vale 40 pontos.",
        do: [
            "Apresentar os 5 ELEMENTOS: Agente + Ação + Meio/Modo + Efeito/Finalidade + Detalhamento.",
            "Solucionar TODOS os problemas levantados no D1 e D2.",
            "Ser específico no AGENTE: usar órgãos reais (Ministério da Educação, Ministério da Saúde, etc.).",
            "Detalhar: explicar COMO o agente fará a ação (por meio de quê? com quais recursos?).",
            "Indicar a FINALIDADE: 'a fim de', 'com o fito de', 'com o intuito de'.",
            "Ser prático e viável (algo executável no mundo real).",
            "FÓRMULA: 'Cabe ao [AGENTE], por meio de [MEIO], realizar [AÇÃO], com o fito de [FINALIDADE].'"
        ],
        dont: [
            "Desrespeitar os Direitos Humanos (pena de morte, tortura = NOTA ZERO).",
            "Usar agentes nulos ('alguém', 'as pessoas', 'nós', 'a sociedade').",
            "Esquecer de detalhar (sem detalhamento, perde 40 pontos).",
            "Propor soluções vagas ('o governo deve fazer alguma coisa').",
            "Propor solução que não resolve os problemas que VOCÊ levantou.",
            "Colocar a proposta dentro do D2 (deve estar na CONCLUSÃO).",
            "Esquecer de mencionar o efeito/finalidade da ação proposta."
        ]
    }
};

// Dicas diárias (rotativas)
const dicasDiarias = [
    "Sempre estruture sua redação com 4 parágrafos: 1 Introdução, 2 Desenvolvimentos e 1 Conclusão.",
    "Na C5, use a fórmula: AGENTE + AÇÃO + MEIO + FINALIDADE + DETALHAMENTO. Cada um vale 40 pontos!",
    "Nunca use 'eu acho' ou 'na minha opinião'. Use a 3ª pessoa: 'É inegável que...', 'Constata-se que...'",
    "Varie os conectivos! Não repita 'além disso' 3 vezes. Use: Ademais, Outrossim, Somado a isso.",
    "O repertório deve ser PRODUTIVO: não basta citar, você precisa explicar e conectar ao argumento.",
    "A Constituição Federal (Art. 5º e 6º) é o repertório mais versátil: serve para quase todo tema!",
    "Troque 'problema' por: entrave, revés, impasse, óbice, mazela, chaga. Enriquece a C1!",
    "Cada parágrafo deve começar com um conectivo diferente. Ex: D1='Diante desse cenário,', D2='Ademais,'",
    "Na conclusão, sempre use 'a fim de' ou 'com o fito de' para indicar a finalidade da ação.",
    "Leia pelo menos 1 redação nota 1000 por dia. Absorva a estrutura, os conectivos e o tom.",
    "Nunca copie trechos dos textos motivadores. O INEP desconta pontos por isso.",
    "Use pelo menos 2 repertórios diferentes: um no D1 e outro no D2.",
    "Evite generalizar: 'todo mundo sabe', 'sempre foi assim'. Prefira dados e fontes.",
    "Cuidado com a crase: 'à medida que' (certo), 'a medida que' (errado nesse caso).",
    "O ENEM 2025 cobrou envelhecimento. Fique de olho em: IA, saúde mental, meio ambiente, educação.",
    "Cite o agente com precisão: 'Ministério da Educação' é melhor que 'o governo'.",
    "Treine cronometrado: você tem cerca de 1h para a redação no dia da prova.",
    "Não ultrapasse 30 linhas. A maioria das notas 1000 tem entre 25 e 30 linhas.",
    "Releia sua redação pelo menos 2 vezes antes de passar a limpo.",
    "Mantenha margem de parágrafo (recuo). Parágrafos sem recuo podem perder pontos."
];
