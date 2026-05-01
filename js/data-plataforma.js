const fontesConfiaveisData = [
    {
        nome: "Inep - Tema da redação do Enem 2025",
        url: "https://www.gov.br/inep/pt-br/centrais-de-conteudo/noticias/enem/tema-da-redacao-perspectivas-acerca-do-envelhecimento-na-sociedade-brasileira",
        uso: "Confirmação do tema oficial de 2025."
    },
    {
        nome: "Brasil Escola - Temas de redação que já caíram no Enem",
        url: "https://vestibular.brasilescola.uol.com.br/enem/temas-redacao-enem.htm",
        uso: "Lista histórica de temas oficiais e contextualização."
    },
    {
        nome: "Inep - A redação no Enem 2024: cartilha do participante",
        url: "https://download.inep.gov.br/publicacoes/institucionais/avaliacoes_e_exames_da_educacao_basica/a_redacao_no_enem_2024_cartilha_do_participante.pdf",
        uso: "Critérios de correção, competências e exemplos oficiais divulgados pelo Inep."
    },
    {
        nome: "Guia do Estudante - Cartilha de redação do Enem",
        url: "https://guiadoestudante.abril.com.br/redacao/baixe-a-cartilha-de-redacao-do-enem-2024-e-leia-textos-nota-mil/",
        uso: "Orientação para encontrar cartilhas e redações nota mil publicadas."
    }
];

const temasOficiaisEnemData = [
    {ano: 2025, tema: "Perspectivas acerca do envelhecimento na sociedade brasileira", eixo: "Direitos humanos / Envelhecimento", fonte: "Inep"},
    {ano: 2024, tema: "Desafios para a valorização da herança africana no Brasil", eixo: "Cultura / Relações étnico-raciais", fonte: "Inep / Brasil Escola"},
    {ano: 2023, tema: "Desafios para o enfrentamento da invisibilidade do trabalho de cuidado realizado pela mulher no Brasil", eixo: "Gênero / Trabalho", fonte: "Inep / Brasil Escola"},
    {ano: 2022, tema: "Desafios para a valorização de comunidades e povos tradicionais no Brasil", eixo: "Povos tradicionais / Cultura", fonte: "Inep / Brasil Escola"},
    {ano: 2021, tema: "Invisibilidade e registro civil: garantia de acesso à cidadania no Brasil", eixo: "Cidadania / Documentação", fonte: "Inep / Brasil Escola"},
    {ano: 2020, tema: "O estigma associado às doenças mentais na sociedade brasileira", eixo: "Saúde mental", fonte: "Inep / Brasil Escola"},
    {ano: 2019, tema: "Democratização do acesso ao cinema no Brasil", eixo: "Cultura / Acesso", fonte: "Inep / Brasil Escola"},
    {ano: 2018, tema: "Manipulação do comportamento do usuário pelo controle de dados na internet", eixo: "Tecnologia / Dados", fonte: "Inep / Brasil Escola"},
    {ano: 2017, tema: "Desafios para a formação educacional de surdos no Brasil", eixo: "Educação inclusiva", fonte: "Inep / Brasil Escola"},
    {ano: 2016, tema: "Caminhos para combater a intolerância religiosa no Brasil", eixo: "Direitos humanos / Religião", fonte: "Inep / Brasil Escola"},
    {ano: 2015, tema: "A persistência da violência contra a mulher na sociedade brasileira", eixo: "Gênero / Violência", fonte: "Inep / Brasil Escola"},
    {ano: 2014, tema: "Publicidade infantil em questão no Brasil", eixo: "Infância / Consumo", fonte: "Inep / Brasil Escola"},
    {ano: 2013, tema: "Efeitos da implantação da Lei Seca no Brasil", eixo: "Saúde pública / Trânsito", fonte: "Inep / Brasil Escola"},
    {ano: 2012, tema: "Movimento imigratório para o Brasil no século XXI", eixo: "Migração / Sociedade", fonte: "Inep / Brasil Escola"},
    {ano: 2011, tema: "Viver em rede no século XXI: os limites entre o público e o privado", eixo: "Tecnologia / Privacidade", fonte: "Inep / Brasil Escola"},
    {ano: 2010, tema: "O trabalho na construção da dignidade humana", eixo: "Trabalho / Dignidade", fonte: "Inep / Brasil Escola"},
    {ano: 2009, tema: "O indivíduo frente à ética nacional", eixo: "Ética / Cidadania", fonte: "Inep / Brasil Escola"},
    {ano: 2008, tema: "Como preservar a floresta Amazônica", eixo: "Meio ambiente", fonte: "Brasil Escola"},
    {ano: 2007, tema: "O desafio de se conviver com as diferenças", eixo: "Diversidade / Convivência", fonte: "Brasil Escola"},
    {ano: 2006, tema: "O poder de transformação da leitura", eixo: "Educação / Leitura", fonte: "Brasil Escola"},
    {ano: 2005, tema: "O trabalho infantil na realidade brasileira", eixo: "Infância / Trabalho", fonte: "Brasil Escola"},
    {ano: 2004, tema: "Como garantir a liberdade de informação e evitar abusos nos meios de comunicação", eixo: "Comunicação / Liberdade", fonte: "Brasil Escola"},
    {ano: 2003, tema: "A violência na sociedade brasileira: como mudar as regras desse jogo", eixo: "Segurança / Violência", fonte: "Brasil Escola"},
    {ano: 2002, tema: "O direito de votar: como fazer dessa conquista um meio para promover as transformações sociais que o Brasil necessita", eixo: "Cidadania / Democracia", fonte: "Brasil Escola"},
    {ano: 2001, tema: "Desenvolvimento e preservação ambiental: como conciliar os interesses em conflito", eixo: "Meio ambiente / Desenvolvimento", fonte: "Brasil Escola"},
    {ano: 2000, tema: "Direitos da criança e do adolescente: como enfrentar esse desafio nacional", eixo: "Infância / Direitos", fonte: "Brasil Escola"},
    {ano: 1999, tema: "Cidadania e participação social", eixo: "Cidadania", fonte: "Brasil Escola"},
    {ano: 1998, tema: "Viver e aprender", eixo: "Educação / Formação humana", fonte: "Brasil Escola"}
];

