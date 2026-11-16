# Plano de implementação — A. J. P. Refrigeração

## Escopo e abordagem

Construir um site institucional estático em Astro 7, com HTML de conteúdo gerado no build (SSG), sem backend, banco de dados ou dependências de interface pesadas. A fonte pública canônica será `https://ajprefrigeracao.com.br/`, sempre sem `www` e com HTTPS. O site terá seis rotas indexáveis: início, quatro páginas de serviço e área de atendimento.

A arquitetura usará um layout compartilhado para metadados, dados estruturados, acessibilidade e rodapé; componentes reutilizáveis para cabeçalho, breadcrumbs, cartões de serviço, FAQ, CTAs e botão flutuante; e uma camada de dados centralizada para manter telefone, WhatsApp, Instagram, serviços, mensagens e localidades consistentes. Não serão inventados endereço físico, avaliações, horários, certificações, marcas, preços, garantias ou serviços não confirmados.

As fotos reais serão reutilizadas quando existirem no repositório. Como o repositório recebido está vazio, a primeira versão não usa banco de imagens nem cria fotografias fictícias; a composição visual usa formas, bordas e ilustrações CSS discretas, deixando pontos claros para inserir os materiais reais quando forem fornecidos.

## Estrutura do projeto

- `src/layouts/SiteLayout.astro`: HTML base, SEO por rota, Open Graph/Twitter, canonical, JSON-LD e skip link.
- `src/components/`: Header, Footer, Breadcrumbs, ServiceCard, FAQ, WhatsAppButton, ServicePage e elementos de conversão.
- `src/data/site.ts`: identidade, contatos, serviços, localidades de referência e perguntas frequentes.
- `src/pages/`: páginas públicas com conteúdo semântico e links internos.
- `src/styles/global.css`: tokens visuais, grid responsivo, foco, movimento reduzido e estilos de componentes.
- `public/`: robots, sitemap, llms.txt, manifest, favicon e manifesto de rotas do Webdev.
- `plan.md` e `TODO.md`: decisões e critérios de entrega.

## Direção visual

### Explorações iniciais

- **Editorial técnico contemporâneo** — probabilidade 0,07: tipografia limpa, etiquetas técnicas e ritmo de catálogo de serviço.
- **Minimalismo solar de oficina** — probabilidade 0,05: azul profundo com verde e amarelo pontuais, superfícies claras e sinalização precisa.
- **Brutalismo utilitário suave** — probabilidade 0,03: blocos mais densos, contrastes diretos e linhas de interface aparentes.

### Direção escolhida: Editorial técnico contemporâneo

- **Movimento:** editorial técnico contemporâneo, traduzindo precisão de manutenção em uma interface serena e legível.
- **Princípios:** clareza antes do efeito; proximidade sem promessa exagerada; informação escaneável; contraste com intenção.
- **Filosofia de cor:** azul-marinho ancora confiança e legibilidade; verde sinaliza disponibilidade e cuidado; amarelo funciona como marca de atenção e chamada; fundos quase brancos deixam a paleta respirar.
- **Paradigma de layout:** hero assimétrico com texto e painel técnico visual, seções com trilho lateral e blocos em largura controlada; a navegação organiza o percurso sem transformar a página em um mural de cards iguais.
- **Elementos assinatura:** marcadores numéricos em verde, linhas de fluxo inspiradas em ar em movimento e pequenos selos amarelos de orientação.
- **Interação:** CTAs são contextuais e discretos; WhatsApp usa mensagem específica por página; menu mobile abre apenas quando solicitado, sem script para o conteúdo principal.
- **Animação:** entrada suave de pequenos blocos e linhas, somente quando o usuário não ativar `prefers-reduced-motion`; nenhuma animação bloqueia leitura ou navegação.
- **Tipografia:** sistema sans de alta legibilidade (`Inter`, `Segoe UI`, sans-serif), com monoespaçada apenas para etiquetas técnicas; H1 moderado e títulos com peso, não escala exagerada.
- **Essência da marca:** assistência externa em refrigeração e climatização para São José dos Campos, com informação direta para o cliente pedir atendimento no endereço dele. Personalidade: objetiva, cuidadosa, acessível.
- **Voz:** direta, explicativa e local, sem superlativos vazios. Exemplos: “Seu equipamento funcionando com mais clareza.” e “Fale pelo WhatsApp e explique o que precisa.”
- **Wordmark/marca de interface:** nome tipográfico acompanhado por três barras de fluxo nas cores da empresa; é um recurso visual do site, não substitui o logotipo oficial que ainda não foi disponibilizado.
- **Cor proprietária:** verde `#1d9b72`, usado como fio condutor de ação e orientação.

## Conteúdo e SEO

Cada página terá um único H1, título e descrição exclusivos, canonical absoluto, Open Graph, Twitter Card, idioma `pt-BR`, breadcrumbs visíveis e links internos contextuais. O layout emitirá Organization/HVACBusiness sem endereço, WebSite, Service, BreadcrumbList e FAQPage somente quando a FAQ estiver visível na página. `areaServed` ficará centrado em São José dos Campos e os bairros serão apresentados como regiões de referência a confirmar no contato, nunca como promessa automática.

O sitemap e o robots serão mantidos como arquivos públicos; `llms.txt` organizará fatos públicos sem prometer indexação em IA. Os CTAs abrirão os dois WhatsApps com mensagens contextualizadas e o Instagram oficial. Não haverá avaliações ou depoimentos até que existam dados reais autorizados.

## Build e entrega

Dependências serão instaladas com lockfile. O build será `astro build`, com saída em `dist/`. O projeto será validado por build, verificação das rotas geradas, inspeção de metadados/JSON-LD, conferência de sitemap/robots/llms/manus-routes, checagem de links internos e leitura visual em desktop/mobile quando necessário. A implementação será sincronizada ao repositório GitHub informado, preservando o histórico vazio existente.
