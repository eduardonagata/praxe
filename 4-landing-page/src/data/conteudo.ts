/**
 * Conteúdo textual da landing page.
 *
 * A fonte editorial destes textos são os documentos do repositório:
 *   ../3-curso-.../1-o-curso.md          → apresentação, problema, tese
 *   ../3-curso-.../2-nucleo-comum-....md → grade do curso
 *   ../2-habilitacao-ia-orgaos-publicos.md → entregas da consultoria
 *
 * Tudo aqui é renderizado como HTML estático no build: não há texto injetado
 * por JavaScript no cliente, e portanto não há conteúdo invisível ao buscador.
 */

export interface Modulo {
  numero: number;
  titulo: string;
  objetivo: string;
  topicos: string[];
}

export interface Etapa {
  texto: string;
  /** Anotação curta, em letra manuscrita, na margem. */
  margem?: string;
}

export interface Tese {
  afirmacao: string;
  desdobramento: string;
}

/* -------------------------------------------------------------------------
 * Abertura
 * ---------------------------------------------------------------------- */

export const apresentacao: string[] = [
  'Grande parte do trabalho intelectual realizado fora do desenvolvimento de software também consiste em produzir, analisar, transformar, sintetizar e comunicar grandes volumes de informação, principalmente na forma de documentos.',
  'Advogados, contadores, engenheiros, analistas, pesquisadores, servidores públicos e gestores lidam diariamente com documentos que se referenciam uns aos outros, compartilham informações e precisam ser editados sem perder a coerência interna nem a conformidade com a norma culta da língua portuguesa.',
  'Esse desafio cresce à medida que o volume de informação aumenta. E, quando recorremos a uma IA, ele reaparece a cada nova conversa: é preciso fornecer outra vez todo o contexto — muitas vezes espalhado por dezenas de documentos — para que ela compreenda o que estamos fazendo.',
];

/* -------------------------------------------------------------------------
 * O problema — o fluxo de trabalho de sempre
 * ---------------------------------------------------------------------- */

export const etapasDoProblema: Etapa[] = [
  {
    texto:
      '“Preciso redigir um Estudo Técnico Preliminar para a compra dos itens X, Y e Z. Vou pedir ajuda da IA.”',
  },
  { texto: 'Abre o ChatGPT.' },
  {
    texto:
      'Passa uma hora redigindo um pedido com todas as especificidades necessárias, anexa documentos, imagens, etc. O trabalho de algumas horas fica em um campo de chat efêmero, sem garantia de ser recuperado em uma queda de energia e sem rastro do que originou o documento, quando e por quê.',
    margem: 'você sente que deveria tratar melhor os seus prompts',
  },
  {
    texto:
      'Enriquece o pedido com diversas instruções sobre como a IA deve realizar o trabalho, estilo de escrita, “não faça X, escreva isso de tal forma”. Essas especificações vivem em janelas de chat que serão esquecidas em uma semana, e você se vê repetindo as mesmas instruções inúmeras vezes.',
  },
  {
    texto:
      'Envia o pedido finalmente, com aquela pulga atrás da orelha: “será que não esqueci nenhuma informação importante?”. Você sabe que sim e que precisará revisar.',
  },
  { texto: 'Obtém uma primeira versão do ETP com mais de dez páginas.' },
  { texto: 'Revisa, mostra para o chefe, lê novamente.' },
  {
    texto:
      '“Esqueci um detalhe importante, possivelmente conflitante ou que exigirá revisar várias seções do documento.”',
  },
  {
    texto:
      'Faz algumas alterações no Word e pensa em pedir ajustes na janela de chat. Então para e pensa: “o chat não conhece as minhas novas inclusões, vai dar errado”.',
    margem: 'o documento evoluiu, o contexto da IA ficou para trás',
  },
  { texto: 'Copia todo o conteúdo do Word, cola na janela de chat e pede os ajustes.' },
  { texto: 'Obtém a resposta e pensa: “como eu sei que a IA alterou somente o que eu pedi?”.' },
  { texto: 'Cauteloso e desconfiado — com razão —, lê novamente todas as páginas.' },
  {
    texto:
      'Repete o processo mais algumas vezes e, no fim, tem uma sessão de chat pela qual não consegue rolar sem correr o risco de uma LER. Desse chat, 90% do conteúdo não tem utilidade final alguma: o que você quer guardar é o seu pedido inicial, que contém as informações factuais relevantes, e o resultado final do trabalho.',
    margem: '90% é descarte',
  },
];

