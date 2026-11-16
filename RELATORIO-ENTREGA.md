# Relatório de entrega — A. J. P. Refrigeração

## Resumo

Foi desenvolvido e sincronizado um site institucional estático em Astro para a A. J. P. Refrigeração. O projeto está preparado para publicação no domínio canônico `https://ajprefrigeracao.com.br/`, com conteúdo em português do Brasil, foco em São José dos Campos e conversão principal pelo WhatsApp.

A implementação evita inventar endereço físico, coordenadas, avaliações, preços, horários, marcas, certificações, garantias, tempo de mercado ou serviços não confirmados. Como o repositório recebido estava vazio e não continha logo ou fotografias, a primeira versão usa uma composição visual própria em CSS/SVG, sem banco de imagens e sem fotografias fictícias.

## Páginas desenvolvidas

| Página | URL | Conteúdo principal |
| --- | --- | --- |
| Início | `/` | Hero, apresentação, serviços, atendimento, FAQ e CTAs |
| Instalação | `/instalacao-de-ar-condicionado/` | Instalação de ar-condicionado e split |
| Manutenção | `/manutencao-de-ar-condicionado/` | Manutenção preventiva/corretiva e sinais de assistência |
| Higienização | `/higienizacao-de-ar-condicionado/` | Limpeza e higienização de ar-condicionado |
| Geladeira e freezer | `/conserto-de-geladeira-e-freezer/` | Conserto de geladeiras e freezers |
| Área de atendimento | `/area-de-atendimento/` | São José dos Campos, regiões e bairros de referência |
| Erro | `/404.html` | Página 404 personalizada com retorno e WhatsApp |

## Estrutura técnica

- Astro `7.4.12`, `output: 'static'` e `trailingSlash: 'always'`.
- Componentes reutilizáveis para layout, cabeçalho, rodapé, breadcrumbs, cartões, FAQ, CTAs e WhatsApp.
- Dados centrais em `src/data/site.ts`, evitando divergência entre telefones, serviços, localidades e mensagens.
- CSS responsivo próprio em `src/styles/global.css`, com foco visível, skip link, landmarks semânticos e `prefers-reduced-motion`.
- JavaScript apenas no comportamento nativo de navegação; o conteúdo indexável está presente no HTML inicial.
- `.gitignore` exclui dependências e artefatos locais de build.

## SEO técnico, local, GEO e AEO

- Title e meta description exclusivos por rota.
- Canonical absoluto em HTTPS e domínio sem `www`.
- Open Graph e Twitter Cards com imagem social dedicada `public/social-card.svg` em proporção 1200×630.
- Idioma `pt-BR`, um H1 por página, URLs amigáveis e links internos contextuais.
- `public/sitemap.xml`, `public/robots.txt`, `public/llms.txt` e `public/manus-routes.json`.
- JSON-LD com Organization/HVACBusiness, WebSite, Service, BreadcrumbList nas páginas internas e FAQPage apenas nas páginas que exibem perguntas frequentes.
- `areaServed` centrado em São José dos Campos/SP, sem endereço físico ou coordenadas inventadas.
- Regiões e bairros aparecem como referências iniciais sujeitas a confirmação pelo WhatsApp, não como garantia automática de cobertura.
- Conteúdo orientado a respostas diretas: quem é a empresa, quais serviços realiza, onde atua, quais problemas podem motivar o contato e como solicitar atendimento.

## Conversão e canais

- WhatsApp principal: `https://wa.me/5512996175371`.
- WhatsApp secundário: `https://wa.me/5512988517684`.
- Mensagens iniciais contextualizadas por página de serviço.
- Botão flutuante compacto, sem cobrir o conteúdo principal no mobile.
- Instagram oficial: `https://www.instagram.com/ajp_refrigeracao/`.

## Validação realizada

- `npm ci`: concluído sem vulnerabilidades reportadas.
- `npm run check`: concluído com 0 erros, 0 avisos e 0 hints.
- `npm run build`: concluído com 7 páginas estáticas geradas, incluindo a 404.
- Preview HTTP: rotas públicas responderam 200; `/404.html` respondeu 404; sitemap, robots, llms.txt e manifesto de rotas responderam 200.
- Inspeção de HTML: todas as páginas têm title, canonical, JSON-LD e exatamente um H1.
- Inspeção visual: home, serviço e área de atendimento conferidas em desktop 1280×720 e mobile 375×812.

## Problemas encontrados e corrigidos

1. O repositório GitHub original estava vazio; o projeto foi inicializado preservando o clone original e sincronizado ao `main`.
2. O Astro iniciou inicialmente na porta padrão 4321; o script foi ajustado para a porta 3000 do Preview.
3. O Astro Check apontou uma tipagem incorreta no agrupamento do JSON-LD e um import sem uso; ambos foram corrigidos.
4. A imagem social inicialmente apontava para o favicon; foi criada uma imagem social dedicada em SVG.
5. Os links literais do WhatsApp no cabeçalho foram centralizados na função de dados compartilhados.

## Itens que ainda dependem de informações ou ações da empresa

- Logo oficial da empresa.
- Fotografias reais de instalações, manutenções, higienizações e equipamentos, com autorização de uso.
- Confirmação operacional dos bairros e regiões efetivamente atendidos.
- Confirmação de modalidades residencial/comercial, marcas atendidas, horários, garantias, certificações e demais condições, caso devam ser comunicadas.
- Avaliações reais e elegíveis, caso a empresa queira incluí-las futuramente.
- Configuração de DNS, hospedagem/publicação e validação do domínio em produção.

## Recomendações para a próxima etapa

1. Inserir logo e fotografias reais no repositório, substituindo os pontos visuais abstratos sem alterar a arquitetura de SEO.
2. Confirmar a cobertura por bairro e revisar a linguagem da área de atendimento com base na operação real.
3. Publicar o build no domínio canônico e validar HTTPS, redirecionamento da versão com `www`, sitemap e robots no ambiente real.
4. Cadastrar ou revisar o Perfil da Empresa no Google sem usar endereço público inexistente; manter a configuração compatível com atendimento por área.
5. Após obter avaliações autorizadas, adicionar depoimentos reais sem criar notas ou reviews artificiais.
6. Monitorar Search Console, consultas locais e conversões de WhatsApp para orientar melhorias de conteúdo.

## Commits

- Checkpoint final: `25894e4f9f706113453914fe8201f47af52e18ac`.
- Repositório: `https://github.com/rafael-rsadigital/ajprefrigeracao`.
- E-mail de commit: `atendimento.rsadigital@gmail.com`.
