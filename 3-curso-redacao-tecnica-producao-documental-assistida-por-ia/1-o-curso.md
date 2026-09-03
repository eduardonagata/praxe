# Engenharia documental assistida por IA

*Aprenda a estruturar a redação de documentos técnicos extensos para que a IA possa participar dela de maneira contínua, contextualizada e verificável.*

## Apresentação

Olá! Meu nome é Eduardo Nagata, sou analista de sistemas, desenvolvedor de software e servidor público. Como desenvolvedor, uso há alguns anos ferramentas avançadas de controle de versão e de codificação assistida por IA. Como servidor público, me pergunto: por que a redação de extensos documentos técnicos e oficiais, tão presente na nossa rotina, ainda é cheia de atrito e de copiar e colar entre ferramentas que não conversam entre si? O fluxo de trabalho é fragmentado e o custo cognitivo, alto.

Grande parte do trabalho intelectual realizado fora do desenvolvimento de software também consiste em produzir, analisar, transformar, sintetizar e comunicar grandes volumes de informação, principalmente na forma de documentos.

Advogados, contadores, engenheiros, analistas, pesquisadores, servidores públicos e gestores lidam diariamente com documentos que se referenciam uns aos outros, compartilham informações e precisam ser editados sem perder a coerência interna nem a conformidade com a norma culta da língua portuguesa.

Esse desafio cresce à medida que o volume de informação aumenta. E, quando recorremos a uma IA, ele reaparece a cada nova conversa: é preciso fornecer outra vez todo o contexto — muitas vezes espalhado por dezenas de documentos — para que ela compreenda o que estamos fazendo.

## O problema

Tenho certeza de que você já se viu em um fluxo de trabalho parecido com este:

1. "Preciso redigir um Estudo Técnico Preliminar para a compra dos itens X, Y e Z. Vou pedir ajuda da IA."
2. Abre o ChatGPT.
3. Passa uma hora redigindo um pedido com todas as especificidades necessárias, anexa documentos, imagens, etc. O trabalho de algumas horas fica em um campo de chat efêmero, sem garantia de ser recuperado em uma queda de energia e sem rastro do que originou o documento, quando e por quê. De algum modo você sente que deveria tratar melhor os seus prompts.
4. Enriquece o pedido com diversas instruções sobre como a IA deve realizar o trabalho, estilo de escrita, "não faça X, escreva isso de tal forma". As suas especificações de como o trabalho deve ser feito vivem em janelas de chat que serão esquecidas em uma semana, e você se vê repetindo as mesmas instruções inúmeras vezes.
5. Envia o pedido finalmente, com aquela pulga atrás da orelha: "será que não esqueci nenhuma informação importante?". Você sabe que sim e que precisará revisar.
6. Obtém uma primeira versão do ETP com mais de dez páginas.
7. Revisa, mostra para o chefe, lê novamente.
8. "Esqueci um detalhe importante, possivelmente conflitante ou que exigirá revisar várias seções do documento."
9. Faz algumas alterações no Word e pensa em pedir ajustes na janela de chat. Então para e pensa: "o chat não conhece as minhas novas inclusões e alterações, vai dar errado". O documento está evoluindo, mas o contexto da IA ficou para trás.
10. Copia todo o conteúdo do Word, cola na janela de chat e pede os ajustes.
11. Obtém a resposta e pensa: "como eu sei que a IA alterou somente o que eu pedi?".
12. Cauteloso e desconfiado — com razão —, lê novamente todas as páginas.
13. Repete o processo mais algumas vezes e, no fim, tem uma sessão de chat pela qual não consegue rolar sem adquirir uma LER (Lesão por Esforço Repetitivo). Desse chat, 90% do conteúdo não tem utilidade final alguma: o que você quer guardar é o seu pedido inicial, que contém as informações factuais relevantes, e o resultado final do trabalho.

Você produziu um documento, mas o processo que levou até ele ficou enterrado em uma conversa de chat. Em um mar de texto barato gerado por IA, o conhecimento que você acumulou e expressou para produzir aquele documento é um dos ativos mais importantes do seu trabalho — e merece ser tratado como tal.

Não se trata de escrever perfeitamente segundo a norma culta ou de produzir uma formatação impecável — isso é trabalho para a IA. O que importa é o conhecimento factual, o contexto e as decisões que você fornece como matéria-prima para uma geração precisa.

O problema não é usar IA para escrever documentos. É que estamos tentando fazer trabalho documental dentro de uma interface projetada para conversar.

Nesse cenário, parte significativa da promessa de facilidade da IA se perde justamente na tarefa de preparar e atualizar o contexto de que ela precisa para trabalhar.

**A IA é poderosa. O trabalho de preparar contexto para ela é que continua ruim.**

Então qual seria a alternativa?

## O curso

> **E se, em vez de levar nossos documentos até a IA, nós colocássemos a IA dentro do ambiente onde esses documentos são produzidos?**

É isso que você vai aprender neste curso: criar um repositório de documentos inteiramente navegável pela IA. Esse repositório concentra o contexto, as instruções e os documentos necessários para o trabalho, permitindo que a IA opere diretamente sobre eles, em vez de depender de uma longa conversa que precisa ser reconstruída a cada tarefa.

E, como cada alteração é registrada, você consegue visualizar exatamente o que a IA modificou, revisar essas alterações e manter um histórico completo da evolução dos documentos.

## Tese central do curso

1. **A IA já é extremamente boa em geração de texto.** Portanto, aprender simplesmente "como escrever prompts melhores" tem valor limitado.

2. **Todo profissional possui conhecimento que a IA não possui.** Contexto factual, documentos, decisões, restrições, particularidades do processo, conhecimento acumulado, a conversa no corredor.

3. **Hoje, esse conhecimento fica fragmentado.** Word, e-mail, pastas, PDFs e históricos de chat.

4. **O chat é uma interface ruim para trabalho documental contínuo.** Cada conversa é uma espécie de sessão de trabalho: o contexto precisa ser reconstruído, as instruções são repetidas e o resultado fica misturado a todo o histórico da conversa.

5. **Desenvolvedores de software resolveram um problema estruturalmente semelhante.** Eles não copiam o código inteiro para um chatbot: **a IA trabalha dentro do ambiente que contém o código, o contexto e o histórico do projeto**.

6. **Esse paradigma pode ser replicado no trabalho documental.** Repositório + documentos estruturados + instruções persistentes + agente + versionamento + diff.

7. **Portanto, o profissional não desenvolvedor que precisa redigir documentos extensos também deve aprender a trabalhar dessa maneira**, porque esse fluxo de trabalho e essas mesmas ferramentas o servem igualmente bem.