const modelosProntosData = [
    {
        eixo: "Saúde",
        introducao: "Conforme a Constituição Federal de 1988, a saúde é direito de todos e dever do Estado. Entretanto, na sociedade brasileira, esse princípio ainda encontra barreiras quando se observa [RECORTE DO TEMA], problema sustentado por [CAUSA 1] e [CAUSA 2].",
        desenvolvimento: "Diante desse cenário, é necessário destacar [CAUSA 1] como fator agravante. Isso ocorre porque [EXPLICAÇÃO]. Como consequência, [EFEITO SOCIAL].",
        conclusao: "Portanto, cabe ao Ministério da Saúde, por meio de campanhas e ampliação de políticas públicas, [AÇÃO], a fim de garantir [DIREITO] e reduzir [PROBLEMA]."
    },
    {
        eixo: "Educação",
        introducao: "Para Immanuel Kant, o ser humano é aquilo que a educação faz dele. No Brasil, porém, [TEMA] revela que o acesso à formação cidadã ainda é desigual, sobretudo por [CAUSA 1] e [CAUSA 2].",
        desenvolvimento: "Sob esse viés, a fragilidade educacional amplia o problema, pois [EXPLICAÇÃO]. Dessa forma, estudantes e famílias permanecem sem instrumentos para superar [CONSEQUÊNCIA].",
        conclusao: "Logo, o Ministério da Educação deve, em parceria com escolas e secretarias estaduais, desenvolver [AÇÃO], por meio de [MEIO], com o objetivo de [FINALIDADE]."
    },
    {
        eixo: "Tecnologia",
        introducao: "Na obra '1984', George Orwell expõe uma sociedade marcada pelo controle informacional. Fora da ficção, [TEMA] demonstra desafios semelhantes no Brasil contemporâneo, causados por [CAUSA 1] e [CAUSA 2].",
        desenvolvimento: "Nesse sentido, a ausência de educação digital torna os cidadãos mais vulneráveis, uma vez que [EXPLICAÇÃO]. Assim, intensifica-se [CONSEQUÊNCIA].",
        conclusao: "Assim, cabe ao Poder Público, com apoio de plataformas digitais, promover [AÇÃO], mediante [MEIO], para assegurar uso ético da tecnologia e proteção dos usuários."
    },
    {
        eixo: "Meio ambiente",
        introducao: "A Constituição Federal garante o direito ao meio ambiente ecologicamente equilibrado. Todavia, [TEMA] evidencia que tal garantia ainda não se efetiva plenamente, em razão de [CAUSA 1] e [CAUSA 2].",
        desenvolvimento: "Além disso, a lógica de exploração econômica sem planejamento sustentável aprofunda o problema, pois [EXPLICAÇÃO]. Com isso, populações vulneráveis sofrem [CONSEQUÊNCIA].",
        conclusao: "Portanto, o Ministério do Meio Ambiente deve fortalecer a fiscalização e a educação ambiental, por meio de [MEIO], a fim de preservar recursos naturais e proteger a coletividade."
    },
    {
        eixo: "Cultura",
        introducao: "A cultura é elemento essencial para a construção da identidade nacional. Contudo, [TEMA] mostra que muitos grupos ainda enfrentam apagamento e desigualdade de acesso, motivados por [CAUSA 1] e [CAUSA 2].",
        desenvolvimento: "Nessa perspectiva, o apagamento histórico dificulta o reconhecimento social, visto que [EXPLICAÇÃO]. Consequentemente, perpetua-se [CONSEQUÊNCIA].",
        conclusao: "Desse modo, cabe ao Ministério da Cultura e às escolas promover [AÇÃO], por meio de projetos educativos e incentivo à produção cultural, para valorizar a diversidade brasileira."
    },
    {
        eixo: "Segurança",
        introducao: "A violência, em suas múltiplas formas, compromete a cidadania e a dignidade humana. Nesse contexto, [TEMA] persiste no Brasil devido a [CAUSA 1] e [CAUSA 2].",
        desenvolvimento: "Primeiramente, a insuficiência de políticas preventivas agrava o cenário, pois [EXPLICAÇÃO]. Logo, grupos vulneráveis ficam mais expostos a [CONSEQUÊNCIA].",
        conclusao: "Cabe ao Ministério da Justiça, em articulação com estados e municípios, implementar [AÇÃO], por meio de [MEIO], a fim de prevenir violências e fortalecer direitos."
    },
    {
        eixo: "Desigualdade social",
        introducao: "Gilberto Dimenstein, em 'O cidadão de papel', discute a distância entre direitos legais e realidade social. De modo semelhante, [TEMA] comprova que [GRUPO] ainda enfrenta exclusão no Brasil.",
        desenvolvimento: "Sob essa ótica, a desigualdade econômica limita oportunidades, uma vez que [EXPLICAÇÃO]. Dessa maneira, o problema se perpetua entre gerações.",
        conclusao: "Portanto, o Governo Federal deve criar [AÇÃO], por meio de investimentos sociais e parcerias locais, para reduzir desigualdades e garantir cidadania real."
    },
    {
        eixo: "Direitos humanos",
        introducao: "A Declaração Universal dos Direitos Humanos defende a dignidade de todos os indivíduos. Entretanto, [TEMA] mostra que esse princípio ainda é violado no Brasil, sobretudo por [CAUSA 1] e [CAUSA 2].",
        desenvolvimento: "Nesse cenário, a naturalização do preconceito impede avanços, pois [EXPLICAÇÃO]. Assim, a sociedade passa a aceitar violações que deveriam ser combatidas.",
        conclusao: "Logo, cabe ao Ministério dos Direitos Humanos promover campanhas e políticas de proteção, mediante [MEIO], para combater [PROBLEMA] e assegurar dignidade."
    },
    {
        eixo: "Trabalho",
        introducao: "Karl Marx analisou como as relações de trabalho podem gerar exploração e desigualdade. No Brasil atual, [TEMA] revela a permanência desse problema, associado a [CAUSA 1] e [CAUSA 2].",
        desenvolvimento: "Ademais, a precarização das relações laborais intensifica a vulnerabilidade social, já que [EXPLICAÇÃO]. Consequentemente, trabalhadores enfrentam [CONSEQUÊNCIA].",
        conclusao: "Portanto, o Ministério do Trabalho deve fiscalizar e regulamentar [AÇÃO], por meio de [MEIO], para garantir proteção, renda e dignidade aos trabalhadores."
    },
    {
        eixo: "Cidadania",
        introducao: "A cidadania plena depende do acesso efetivo a direitos básicos. Todavia, [TEMA] demonstra que parte da população brasileira ainda é impedida de exercer sua participação social.",
        desenvolvimento: "Nesse sentido, a negligência estatal contribui para o problema, pois [EXPLICAÇÃO]. Com isso, cria-se uma cidadania incompleta e excludente.",
        conclusao: "Assim, cabe ao Estado ampliar [AÇÃO], por meio de serviços públicos acessíveis e campanhas informativas, a fim de garantir participação cidadã."
    }
];

