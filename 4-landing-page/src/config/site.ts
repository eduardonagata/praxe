/**
 * ---------------------------------------------------------------------------
 * PONTO ÚNICO DE EDIÇÃO DA MARCA, DOS PREÇOS E DOS LINKS.
 *
 * O nome "Praxe" é provisório. Para trocá-lo em toda a landing page, altere
 * apenas `marca.nome` (e, se quiser, `marca.assinatura`) abaixo — nenhum outro
 * arquivo repete o nome literalmente.
 * ---------------------------------------------------------------------------
 */

export interface Marca {
  /** Nome do produto/consultoria. Provisório: "Praxe". */
  nome: string;
  /** Complemento opcional exibido ao lado do nome no cabeçalho. */
  assinatura: string;
  /** Nome da pessoa responsável (autoria, JSON-LD e seção "Quem ensina"). */
  autor: string;
  /** Domínio público do site, sem barra final. Usado no canonical e no OG. */
  dominio: string;
}

export const marca: Marca = {
  nome: 'Praxe',
  assinatura: 'consultoria',
  autor: 'Eduardo Nagata',
  dominio: 'https://praxe.com.br',
};

/** Título e subtítulo do curso — provisórios, fáceis de substituir. */
export const curso = {
  titulo: 'Engenharia documental assistida por IA',
  subtitulo:
    'Aprenda a estruturar a redação de documentos técnicos extensos para que a IA possa participar dela de maneira contínua, contextualizada e verificável.',
  /** Aparece no <title> e nos resultados de busca. Até ~155 caracteres. */
  descricaoSeo:
    'Curso prático para quem redige documentos técnicos e oficiais extensos: monte um repositório navegável pela IA, revise por comparação de versões e formate com identidade institucional.',
} as const;

/** Navegação principal — dois destinos, o curso em primeiro lugar. */
export const navegacao = [
  { rotulo: 'O curso', href: '#o-curso' },
  { rotulo: 'A consultoria', href: '#a-consultoria' },
] as const;

/**
 * Vídeo de apresentação.
 * Deixe `embedUrl` vazio para exibir a moldura de espaço reservado.
 * Ex.: 'https://www.youtube.com/embed/XXXXXXXXXXX'
 */
export const video = {
  embedUrl: '',
  titulo: 'Apresentação do curso em 3 minutos',
  /**
   * Resumo em texto do vídeo. Fica visível na página e é lido pelos buscadores
   * — mecanismo de busca não assiste a vídeo, mas lê a transcrição.
   */
  resumo:
    'Uma demonstração do método em funcionamento: um pedido escrito por você, um documento formal gerado a partir dele e a comparação lado a lado que mostra exatamente o que mudou entre uma versão e outra.',
  duracao: 'PT3M',
} as const;

/** Chamadas para ação. Substitua pelos links reais (Hotmart, formulário, e-mail). */
export const acoes = {
  compraCurso: '#o-valor',
  contatoConsultoria: 'mailto:contato@exemplo.com.br?subject=Consultoria',
  contatoOrgaoPublico: 'mailto:contato@exemplo.com.br?subject=Contratação%20por%20órgão%20público',
} as const;

export interface Oferta {
  id: string;
  nome: string;
  resumo: string;
  /** PREÇO PROVISÓRIO — substituir antes de publicar. */
  preco: string;
  precoNota: string;
  /** Valor numérico para o JSON-LD. Use null enquanto não houver preço definido. */
  precoNumerico: number | null;
  itens: string[];
  cta: { rotulo: string; href: string };
  destaque: boolean;
}

export const ofertas: Oferta[] = [
  {
    id: 'nucleo',
    nome: 'Núcleo comum',
    resumo: 'O método completo, agnóstico a setor e a tipo de documento.',
    preco: 'R$ 0.000',
    precoNota: 'valor a definir',
    precoNumerico: null,
    itens: [
      '6 módulos gravados, de 8 a 12 horas de conteúdo',
      'Modelos de instrução prontos para reuso',
      'Arquivos de referência de formatação institucional',
      'Checklists de revisão e de segurança da informação',
      'Acesso vitalício e atualizações do material',
    ],
    cta: { rotulo: 'Quero o núcleo comum', href: '#' },
    destaque: false,
  },
  {
    id: 'nucleo-vertical',
    nome: 'Núcleo + vertical do setor público',
    resumo:
      'O método aplicado aos documentos que câmaras e prefeituras produzem todo dia.',
    preco: 'R$ 0.000',
    precoNota: 'valor a definir',
    precoNumerico: null,
    itens: [
      'Tudo do núcleo comum',
      '6 módulos adicionais da vertical do setor público',
      'ETP e termo de referência construídos seção a seção',
      'Governança, LGPD e política de uso institucional',
      'Aquisição e gestão do serviço de IA pelo ente público',
    ],
    cta: { rotulo: 'Quero as duas partes', href: '#' },
    destaque: true,
  },
  {
    id: 'consultoria',
    nome: 'Consultoria para órgãos públicos',
    resumo:
      'Implantação assistida, do caminho de aquisição ao ambiente em produção.',
    preco: 'Sob proposta',
    precoNota: 'escopo definido após diagnóstico',
    precoNumerico: null,
    itens: [
      'Diagnóstico do fluxo documental do órgão',
      'Ambiente configurado e operacional',
      'Mínimo de 16 horas de treinamento para a equipe',
      'Política de uso e governança documentada',
      'Suporte técnico ao ambiente por 12 meses',
    ],
    cta: { rotulo: 'Falar sobre a consultoria', href: '#a-consultoria' },
    destaque: false,
  },
];

/** Aviso para compras públicas — dispensa cartão de crédito. */
export const notaCompraPublica =
  'Órgãos públicos que precisem de empenho, nota fiscal ou condições específicas de contratação podem tratar diretamente conosco, fora da plataforma de pagamento.';