export const fechamentoDoProblema: string[] = [
  'Você produziu um documento, mas o processo que levou até ele ficou enterrado em uma conversa de chat. Em um mar de texto barato gerado por IA, o conhecimento que você acumulou e expressou para produzir aquele documento é um dos ativos mais importantes do seu trabalho — e merece ser tratado como tal.',
  'Não se trata de escrever perfeitamente segundo a norma culta ou de produzir uma formatação impecável — isso é trabalho para a IA. O que importa é o conhecimento factual, o contexto e as decisões que você fornece como matéria-prima para uma geração precisa.',
  'O problema não é usar IA para escrever documentos. É que estamos tentando fazer trabalho documental dentro de uma interface projetada para conversar.',
  'Nesse cenário, parte significativa da promessa de facilidade da IA se perde justamente na tarefa de preparar e atualizar o contexto de que ela precisa para trabalhar.',
];

export const frase = 'A IA é poderosa. O trabalho de preparar contexto para ela é que continua ruim.';

/* -------------------------------------------------------------------------
 * O curso — a virada
 * ---------------------------------------------------------------------- */

export const pergunta =
  'E se, em vez de levar nossos documentos até a IA, nós colocássemos a IA dentro do ambiente onde esses documentos são produzidos?';

export const propostaDoCurso: string[] = [
  'É isso que você vai aprender neste curso: criar um repositório de documentos inteiramente navegável pela IA. Esse repositório concentra o contexto, as instruções e os documentos necessários para o trabalho, permitindo que a IA opere diretamente sobre eles, em vez de depender de uma longa conversa que precisa ser reconstruída a cada tarefa.',
  'E, como cada alteração é registrada, você consegue visualizar exatamente o que a IA modificou, revisar essas alterações e manter um histórico completo da evolução dos documentos.',
];

export const teses: Tese[] = [
  {
    afirmacao: 'A IA já é extremamente boa em geração de texto.',
    desdobramento:
      'Portanto, aprender simplesmente “como escrever prompts melhores” tem valor limitado.',
  },
  {
    afirmacao: 'Todo profissional possui conhecimento que a IA não possui.',
    desdobramento:
      'Contexto factual, documentos, decisões, restrições, particularidades do processo, conhecimento acumulado, a conversa no corredor.',
  },
  {
    afirmacao: 'Hoje, esse conhecimento fica fragmentado.',
    desdobramento: 'Word, e-mail, pastas, PDFs e históricos de chat.',
  },
  {
    afirmacao: 'O chat é uma interface ruim para trabalho documental contínuo.',
    desdobramento:
      'Cada conversa é uma espécie de sessão de trabalho: o contexto precisa ser reconstruído, as instruções são repetidas e o resultado fica misturado a todo o histórico da conversa.',
  },
  {
    afirmacao: 'Desenvolvedores de software resolveram um problema estruturalmente semelhante.',
    desdobramento:
      'Eles não copiam o código inteiro para um chatbot: a IA trabalha dentro do ambiente que contém o código, o contexto e o histórico do projeto.',
  },
  {
    afirmacao: 'Esse paradigma pode ser replicado no trabalho documental.',
    desdobramento:
      'Repositório + documentos estruturados + instruções persistentes + agente + versionamento + diff.',
  },
  {
    afirmacao:
      'Portanto, o profissional não desenvolvedor que redige documentos extensos também deve aprender a trabalhar assim.',
    desdobramento:
      'Esse fluxo de trabalho e essas mesmas ferramentas o servem igualmente bem.',
  },
];

/* -------------------------------------------------------------------------
 * Grade do curso
 * ---------------------------------------------------------------------- */

