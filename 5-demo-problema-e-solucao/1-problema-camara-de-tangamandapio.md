# Cenário de demonstração — Câmara Municipal de Tangamandápio

**Versão:** 0.1 (rascunho inicial)
**Uso:** material de apoio às demonstrações do curso, do núcleo comum à vertical de setor público.
**Aviso:** órgão, pessoas e fatos são fictícios. Tangamandápio é o município de referência usado em todas as demonstrações.

## 1. Para que serve este documento

Este é o **insumo bruto** das demonstrações: o relato como ele efetivamente chega a quem vai formalizar a demanda. Não é um DFD, não é um ETP e não é um rascunho de nenhum dos dois.

A escolha é deliberada. Um cenário completo e organizado já traria pronto o trabalho que a demonstração precisa mostrar sendo feito — restaria à IA reescrever com boa forma um conteúdo que alguém já estruturou. O que se quer demonstrar é o contrário: que o servidor pode despejar o que sabe, do jeito que sabe, e ainda assim chegar a um documento formalmente defensável.

Por isso o relato abaixo é incompleto, desordenado e ambíguo nos mesmos pontos em que a demanda real costuma ser. **As lacunas são o exercício**, não um defeito a corrigir antes da aula.

## 2. O cenário

Câmara Municipal de Tangamandápio, município de pequeno porte. Nove vereadores. Cerca de vinte servidores entre efetivos e comissionados, distribuídos em secretaria legislativa, contabilidade, protocolo, recursos humanos, almoxarifado, controle interno e assessoria jurídica.

Não há setor de TI. O suporte é feito por um prestador que comparece duas vezes por semana.

A demanda parte da Diretoria Administrativa e chega, por mensagem, à servidora que responde pela instrução dos processos de contratação.

## 3. O relato, como ele chega

```
Fernanda, segue o que a gente conversou na quinta pra você ir formalizando.

Os computadores daqui já era. Foram comprados na gestão passada, acho que
2015, 2016 por aí — o Válter jura que é mais antigo que isso. A maioria
trava. O pessoal da contabilidade reclama todo mês no fechamento, o sistema
do Tribunal demora uma eternidade pra abrir e de vez em quando cai no meio
do envio, aí refaz tudo de novo.

Alguns já quebraram de vez. Tem duas máquinas paradas na sala do arquivo
que o Nélson (o rapaz da TI, que vem terça e quinta) disse que não vale
conserto, tirou peça de uma pra fazer a outra andar. O micro do protocolo
tá com um monitor emprestado do gabinete do vereador Adilson desde o ano
passado e ninguém devolveu.

Precisa trocar. Eu contei 14 máquinas, mas confere comigo: contei as dos
servidores, dos setores. Não pus os gabinetes dos vereadores porque o
Dr. Roberto falou que gabinete se resolve com verba de gabinete — só que
o presidente na reunião falou "troca tudo". Fica a dúvida.

O que eu não sei:

- se é desktop ou notebook. O Nélson acha melhor notebook por causa das
  sessões e do pessoal da folha que às vezes trabalha de casa. Eu acho que
  notebook some.
- se compra monitor junto ou aproveita os que tem. Alguns monitores parecem
  bons ainda.
- configuração certa. O Nélson mandou no WhatsApp "i5 de 12ª, 16 de RAM e
  SSD de 512", mas ele mesmo disse que ia confirmar depois.
- o sistema novo de licitação que a gente vai contratar tem um requisito
  mínimo de máquina lá no material deles, eu não achei onde.

Dinheiro: o seu Jaiminho comentou que tem por volta de 80 mil na dotação de
equipamento, mas que depende do que sobrar do ar-condicionado do plenário.
Não tomei como certo.

Prazo: o presidente quer resolvido esse ano. Recesso começa em dezembro,
então imagino que tenha que estar empenhado antes disso.

Ah, e a prefeitura fez uma ata de registro de preços de computador esse ano.
O pessoal comentou. Não sei se dá pra pegar carona ou se compensa.

Qualquer coisa me chama.
```

## 4. As ambiguidades, e por que estão aí

Cada lacuna abaixo é o gancho de um momento da demonstração. Quem conduz a aula não deve preenchê-las de antemão.

| O que está ambíguo no relato | O que o documento formal vai exigir |
| --- | --- |
| "Contei 14, mas confere comigo" | Quantitativo justificado, com o critério de contagem explícito |
| Gabinetes dentro ou fora ("troca tudo" × verba de gabinete) | Delimitação do objeto e de quem é atendido |
| "2015, 2016 por aí", contestado pelo Válter | Idade real do parque, apurada no patrimônio |
| Desktop ou notebook; monitor junto ou aproveitado | Definição do objeto antes de qualquer especificação |
| Configuração vinda de mensagem, não confirmada | Especificação técnica fundamentada, não descrita por marca |
| Requisito do sistema novo "que eu não achei" | Requisito localizado e citado, ou a demanda espera por ele |
| "Por volta de 80 mil", condicionado a outra despesa | Estimativa de valor e disponibilidade orçamentária |
| "Resolvido esse ano" | Prazo com a razão que o sustenta |
| Ata da prefeitura que "o pessoal comentou" | Forma de contratação analisada, não presumida |
| Travamento e lentidão relatados de ouvido | Necessidade descrita em termos de impacto no serviço |

O relato traz ainda dois elementos que **não** devem sobreviver ao documento formal, e que servem para demonstrar o descarte: nomes de colegas como fonte de informação e o empréstimo do monitor, que é sintoma útil ao diagnóstico mas não fundamenta a compra.

## 5. Situação de partida da demonstração

O objeto imediato não é o ETP. É o **Documento de Formalização da Demanda**: o primeiro ato do processo, que converte esse relato em uma demanda com objeto delimitado, justificativa e responsável identificado — e que registra, com todas as letras, o que ainda precisa ser apurado.

O ETP vem depois, e se apoia no que o DFD tiver deixado resolvido.
