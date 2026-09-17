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
  assinatura: 'consultoria e treinamento',
  autor: 'Eduardo Nagata',
  dominio: 'https://praxe.assistanthub.com.br',
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
 * Vídeos da seção de apresentação, na ordem em que aparecem.
 * `titulo` aparece acima de cada vídeo.
 * Deixe `embedUrl` vazio para exibir a moldura de espaço reservado.
 * Ex.: 'https://www.youtube.com/embed/XXXXXXXXXXX'
 *
 * `resumo` não aparece na página: é a descrição do vídeo nos dados
 * estruturados lidos pelos buscadores.
 */
export const videos = [
  {
    embedUrl: 'https://www.youtube.com/embed/ugopkj3cT30',
    titulo: 'Aula 1 — Apresentação',
    resumo:
      'Uma demonstração do método em funcionamento: um pedido escrito por você, um documento formal gerado a partir dele e a comparação lado a lado que mostra exatamente o que mudou entre uma versão e outra.',
  },
  {
    embedUrl: 'https://www.youtube.com/embed/bwB-pitu03Y',
    titulo: 'Aula 2 — O que você aprenderá a fazer',
    resumo:
      'Um percurso pela grade do curso: o que cada módulo ensina e o que você passa a fazer sozinho ao final de cada etapa.',
  },
] as const;

/** Extrai o identificador do vídeo de uma URL de incorporação do YouTube. */
export function idDoYoutube(embedUrl: string): string {
  return new URL(embedUrl).pathname.split('/').pop() ?? '';
}

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
  /** Etiqueta manuscrita presa ao topo do cartão. Omita para não exibir. */
  etiqueta?: string;
  destaque: boolean;
}

export const ofertas: Oferta[] = [
  {
    id: 'curso',
    nome: 'O curso',
    resumo: 'O método completo, gravado, para aplicar por conta própria.',
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
    cta: { rotulo: 'Quero o curso', href: '#' },
    etiqueta: 'comece por aqui',
    destaque: true,
  },
  {
    id: 'consultoria',
    nome: 'A consultoria',
    resumo:
      'Implantação assistida na organização, do caminho de aquisição ao ambiente em produção.',
    preco: 'Sob proposta',
    precoNota: 'escopo definido após diagnóstico',
    precoNumerico: null,
    itens: [
      'Diagnóstico do fluxo documental da organização',
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
