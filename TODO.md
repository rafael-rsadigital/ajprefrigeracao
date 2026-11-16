# TODO — A. J. P. Refrigeração

> Status da primeira entrega: implementação, validação e sincronização concluídas. A única pendência de conteúdo é a inclusão do logotipo e das fotografias reais quando forem disponibilizados pela empresa; a publicação em produção permanece como etapa operacional posterior.

## Estrutura, identidade e navegação

- [x] Entregar um site institucional em Astro, com geração estática, componentes reutilizáveis, CSS organizado e JavaScript apenas quando necessário.
- [x] Aplicar uma identidade visual minimalista e contemporânea usando verde, amarelo e azul de forma equilibrada, sem sombras, gradientes ou decoração excessivos.
- [x] Implementar cabeçalho compacto e responsivo com Início, Serviços, Área de atendimento, Sobre e Contato; garantir navegação funcional no desktop e mobile.
- [x] Criar hero com nome da empresa, especialidade, São José dos Campos e CTA discreto de WhatsApp; manter H1 moderado e primeira dobra bem aproveitada.

## Páginas e conteúdo

- [x] Publicar `/` com hero, apresentação, serviços, atributos factuais, orientações de atendimento, área de atuação, FAQ, CTA e rodapé.
- [x] Publicar `/instalacao-de-ar-condicionado/` com conteúdo específico, instalação de split, dúvidas frequentes e CTA contextualizado, sem afirmar modalidades não confirmadas.
- [x] Publicar `/manutencao-de-ar-condicionado/` com manutenção preventiva/corretiva, sinais de assistência e FAQ.
- [x] Publicar `/higienizacao-de-ar-condicionado/` com limpeza e higienização, importância do serviço e FAQ sem alegações médicas.
- [x] Publicar `/conserto-de-geladeira-e-freezer/` com conserto de geladeiras/freezers, problemas comuns e orientação de assistência, sem marcas específicas.
- [x] Publicar `/area-de-atendimento/` com São José dos Campos, regiões e bairros como referência a validar, sem criar páginas artificiais ou inventar cobertura.
- [x] Criar página 404 personalizada, com rota de retorno e contatos principais.

## SEO técnico, GEO e AEO

- [x] Entregar title, meta description, canonical, Open Graph, Twitter Cards e `pt-BR` exclusivos por rota, com um H1 por página.
- [x] Implementar JSON-LD coerente para Organization/HVACBusiness, WebSite, Service, BreadcrumbList e FAQPage somente quando houver FAQ visível; não inserir endereço, coordenadas, notas, reviews, preços ou horários inventados.
- [x] Criar `sitemap.xml`, `robots.txt`, `llms.txt`, favicon, manifest e `manus-routes.json`, mantendo URLs sem acentos e canônicas em HTTPS sem www.
- [x] Usar conteúdo claro, factual, perguntas e respostas diretas, associação empresa-serviço-localidade e links internos úteis para mecanismos de busca e resposta.

## Conversão, acessibilidade e performance

- [x] Usar os dois destinos WhatsApp oficiais com mensagens iniciais por origem, link do Instagram e botão flutuante pequeno sem cobrir conteúdo mobile.
- [x] Garantir alt natural, foco visível, contraste adequado, landmarks semânticos, skip link, labels e suporte a `prefers-reduced-motion`.
- [x] Evitar bibliotecas pesadas; manter HTML inicial completo, layout sem rolagem horizontal, cards compactos e carregamento previsível.
- [ ] Reutilizar fotografias reais quando forem disponibilizadas; não usar banco de imagens ou inventar registros visuais de serviços.

## Validação e entrega

- [x] Instalar dependências e gerar lockfile.
- [x] Executar o build de produção e corrigir erros.
- [x] Conferir as rotas, links internos, arquivos públicos, metadados e JSON-LD gerados.
- [x] Sincronizar o resultado ao `origin/main` do repositório `rafael-rsadigital/ajprefrigeracao`, com commit usando `atendimento.rsadigital@gmail.com`.
- [x] Registrar itens que ainda dependem de logo/fotografias reais e recomendações de próxima etapa.
