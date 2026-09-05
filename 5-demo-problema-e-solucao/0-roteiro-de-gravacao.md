# Roteiro de gravação — vídeo curto de demonstração

**Duração alvo:** 80 a 90 segundos
**Sequência:** quadro no Freeform → VS Code com Claude Code → ETP → alteração → diff

## O quadro do Freeform

Três blocos na horizontal, com seta entre eles, e uma seta de retorno do terceiro para o segundo.

| Bloco | Título | Conteúdo |
| --- | --- | --- |
| 1 | O que chega | O bilhete cru, do jeito que chega ao setor |
| 2 | O que você escreve | Os itens, e o que você exige: sem marca, parâmetros verificáveis |
| 3 | O que sai | ETP com especificação defensável |

A seta de retorno, do bloco 3 para o 2, é rotulada **"a alteração"** — é ela que anuncia a segunda metade do vídeo antes de ela acontecer.

Fecha com a linha que já está na landing page: *Você escreve o que sabe. A IA dá forma. Você revisa e assina.*

Use a fonte **Caveat** nos rótulos manuscritos, a mesma do site, para o vídeo e a página parecerem a mesma peça.

## Planos

| Tempo | O que está na tela | Callout |
| --- | --- | --- |
| 0–14s | Quadro do Freeform, percorrido da esquerda para a direita | — |
| 14–18s | Corte para o VS Code. Pasta limpa, arquivo vazio | — |
| 18–36s | Você digitando o pedido (`2-pedido-etp.md`), acelerado | "com os erros e tudo" |
| 36–40s | Enter. Claude Code começa a trabalhar | — |
| 40–56s | Geração acelerada (800–2000%), ETP tomando forma | — |
| 56–62s | ETP pronto, rolagem rápida. Pausa numa seção de especificação | "nenhuma marca, tudo verificável" |
| 62–66s | Você confere uma citação normativa | "isto aqui continua sendo seu" |
| 66–70s | A segunda mensagem chega (`3-pedido-de-alteracao.md`) | — |
| 70–74s | Você escreve o pedido de alteração e envia | — |
| 74–80s | **Zoom-out:** documento inteiro ilegível, marcas coloridas no gutter e no minimapa | "três trechos, num documento de dez páginas" |
| 80–84s | **Zoom-in:** um hunk só, legível | — |
| 84–90s | Volta ao quadro do Freeform, seta de retorno acesa. Assinatura | — |

O par zoom-out → zoom-in é obrigatório, e **nessa ordem**. A mensagem do diff não é o que mudou, é que mudou pouco e dá para ver onde. Começando pelo texto, perde-se a proporção, que é o argumento inteiro.

## Antes de apertar o rec

- Fonte do VS Code em 16–18pt; esconder minimapa lateral, barra de atividades e status bar (o minimapa volta só para o plano do diff)
- Tema claro, que combina com o papel bege do site e lê melhor no celular
- Nenhum caminho pessoal ou nome de cliente real visível no path
- Gravar em resolução nativa Retina e editar em timeline 1080p: garante 2x de zoom sem perda
- Três ou quatro tomadas da geração, escolhendo a melhor saída — é saída real de modelo, e o que ele inventar vai para o vídeo
- Diff em modo **unificado**, nunca lado a lado: duas colunas de fonte pequena não sobrevivem ao vídeo vertical