const inteligenciaEnemData = [
    {titulo: "Direitos humanos são o centro da prova", indicador: "Muito recorrente", detalhe: "Mulheres, idosos, povos tradicionais, pessoas sem registro, surdos, religiosidade e saúde mental mostram preferência por problemas sociais concretos."},
    {titulo: "Cultura e identidade aparecem com força", indicador: "Recorrente", detalhe: "Cinema, herança africana, leitura e comunidades tradicionais indicam valorização de patrimônio, memória e acesso cultural."},
    {titulo: "Tecnologia entra ligada à cidadania", indicador: "Em crescimento", detalhe: "Privacidade, dados, redes e comportamento digital tendem a ser cobrados como problemas éticos e sociais, não apenas técnicos."},
    {titulo: "Proposta sempre pede intervenção", indicador: "Obrigatório", detalhe: "O aluno deve apresentar agente, ação, meio/modo, finalidade e detalhamento respeitando direitos humanos."},
    {titulo: "Hipóteses de treino", indicador: "Não oficial", detalhe: "Apostas úteis: educação midiática, envelhecimento ativo, IA e trabalho, segurança alimentar, crise climática, acessibilidade digital e saúde mental juvenil."}
];

const activityTopics = [
    {id: "pontuacao", label: "Pontuação", competence: "C1"},
    {id: "coesao", label: "Coesão e coerência", competence: "C4"},
    {id: "interpretacao", label: "Interpretação de texto", competence: "C2"},
    {id: "argumentacao", label: "Argumentação", competence: "C3"},
    {id: "repertorio", label: "Repertório sociocultural", competence: "C2/C3"},
    {id: "competencias", label: "Competências da redação", competence: "C1-C5"},
    {id: "intervencao", label: "Proposta de intervenção", competence: "C5"},
    {id: "conectivos", label: "Conectivos", competence: "C4"},
    {id: "norma", label: "Norma culta", competence: "C1"}
];

