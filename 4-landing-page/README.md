# Landing page — curso e consultoria

Site estático em Astro + TypeScript. Uma única página, sem JavaScript no cliente:
todo o texto é gerado no build e já chega pronto ao rastreador do buscador.

## Rodar

```bash
cd 4-landing-page
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview  # serve o dist/
npm run check    # verificação de tipos
```

## O que editar

| O quê | Onde |
| --- | --- |
| **Nome da marca** (hoje "Praxe") | `src/config/site.ts` → `marca.nome` |
| Domínio (canonical, OG, sitemap) | `src/config/site.ts` → `marca.dominio` **e** `astro.config.mjs` → `SITE` |
| Título e subtítulo do curso | `src/config/site.ts` → `curso` |
| Links do menu | `src/config/site.ts` → `navegacao` |
| **Vídeo** | `src/config/site.ts` → `video.embedUrl` (vazio = moldura reservada) |
| **Preços** | `src/config/site.ts` → `ofertas` (valores provisórios: `R$ 0.000`) |
| Links de compra e contato | `src/config/site.ts` → `acoes` e `ofertas[].cta.href` |
| Todo o texto corrido | `src/data/conteudo.ts` |

O nome da marca não aparece literalmente em nenhum outro arquivo — trocar
`marca.nome` troca em toda a página, inclusive no `<title>` e nos dados estruturados.

## Antes de publicar

1. Trocar o domínio nos dois lugares indicados acima (e em `public/robots.txt`).
2. Definir os preços em `ofertas` e preencher `precoNumerico` para que a oferta
   entre no JSON-LD.
3. Colar a URL de incorporação do vídeo em `video.embedUrl`.
4. Gerar `public/og.png` (1200×630) — é a imagem exibida quando o link é
   compartilhado em redes e no WhatsApp.
5. Substituir os endereços de e-mail em `acoes`.

## Decisões de SEO

- Saída estática (`output: 'static'`): o HTML entregue já contém as ~3.000 palavras
  da página. Nada é injetado por JavaScript.
- Um único `<h1>`; seções em `<h2>`; módulos e perguntas em níveis abaixo.
- Dados estruturados schema.org em `src/layouts/BaseLayout.astro`: `Course` (com a
  grade em `syllabusSections`), `Organization`, `WebSite` e `FAQPage`. O bloco
  `VideoObject` só é emitido quando há vídeo configurado.
- Canonical, Open Graph, Twitter Card, `lang="pt-BR"` e `robots` no layout.
- Sitemap gerado por `@astrojs/sitemap`; `robots.txt` em `public/`.
- A grade do curso fica inteiramente visível — nada escondido atrás de clique.
  As perguntas frequentes usam `<details>`, que mantém o texto no HTML.
- CSS embutido no HTML quando pequeno (`inlineStylesheets: 'auto'`), fontes com
  `display=swap` e `preconnect`. Sem bundle de JavaScript.

## Origem do conteúdo

Os textos vêm dos documentos do repositório e estão consolidados em
`src/data/conteudo.ts`:

- `../3-curso-.../1-o-curso.md` — apresentação, problema e tese central
- `../3-curso-.../2-nucleo-comum-....md` — grade do curso
- `../2-habilitacao-ia-orgaos-publicos.md` — entregas da consultoria

Ao alterar um desses documentos, replicar a mudança em `src/data/conteudo.ts`.