export const publicoAlvo =
  'Profissionais que produzem documentos técnicos, formais ou extensos como parte central do trabalho, sem formação em tecnologia. Não é necessário conhecimento prévio de programação, linha de comando ou ferramentas de desenvolvimento.';

export const resultadosDeAprendizagem: string[] = [
  'Produzir a primeira versão completa de um documento formal extenso com apoio de IA, em uma fração do tempo do método manual;',
  'Refinar esse documento por iterações sucessivas, identificando com precisão o que mudou a cada rodada, sem reler o texto integral;',
  'Aplicar formatação e identidade visual institucional ao resultado final de forma automatizada;',
  'Julgar com critério o que pode e o que não pode ser submetido a uma ferramenta de IA;',
  'Reconhecer os limites da ferramenta e o seu próprio papel de responsável pela revisão e validação do resultado.',
];

export const modulos: Modulo[] = [
  {
    numero: 1,
    titulo: 'Fundamentos práticos de IA generativa',
    objetivo:
      'Estabelecer um modelo mental correto da ferramenta, suficiente para usá-la bem e para reconhecer quando ela erra.',
    topicos: [
      'O que um modelo de linguagem faz e o que não faz',
      'Por que a IA erra com confiança: alucinação, invenção de referências e dados',
      'A diferença entre usar a IA como redator e como pesquisador — e por que a segunda função exige verificação',
      'Noções de contexto: por que a ferramenta “esquece”, e como isso afeta documentos longos',
      'Panorama das ferramentas disponíveis e critérios de escolha',
    ],
  },
  {
    numero: 2,
    titulo: 'Estruturação de instruções para documentos formais',
    objetivo:
      'Sair do uso improvisado de chat e passar a instruções replicáveis e consistentes.',
    topicos: [
      'Anatomia de uma boa instrução: papel, contexto, formato, restrições e critérios de qualidade',
      'Fornecer referências e exemplos: como usar documentos anteriores como padrão sem copiar conteúdo',
      'Instruções reutilizáveis: construir um repertório próprio em vez de improvisar a cada documento',
      'Documentos extensos: estratégias de decomposição por seção e montagem progressiva',
      'Controle de tom, registro e vocabulário formal',
      'Erros comuns que degradam o resultado',
    ],
  },
  {
    numero: 3,
    titulo: 'Revisão iterativa e controle de versões',
    objetivo:
      'Resolver o problema central de trabalhar com documentos longos gerados por IA — revisar sem reler tudo.',
    topicos: [
      'Por que a revisão é o gargalo real, não a geração',
      'O conceito de comparação de versões (diff) aplicado a texto formal',
      'Fluxo prático: gerar, comparar, aceitar ou rejeitar alterações, iterar',
      'Manter histórico de versões sem depender de “documento_final_v3_revisado.docx”',
      'Critérios de revisão: o que sempre deve ser verificado manualmente (dados, números, referências normativas, nomes, datas)',
    ],
  },
  {
    numero: 4,
    titulo: 'Formatação e identidade institucional',
    objetivo:
      'Transformar o texto produzido em documento final formatado, sem trabalho manual repetitivo.',
    topicos: [
      'Separação entre conteúdo e formatação: por que escrever em texto simples e formatar depois',
      'Introdução ao markdown como formato de escrita (30 minutos, sem jargão técnico)',
      'Conversão automatizada para documento formatado',
      'Uso de modelos de referência para aplicar identidade visual, cabeçalho, rodapé e estilos institucionais',
      'Manter múltiplos modelos para diferentes tipos de documento ou destinatários',
    ],
  },
  {
    numero: 5,
    titulo: 'Segurança da informação e limites de uso',
    objetivo:
      'Estabelecer critério próprio sobre o que submeter à ferramenta, antes que o hábito se forme errado.',
    topicos: [
      'O que acontece com o conteúdo enviado a uma ferramenta de IA: contas pessoais, contas corporativas e uso via API',
      'Categorias de informação e nível de cuidado: dados pessoais, informação sigilosa, conteúdo ainda não publicado, material sob restrição legal',
      'Por que o uso via conta pessoal em contexto profissional é um problema, mesmo sem má intenção',
      'Noções aplicadas de proteção de dados pessoais',
      'Como construir uma regra prática simples para a rotina, em vez de decidir caso a caso',
    ],
  },
  {
    numero: 6,
    titulo: 'Responsabilidade, revisão humana e governança do resultado',
    objetivo: 'Fixar o princípio que sustenta todo o método.',
    topicos: [
      'A IA produz rascunho; a pessoa revisa, valida e assina',
      'Consequências práticas de publicar conteúdo não verificado',
      'Checklist de validação antes de considerar um documento pronto',
      'Registro do processo: como demonstrar, se questionado, que houve revisão humana',
      'Comunicação interna: alinhar a equipe sobre o que é e o que não é uso aceitável',
    ],
  },
];