const activityLevels = ["Fácil", "Médio", "Difícil", "ENEM hard"];

const activityTemplates = [
    {
        topic: "pontuacao",
        stem: "Em uma redação ENEM, qual alternativa apresenta o melhor uso de vírgula para isolar uma expressão deslocada?",
        options: ["Portanto os jovens devem agir com responsabilidade.", "Portanto, os jovens devem agir com responsabilidade.", "Portanto os jovens, devem agir com responsabilidade.", "Portanto os jovens devem, agir com responsabilidade.", "Portanto os jovens devem agir, com responsabilidade."],
        answer: 1,
        explanation: "Conectivos deslocados ou introdutórios, como 'Portanto', costumam ser isolados por vírgula."
    },
    {
        topic: "coesao",
        stem: "Qual conectivo indica adição de argumento em um desenvolvimento?",
        options: ["Todavia", "Ademais", "Portanto", "Embora", "Conquanto"],
        answer: 1,
        explanation: "'Ademais' acrescenta uma ideia nova e é útil no D2 ou dentro de parágrafos argumentativos."
    },
    {
        topic: "interpretacao",
        stem: "Ao ler a proposta de redação, qual atitude reduz o risco de tangenciar o tema?",
        options: ["Ignorar o recorte e escrever sobre o eixo geral.", "Copiar integralmente os textos motivadores.", "Destacar palavras-chave do tema e retomá-las na tese.", "Usar qualquer repertório conhecido.", "Escrever apenas sobre opinião pessoal."],
        answer: 2,
        explanation: "As palavras-chave delimitam o recorte temático e ajudam a manter o projeto de texto dentro da proposta."
    },
    {
        topic: "argumentacao",
        stem: "Qual alternativa mostra argumentação mais produtiva?",
        options: ["O problema existe porque sim.", "Muitas pessoas sabem disso.", "O problema decorre de uma falha estatal que limita o acesso a direitos.", "É um tema muito importante para todos.", "A sociedade precisa melhorar."],
        answer: 2,
        explanation: "A alternativa apresenta causa concreta e relação com direitos, permitindo desenvolvimento crítico."
    },
    {
        topic: "repertorio",
        stem: "Um repertório sociocultural é produtivo quando:",
        options: ["É apenas citado no início.", "É famoso, mesmo sem relação com o tema.", "É explicado e conectado ao argumento defendido.", "Substitui a tese do texto.", "Aparece só na conclusão."],
        answer: 2,
        explanation: "O repertório precisa ser legitimado, pertinente e usado para sustentar o raciocínio."
    },
    {
        topic: "competencias",
        stem: "A Competência 5 avalia principalmente:",
        options: ["Domínio da norma padrão.", "Uso de conectivos.", "Proposta de intervenção para o problema.", "Escolha do título.", "Quantidade de repertórios."],
        answer: 2,
        explanation: "A C5 exige proposta de intervenção detalhada e respeitosa aos direitos humanos."
    },
    {
        topic: "intervencao",
        stem: "Qual elemento NÃO pode faltar em uma proposta de intervenção completa?",
        options: ["Agente", "Ação", "Meio ou modo", "Finalidade", "Título obrigatório"],
        answer: 4,
        explanation: "Título não é obrigatório. Já agente, ação, meio/modo, finalidade e detalhamento são elementos esperados."
    },
    {
        topic: "conectivos",
        stem: "Qual conectivo é mais adequado para conclusão?",
        options: ["Outrossim", "Nesse sentido", "Portanto", "Por exemplo", "Além disso"],
        answer: 2,
        explanation: "'Portanto' indica conclusão e prepara a proposta de intervenção."
    },
    {
        topic: "norma",
        stem: "Qual expressão é mais adequada ao registro formal da redação?",
        options: ["A gente tem que", "Tipo assim", "Faz-se necessário", "Tá complicado", "Todo mundo sabe"],
        answer: 2,
        explanation: "'Faz-se necessário' tem registro formal e é compatível com texto dissertativo-argumentativo."
    }
];

function buildAtividadesData() {
    const contexts = [
        "saúde mental", "educação inclusiva", "herança africana", "trabalho de cuidado", "registro civil",
        "cinema no Brasil", "dados na internet", "intolerância religiosa", "violência contra a mulher",
        "povos tradicionais", "envelhecimento", "publicidade infantil"
    ];
    const questions = [];

    for(let round = 0; round < 10; round++) {
        activityTemplates.forEach((template, templateIndex) => {
            contexts.forEach((context, contextIndex) => {
                const topic = activityTopics.find(t => t.id === template.topic);
                const level = activityLevels[(round + templateIndex + contextIndex) % activityLevels.length];
                questions.push({
                    id: `${template.topic}-${round + 1}-${contextIndex + 1}`,
                    topic: template.topic,
                    topicLabel: topic.label,
                    competence: topic.competence,
                    level,
                    stem: `${template.stem} Contexto de treino: ${context}.`,
                    options: template.options,
                    answer: template.answer,
                    explanation: `${template.explanation} Aplicação ao tema "${context}": mantenha causa, consequência e intervenção conectadas ao recorte.`
                });
            });
        });
    }

    return questions;
}

const atividadesData = buildAtividadesData();
