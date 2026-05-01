const conectivosData = [
{cat:"Início de Introdução",itens:[
{nome:"É inegável que",uso:"Abre com força afirmativa."},{nome:"Historicamente,",uso:"Contextualiza no tempo."},{nome:"Sob a ótica de [autor],",uso:"Abre com repertório."},{nome:"No cenário brasileiro contemporâneo,",uso:"Localiza no tempo e espaço."},{nome:"Em pleno século XXI,",uso:"Contraste temporal."},{nome:"Conforme previsto na Constituição Federal,",uso:"Abre com lei."},{nome:"Na perspectiva de [autor],",uso:"Introduz filósofo."},{nome:"Ao analisar o hodierno contexto,",uso:"Tom acadêmico formal."}
]},
{cat:"Apresentação da Tese (Intro)",itens:[
{nome:"Nesse contexto, é perceptível que",uso:"Liga repertório à tese."},{nome:"Diante disso, faz-se necessário analisar",uso:"Anuncia os dois argumentos."},{nome:"Por isso, urge uma discussão sobre",uso:"Tom de urgência."},{nome:"À vista disso, tanto [A1] quanto [A2] impulsionam",uso:"Antecipa D1 e D2."},{nome:"Esse panorama é sustentado não só por [A1], mas também por [A2].",uso:"Estrutura clássica nota 1000."}
]},
{cat:"Início do D1",itens:[
{nome:"Diante desse cenário,",uso:"Retoma a intro."},{nome:"Em primeira análise,",uso:"Sequencial."},{nome:"Sob esse viés,",uso:"Formal."},{nome:"Primordialmente,",uso:"Equivale a 'em primeiro lugar'."},{nome:"Mormente,",uso:"Significa 'principalmente'."},{nome:"De início, vale destacar que",uso:"Claro e objetivo."},{nome:"Sob essa lógica, convém destacar",uso:"Tom argumentativo."},{nome:"Acerca dessa temática,",uso:"Introduz o assunto."},{nome:"Faz-se mister mencionar",uso:"Tom acadêmico elevado."}
]},
{cat:"Início do D2 (Adição)",itens:[
{nome:"Ademais,",uso:"Clássico. Adiciona ideia nova."},{nome:"Outrossim,",uso:"Igualmente, do mesmo modo."},{nome:"Somado a isso,",uso:"Liga D1 ao D2."},{nome:"Além disso,",uso:"Simples e funcional."},{nome:"Paralelamente,",uso:"Ideias simultâneas."},{nome:"De maneira análoga,",uso:"Comparação."},{nome:"Outro fator relevante é",uso:"Direto."},{nome:"É válido destacar, também, que",uso:"Adiciona com ênfase."},{nome:"Nessa perspectiva,",uso:"Continuidade do raciocínio."}
]},
{cat:"Contraste / Oposição",itens:[
{nome:"Contudo,",uso:"Oposição direta."},{nome:"Todavia,",uso:"Equivalente a 'contudo'."},{nome:"Entretanto,",uso:"Oposição formal."},{nome:"No entanto,",uso:"Oposição."},{nome:"Em contrapartida,",uso:"Mostra o outro lado."},{nome:"Por outro lado,",uso:"Contraste."},{nome:"Não obstante,",uso:"Apesar disso."},{nome:"Apesar disso,",uso:"Concessão."},{nome:"Conquanto,",uso:"Embora, ainda que."},{nome:"Malgrado,",uso:"Apesar de (muito formal)."}
]},
{cat:"Causa e Consequência",itens:[
{nome:"Consequentemente,",uso:"Resultado direto."},{nome:"Em efeito,",uso:"Por conta disso."},{nome:"Por conseguinte,",uso:"Consequência lógica."},{nome:"Haja vista que",uso:"Tendo em vista."},{nome:"Isso ocorre porque",uso:"Explica a causa."},{nome:"Afirma-se isso, pois",uso:"Justifica a afirmação."},{nome:"Dado que",uso:"Causa objetiva."},{nome:"Uma vez que",uso:"Causa formal."},{nome:"Em virtude de",uso:"Causa formal."}
]},
{cat:"Exemplificação",itens:[
{nome:"A título de exemplo,",uso:"Introduz exemplo."},{nome:"Prova disso é",uso:"Evidência."},{nome:"Isso pode ser constatado",uso:"Comprova a tese."},{nome:"Um exemplo disso é",uso:"Direto."},{nome:"Tal panorama pode ser observado",uso:"Evidência formal."},{nome:"Isso é evidenciado por",uso:"Prova concreta."}
]},
{cat:"Conclusão (C5)",itens:[
{nome:"Portanto,",uso:"Clássico conclusivo."},{nome:"Logo,",uso:"Conclusivo direto."},{nome:"Diante do exposto,",uso:"Retoma tudo."},{nome:"Em suma,",uso:"Resumo final."},{nome:"Dessa forma,",uso:"Consequência lógica."},{nome:"Infere-se, portanto, que",uso:"Tom reflexivo."},{nome:"É premente, portanto,",uso:"Urgência na conclusão."},{nome:"Torna-se evidente que",uso:"Afirmação forte."},{nome:"Por tudo isso,",uso:"Fecha o raciocínio."}
]},
{cat:"Finalidade (Intervenção C5)",itens:[
{nome:"A fim de",uso:"Substitui 'para' (separado)."},{nome:"Com o fito de",uso:"Objetivo formal."},{nome:"Com o intuito de",uso:"Indica efeito da C5."},{nome:"Com a finalidade de",uso:"Objetivo claro."},{nome:"Para que",uso:"Simples e funcional."},{nome:"De modo que",uso:"Resultado esperado."},{nome:"Com o objetivo de",uso:"Direto."},{nome:"Com vistas a",uso:"Perspectiva de resultado."}
]},
{cat:"Detalhamento / Explicação",itens:[
{nome:"Ou seja,",uso:"Explica o que foi dito."},{nome:"Isto é,",uso:"Esclarece."},{nome:"Em outras palavras,",uso:"Reformula."},{nome:"Nesse sentido,",uso:"Aprofunda."},{nome:"Sob essa ótica,",uso:"Perspectiva analítica."},{nome:"Acerca disso,",uso:"Sobre o assunto."},{nome:"Partindo dessa lógica,",uso:"Raciocínio dedutivo."},{nome:"Nessa acepção,",uso:"Nesse significado/sentido."}
]},
{cat:"Conectivos Internos (dentro do parágrafo)",itens:[
{nome:"Dessa maneira,",uso:"Liga frases dentro do parágrafo."},{nome:"Tal premissa se verifica",uso:"Comprova o repertório."},{nome:"Nesse viés,",uso:"Nessa perspectiva."},{nome:"Seguindo esse raciocínio,",uso:"Continuidade lógica."},{nome:"A esse respeito,",uso:"Sobre isso."},{nome:"De forma análoga,",uso:"Comparação."},{nome:"Frente a isso,",uso:"Diante disso."},{nome:"Nesse rumo,",uso:"Nessa direção."}
]}
];

