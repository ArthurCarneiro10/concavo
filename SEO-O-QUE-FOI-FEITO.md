# Côncavo — por que não aparecia no Google, e o que mudou

## A causa

O site tinha **três endereços diferentes escritos no código**, e nenhum era o
endereço real:

| Onde | O que dizia |
|---|---|
| Canonical da home | `concavoarquitetura.com.br` |
| Canonical dos 15 projetos | `concavoarquitetura.com` (sem o `.br`) |
| robots.txt e sitemap.xml | `concavo.vercel.app` |
| **Endereço de verdade** | `www.xn--cncavoarquitetura-yyb.com.br` |

A etiqueta canonical é o site dizendo ao Google: *"o conteúdo verdadeiro está
neste endereço"*. Todas as páginas apontavam para domínios que não existem ou
não respondem. O Google foi na página real, leu "não é aqui, é ali", foi ali,
não achou nada — e desistiu de indexar.

Não era falta de conteúdo nem de links. O site pedia, em toda página, para não
ser indexado onde ele de fato está.

## O que foi corrigido

**Endereço unificado** nas 19 páginas, no sitemap e no robots.

**Página duplicada resolvida.** Existiam `projeto-castell-maria.html` e
`projeto-castell-de-maria.html` com o mesmo conteúdo e o mesmo título. Duas
páginas iguais competem entre si e diluem a força. A menos ligada agora aponta
para a principal e sai do índice.

**Sitemap refeito:** 18 páginas com data de hoje, contra 13 desatualizadas
apontando para o endereço errado.

**Dados estruturados em todas as páginas** — 37 blocos, todos validados:

- o escritório, com endereço, telefone, serviços e as seis cidades atendidas
- cada projeto como obra criativa, com autor e localização
- trilha de navegação em cada projeto (aparece no Google como Início › Portfólio › Nome)
- o portfólio como lista dos 15 projetos
- cinco perguntas frequentes na home

As perguntas frequentes são as que as pessoas realmente digitam: quanto custa,
se atende fora de Santos, se dá para ver antes da obra. Elas podem virar
resposta direta no Google e são o que um assistente de IA lê ao responder
"arquiteto em Santos".

**robots.txt liberando os robôs de IA** de propósito — GPTBot, ClaudeBot,
PerplexityBot e Google-Extended. Muita gente bloqueia por reflexo; para um
escritório que quer ser encontrado, bloquear é perder aparição.

**llms.txt**, um resumo do site em texto puro que os assistentes de IA leem
para entender o negócio sem precisar interpretar o HTML.

---

## O que você precisa fazer (não dá para fazer por código)

### 1. Search Console — é isto que resolve

Sem isso, o Google pode levar meses para reparar sozinho.

1. Entre em search.google.com/search-console
2. Adicione a propriedade com **prefixo de URL**: `https://www.xn--cncavoarquitetura-yyb.com.br`
3. Verifique (a Vercel permite pelo registro DNS)
4. Vá em **Sitemaps** e envie `sitemap.xml`
5. Use a **Inspeção de URL** na home e clique em *Solicitar indexação*
6. Repita a inspeção nas páginas principais: portfólio e orçamento

Resultado costuma aparecer em dias, não meses.

### 2. Perfil da Empresa no Google

Para busca local, isso pesa mais que o site. Cadastre em
business.google.com com o mesmo nome, endereço e telefone do site, categoria
"Arquiteto" ou "Designer de interiores", e as fotos dos projetos.

Um escritório em Santos que aparece no mapa ganha de um site bem otimizado que
não aparece.

### 3. O domínio com acento — a decisão mais importante

`côncavoarquitetura.com.br` vira `xn--cncavoarquitetura-yyb.com.br` para os
navegadores. Isso traz três problemas: ninguém digita acento em endereço,
fica ilegível quando compartilhado, e alguns sistemas de e-mail e redes
sociais tratam mal.

**Recomendo registrar `concavoarquitetura.com.br`, sem acento**, e redirecionar
o antigo para ele. Custa R$ 40 por ano no Registro.br.

Se fizer isso, refaça a troca de endereço nos arquivos antes de publicar — é o
mesmo procedimento, trocando o domínio.

**Faça essa escolha antes do passo 1.** Cadastrar no Search Console e depois
mudar de domínio joga fora o trabalho de indexação.

### 4. O e-mail está em outro domínio

O site usa `contato@concavoarquitetura.com` — sem o `.br`, um terceiro
domínio. Para o Google, informação de contato inconsistente enfraquece o sinal
de confiança de um negócio local. Vale unificar.

---

## O que não foi mexido, e por quê

**Quatro imagens sem texto alternativo** na home e duas no portfólio. São
imagens decorativas, e nesse caso o texto vazio está correto — mas vale
conferir se alguma delas mostra um projeto, porque aí perde-se busca por
imagem.

**Velocidade e Core Web Vitals** não dá para medir sem o site no ar. Depois de
publicar, rode o PageSpeed Insights. As fotos já estão em WebP com dimensões
declaradas, que é a parte mais difícil — provavelmente está bom.

**Conteúdo em texto.** O site é visual, com pouco texto por página. Isso limita
para quais buscas ele pode aparecer. O caminho natural é cada página de projeto
ganhar dois ou três parágrafos contando a história daquele espaço: o que a
família precisava, o que foi resolvido, quais materiais e por quê. Google e IA
precisam de texto para entender do que se trata — e esse texto vende o
escritório melhor que a foto sozinha.