export const preRequisitos: string[] = [
  'Uso básico de computador e de editor de texto',
  'Nenhum conhecimento prévio de programação ou de IA',
  'Acesso a uma ferramenta de IA generativa durante o treinamento',
];

/* -------------------------------------------------------------------------
 * O ciclo de trabalho ensinado no curso
 * ---------------------------------------------------------------------- */

export interface Passo {
  rotulo: string;
  titulo: string;
  detalhe: string;
}

export const cicloDeTrabalho: Passo[] = [
  {
    rotulo: 'você',
    titulo: 'Escreve o que sabe',
    detalhe: 'Em tópicos soltos, fora de ordem, em linguagem coloquial.',
  },
  {
    rotulo: 'a IA',
    titulo: 'Redige no repositório',
    detalhe: 'Com o contexto, os documentos e as suas instruções à mão.',
  },
  {
    rotulo: 'você',
    titulo: 'Compara as versões',
    detalhe: 'Vê apenas o que mudou, sem reler o documento inteiro.',
  },
  {
    rotulo: 'você',
    titulo: 'Revisa e assina',
    detalhe: 'Com a formatação institucional aplicada automaticamente.',
  },
];

/* -------------------------------------------------------------------------
 * Consultoria
 * ---------------------------------------------------------------------- */

export const consultoriaAbertura: string[] = [
  'Hoje, na maioria dos órgãos públicos de pequeno e médio porte, a IA já está em uso — mas de forma invisível e sem governança. Servidores utilizam contas pessoais de ferramentas gratuitas para acelerar a redação de documentos, muitas vezes inserindo conteúdo administrativo em plataformas que o órgão não contratou, não monitora e sobre as quais não tem qualquer controle de tratamento de dados.',
  'O risco existe independentemente de haver política sobre o assunto; a ausência de uma solução institucional é justamente o que empurra o uso para a informalidade. Esta consultoria entrega ao órgão um caminho completo — da contratação ao uso monitorado — para que a IA generativa passe a operar dentro de um ambiente formal, auditável e sob responsabilidade institucional.',
];

export const entregasDaConsultoria: { titulo: string; texto: string }[] = [
  {
    titulo: 'Caminho de aquisição',
    texto:
      'Quais fornecedores podem prestar o serviço a órgãos públicos, quais modelos de contratação existem e como enquadrar a despesa na Lei 14.133/2021 — incluindo a interlocução técnica com fornecedores.',
  },
  {
    titulo: 'Previsibilidade de custo',
    texto:
      'Modelo de cobrança por consumo, estimativa de gasto mensal com base no volume real de documentos e definição de limites e alertas de uso.',
  },
  {
    titulo: 'Governança e conformidade',
    texto:
      'Política de uso documentada: o que pode e o que não pode ser submetido às ferramentas, como tratar documentos não publicados e como o uso se compatibiliza com a LGPD.',
  },
  {
    titulo: 'Integração ao fluxo real',
    texto:
      'Ferramentas configuradas no ambiente existente, com método de revisão que mostra o que mudou a cada versão e aplicação automática da identidade institucional.',
  },
  {
    titulo: 'Capacitação da equipe',
    texto:
      'Mínimo de 16 horas de treinamento prático sobre os documentos que o órgão efetivamente produz: ETPs, termos de referência, pareceres, ofícios e demais atos administrativos.',
  },
  {
    titulo: 'Responsabilidade e revisão humana',
    texto:
      'Um princípio inegociável: a IA produz rascunhos, servidores revisam e assinam. Nenhum documento é formalizado sem validação humana. Isso é parte do treinamento, não uma ressalva.',
  },
];