const dicionarioData = [
{bad:"Hoje em dia",good:"Hodiernamente / No contexto contemporâneo",desc:"Localiza no tempo presente.",ex:"Hodiernamente, é inegável que o problema X..."},
{bad:"Além disso",good:"Outrossim / Ademais / Somado a isso",desc:"Adiciona nova ideia.",ex:"Outrossim, cabe ressaltar a negligência..."},
{bad:"Diminuir",good:"Mitigar / Atenuar / Minimizar / Arrefecer",desc:"Reduzir o impacto.",ex:"A fim de mitigar esse entrave social..."},
{bad:"Causa",good:"Gênese / Estopim / Cerne / Raiz",desc:"Origem de um problema.",ex:"A omissão do Estado atua como a gênese do revés."},
{bad:"Ligado a",good:"Intrinsecamente ligado / Inerente / Atrelado",desc:"Conexão profunda.",ex:"A violência está intrinsecamente ligada à desigualdade."},
{bad:"Problema",good:"Entrave / Revés / Impasse / Chaga / Óbice / Mazela",desc:"Substitutos para 'problema'.",ex:"Para solucionar esse impasse..."},
{bad:"Importante",good:"Crucial / Fundamental / Imprescindível / Premente / Basilar",desc:"Relevância.",ex:"É imprescindível que medidas sejam tomadas..."},
{bad:"Muito",good:"Demasiadamente / Sobremaneira / Substancialmente",desc:"Intensidade.",ex:"O problema se agravou sobremaneira nos últimos anos..."},
{bad:"Mostrar",good:"Evidenciar / Explicitar / Denotar / Ratificar",desc:"Tornar visível.",ex:"Esse cenário evidencia a falha do Estado..."},
{bad:"Ajudar",good:"Fomentar / Impulsionar / Viabilizar / Propiciar",desc:"Ação positiva.",ex:"Cabe ao Estado fomentar políticas de inclusão..."},
{bad:"Achar / Pensar",good:"Inferir / Constatar / Depreender / Verificar",desc:"Opinião formal.",ex:"Infere-se, portanto, que a negligência estatal..."},
{bad:"Falar / Dizer",good:"Afirmar / Asseverar / Pontuar / Preconizar / Verbalizar",desc:"Declaração formal.",ex:"Conforme assevera o filósofo..."},
{bad:"Fazer",good:"Implementar / Efetivar / Executar / Engendrar / Materializar",desc:"Ação concreta.",ex:"Cabe ao governo implementar políticas públicas..."},
{bad:"Pessoas",good:"Indivíduos / Cidadãos / Coletividade / Corpo social",desc:"Referência à população.",ex:"É dever do Estado garantir aos cidadãos..."},
{bad:"Governo",good:"Poder Público / Esfera estatal / Administração pública / Estado",desc:"Referência ao governo.",ex:"Cabe ao Poder Público, por meio de..."},
{bad:"Sociedade",good:"Corpo social / Tecido social / Coletividade / Seara social",desc:"Grupo social.",ex:"O tecido social é impactado negativamente por..."},
{bad:"Aumentar",good:"Intensificar / Ampliar / Maximizar / Acentuar / Potencializar",desc:"Crescimento.",ex:"A fim de potencializar o acesso à educação..."},
{bad:"Acabar",good:"Erradicar / Extirpar / Dirimir / Sanar / Suprimir",desc:"Eliminar.",ex:"Para erradicar essa problemática..."},
{bad:"Mudar",good:"Reformular / Reestruturar / Reconfigurar / Transformar",desc:"Alteração.",ex:"É necessário reestruturar o modelo vigente..."},
{bad:"Começar",good:"Instaurar / Instituir / Inaugurar / Deflagrar",desc:"Iniciar algo.",ex:"Urge instaurar um novo paradigma de..."},
{bad:"Ver / Perceber",good:"Constatar / Verificar / Vislumbrar / Notar",desc:"Observação.",ex:"Constata-se que a realidade brasileira..."},
{bad:"Parar",good:"Cessar / Estancar / Interromper / Conter",desc:"Interrupção.",ex:"A fim de estancar o avanço desse problema..."},
{bad:"Piorar",good:"Agravar / Acentuar / Exacerbar / Recrudescer",desc:"Agravamento.",ex:"A negligência estatal recrudesce o cenário de..."},
{bad:"Coisa",good:"Aspecto / Fator / Elemento / Fenômeno / Questão",desc:"Termo genérico.",ex:"Tal fenômeno é resultado da omissão do Estado."},
{bad:"Bom / Boa",good:"Benéfico / Profícuo / Salutar / Virtuoso",desc:"Qualidade positiva.",ex:"A medida será profícua para a sociedade."},
{bad:"Ruim / Mau",good:"Nocivo / Deletério / Pernicioso / Nefasto",desc:"Qualidade negativa.",ex:"O impacto deletério dessa prática..."},
{bad:"Assim",good:"Dessa maneira / Dessa forma / Nesse sentido / Sob esse prisma",desc:"Continuidade.",ex:"Dessa maneira, torna-se evidente que..."},
{bad:"Mas / Porém",good:"Contudo / Todavia / Entretanto / Não obstante / Conquanto",desc:"Oposição.",ex:"Contudo, a realidade diverge do ideal constitucional..."},
{bad:"Porque",good:"Haja vista que / Uma vez que / Dado que / Porquanto / Visto que",desc:"Causa.",ex:"Haja vista que o Estado é omisso..."},
{bad:"Para",good:"A fim de / Com o fito de / Com o intuito de / Com vistas a",desc:"Finalidade.",ex:"A fim de mitigar os impactos de..."},
{bad:"Sobre",good:"Acerca de / No tocante a / No que tange a / Concernente a",desc:"A respeito de.",ex:"No que tange à educação, o Brasil..."},
{bad:"Segundo",good:"Conforme / De acordo com / Consoante / Sob a perspectiva de",desc:"Referência.",ex:"Conforme a Constituição Federal de 1988..."},
{bad:"Tipo",good:"Modalidade / Categoria / Espécie / Natureza",desc:"Classificação.",ex:"Essa modalidade de violência persiste no Brasil."},
{bad:"Grande",good:"Expressivo / Substancial / Vultuoso / Considerável",desc:"Tamanho/importância.",ex:"O impacto é expressivo na população vulnerável."},
{bad:"Velho / Idoso (pejorativo)",good:"Pessoa idosa / Indivíduo da terceira idade / Ancião / Pessoa longeva",desc:"Respeito ao idoso.",ex:"A pessoa idosa merece respeito e dignidade."},
{bad:"Precisa / Tem que",good:"Urge / É premente / Faz-se mister / É imperativo / Cabe a",desc:"Necessidade formal.",ex:"Urge que o Poder Público tome medidas..."},
{bad:"Ajuda / Auxílio",good:"Subsídio / Suporte / Assistência / Amparo",desc:"Apoio formal.",ex:"Por meio de subsídios governamentais..."},
];
