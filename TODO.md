# TODO — A. J. P. Refrigeração

## Estrutura, identidade e navegação

- [ ] Entregar um site institucional em Astro, com geração estática, componentes reutilizáveis, CSS organizado e JavaScript apenas quando necessário.
- [ ] Aplicar uma identidade visual minimalista e contemporânea usando verde, amarelo e azul de forma equilibrada, sem sombras, gradientes ou decoração excessivos.
- [ ] Implementar cabeçalho compacto e responsivo com Início, Serviços, Área de atendimento, Sobre e Contato; garantir navegação funcional no desktop e mobile.
- [ ] Criar hero com nome da empresa, especialidade, São José dos Campos e CTA discreto de WhatsApp; manter H1 moderado e primeira dobra bem aproveitada.

## Páginas e conteúdo

- [ ] Publicar `/` com hero, apresentação, serviços, atributos factuais, orientações de atendimento, área de atuação, FAQ, CTA e rodapé.
- [ ] Publicar `/instalacao-de-ar-condicionado/` com conteúdo específico, instalação de split, dúvidas frequentes e CTA contextualizado, sem afirmar modalidades não confirmadas.
- [ ] Publicar `/manutencao-de-ar-condicionado/` com manutenção preventiva/corretiva, sinais de assistência e FAQ.
- [ ] Publicar `/higienizacao-de-ar-condicionado/` com limpeza e higienização, importância do serviço e FAQ sem alegações médicas.
- [ ] Publicar `/conserto-de-geladeira-e-freezer/` com conserto de geladeiras/freezers, problemas comuns e orientação de assistência, sem marcas específicas.
- [ ] Publicar `/area-de-atendimento/` com São José dos Campos, regiões e bairros como referência a validar, sem criar páginas artificiais ou inventar cobertura.
- [ ] Criar página 404 personalizada, com rota de retorno e contatos principais.

## SEO técnico, GEO e AEO

- [ ] Entregar title, meta description, canonical, Open Graph, Twitter Cards e `pt-BR` exclusivos por rota, com um H1 por página.
- [ ] Implementar JSON-LD coerente para Organization/HVACBusiness, WebSite, Service, BreadcrumbList e FAQPage somente quando houver FAQ visível; não inserir endereço, coordenadas, notas, reviews, preços ou horários inventados.
- [ ] Criar `sitemap.xml`, `robots.txt`, `llms.txt`, favicon, manifest e `manus-routes.json`, mantendo URLs sem acentos e canônicas em HTTPS sem www.
- [ ] Usar conteúdo claro, factual, perguntas e respostas diretas, associação empresa-serviço-localidade e links internos úteis para mecanismos de busca e resposta.

## Conversão, acessibilidade e performance

- [ ] Usar os dois destinos WhatsApp oficiais com mensagens iniciais por origem, link do Instagram e botão flutuante pequeno sem cobrir conteúdo mobile.
- [ ] Garantir alt natural, foco visível, contraste adequado, landmarks semânticos, skip link, labels e suporte a `prefers-reduced-motion`.
- [ ] Evitar bibliotecas pesadas; manter HTML inicial completo, layout sem rolagem horizontal, cards compactos e carregamento previsível.
- [ ] Reutilizar fotografias reais quando forem disponibilizadas; não usar banco de imagens ou inventar registros visuais de serviços.

## Validação e entrega

- [ ] Instalar dependências e gerar lockfile.
- [ ] Executar o build de produção e corrigir erros.
- [ ] Conferir as rotas, links internos, arquivos públicos, metadados e JSON-LD gerados.
- [ ] Sincronizar o resultado ao `origin/main` do repositório `rafael-rsadigital/ajprefrigeracao`, com commit usando `atendimento.rsadigital@gmail.com`.
- [ ] Registrar itens que ainda dependem de logo/fotografias reais e recomendações de próxima etapa.