/* -------------------------------------------------------------------------
 * Quem ensina
 * ---------------------------------------------------------------------- */

export const sobreAutor = [
  'Olá! Meu nome é Eduardo Nagata, sou analista de sistemas, desenvolvedor de software e servidor público. Como desenvolvedor, uso há alguns anos ferramentas avançadas de controle de versão e de codificação assistida por IA.',
  'Como servidor público, me pergunto: por que a redação de extensos documentos técnicos e oficiais, tão presente na nossa rotina, ainda é cheia de atrito e de copiar e colar entre ferramentas que não conversam entre si? O fluxo de trabalho é fragmentado e o custo cognitivo, alto. Este curso é a resposta que construí para essa pergunta.',
];

/* -------------------------------------------------------------------------
 * Perguntas frequentes (também alimentam o JSON-LD de FAQ)
 * ---------------------------------------------------------------------- */

export const faq: { pergunta: string; resposta: string }[] = [
  {
    pergunta: 'Preciso saber programar para acompanhar o curso?',
    resposta:
      'Não. O curso é feito para profissionais sem formação em tecnologia. Não é exigido conhecimento prévio de programação, linha de comando ou ferramentas de desenvolvimento — apenas uso básico de computador e de editor de texto.',
  },
  {
    pergunta: 'Não sou servidor público. Será que funciona para mim?',
    resposta:
      'Funciona. O cerne do curso é a produção textual — como estruturar, gerar, revisar e formatar um documento extenso com apoio de IA —, e isso independe da aplicação. O curso usa fortemente exemplos de fluxos de trabalho do serviço público, porque é o ambiente que conheço de perto e onde as exigências formais são mais rígidas, mas as técnicas são imediatamente transferíveis para qualquer necessidade de produção documental.',
  },
  {
    pergunta: 'O curso ensina a usar uma ferramenta específica?',
    resposta:
      'O que se entrega é um método de trabalho, não a recomendação de um software. As ferramentas mudam rápido; o fluxo — repositório, instruções persistentes, comparação de versões, formatação automatizada — sobrevive à substituição de qualquer uma delas.',
  },
  {
    pergunta: 'Qual a diferença entre o curso e a consultoria?',
    resposta:
      'O curso ensina o método e você o implanta por conta própria. A consultoria implanta o método dentro do órgão: diagnóstico do fluxo atual, contratação regular do serviço de IA, ambiente configurado, treinamento da equipe, política de governança e suporte por 12 meses.',
  },
  {
    pergunta: 'A consultoria funciona para empresas privadas?',
    resposta:
      'Sim. O método trata especificamente da redação de textos técnicos extensos: qualquer organização que precise produzir muitos documentos se beneficia das técnicas apresentadas. O que muda de um ambiente para outro é o vocabulário, o tipo de documento e as exigências formais — não o fluxo de trabalho.',
  },
  {
    pergunta: 'Como fica a segurança da informação e a LGPD?',
    resposta:
      'Um módulo inteiro trata do assunto: o que acontece com o conteúdo enviado a uma ferramenta de IA, a diferença entre contas pessoais, contas corporativas e uso via API, e como construir uma regra prática de uso para a rotina em vez de decidir caso a caso.',
  },
  {
    pergunta: 'A IA vai assinar o documento no meu lugar?',
    resposta:
      'Não. O princípio que sustenta o método é o oposto: a IA produz rascunho, a pessoa revisa, valida e assina. O curso inclui checklist de validação e registro do processo, para demonstrar que houve revisão humana caso isso seja questionado.',
  },
  {
    pergunta: 'Meu órgão público pode contratar sem cartão de crédito?',
    resposta:
      'Sim. Órgãos que precisem de empenho, nota fiscal ou condições específicas de contratação podem tratar diretamente conosco, fora da plataforma de pagamento.',
  },
];
