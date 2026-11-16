export const company = {
  name: 'A. J. P. Refrigeração',
  shortName: 'AJP Refrigeração',
  url: 'https://ajprefrigeracao.com.br',
  cnpj: '46.046.700/0001-18',
  city: 'São José dos Campos',
  state: 'SP',
  regionLabel: 'São José dos Campos e região',
  phonePrimary: '(12) 99617-5371',
  phoneSecondary: '(12) 98851-7684',
  whatsappPrimary: '5512996175371',
  whatsappSecondary: '5512988517684',
  instagramUrl: 'https://www.instagram.com/ajp_refrigeracao/',
  instagramHandle: '@ajp_refrigeracao',
} as const;

export const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Área de atendimento', href: '/area-de-atendimento/' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Contato', href: '/#contato' },
] as const;

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  description: string;
  icon: string;
  accent: 'green' | 'blue' | 'yellow';
  problems: string[];
  highlights: string[];
  faqs: { question: string; answer: string }[];
  whatsappMessage: string;
};

export const services: Service[] = [
  {
    slug: 'instalacao-de-ar-condicionado',
    title: 'Instalação de ar-condicionado',
    shortTitle: 'Instalação',
    eyebrow: 'Climatização',
    summary: 'Instalação de ar-condicionado em São José dos Campos, com orientação clara para o próximo passo.',
    description: 'A A. J. P. Refrigeração realiza instalação de ar-condicionado e instalação de split em São José dos Campos e região. Explique o que você precisa pelo WhatsApp para confirmar o atendimento.',
    icon: '↗',
    accent: 'green',
    problems: ['Equipamento novo aguardando instalação', 'Troca ou reorganização de um aparelho', 'Dúvidas sobre o serviço antes de solicitar atendimento'],
    highlights: ['Instalação de ar-condicionado', 'Instalação de split', 'Atendimento externo no endereço do cliente'],
    faqs: [
      { question: 'Onde solicitar instalação de ar-condicionado em São José dos Campos?', answer: 'Você pode falar diretamente com a A. J. P. Refrigeração pelo WhatsApp e informar o endereço e o que precisa ser instalado. A disponibilidade do atendimento é confirmada pelo contato.' },
      { question: 'A empresa instala aparelhos split?', answer: 'Sim. A instalação de split está entre os serviços informados pela A. J. P. Refrigeração. Envie os detalhes do equipamento pelo WhatsApp para receber orientação sobre o atendimento.' },
      { question: 'A instalação é residencial ou comercial?', answer: 'Essa modalidade não foi especificada previamente. Informe o tipo de local e o equipamento pelo WhatsApp para confirmar a possibilidade de atendimento.' },
    ],
    whatsappMessage: 'Olá! Acessei o site da A. J. P. Refrigeração e gostaria de solicitar informações sobre instalação de ar-condicionado.',
  },
  {
    slug: 'manutencao-de-ar-condicionado',
    title: 'Manutenção de ar-condicionado',
    shortTitle: 'Manutenção',
    eyebrow: 'Climatização',
    summary: 'Manutenção preventiva e corretiva de ar-condicionado em SJC, com atendimento combinado pelo WhatsApp.',
    description: 'A A. J. P. Refrigeração realiza manutenção de ar-condicionado em São José dos Campos e região. O atendimento pode começar com uma descrição do problema, do aparelho e do endereço.',
    icon: '◌',
    accent: 'blue',
    problems: ['Aparelho que não funciona como antes', 'Ruído, falha ou alteração percebida no equipamento', 'Necessidade de manutenção preventiva'],
    highlights: ['Manutenção de ar-condicionado', 'Manutenção preventiva e corretiva', 'Orientação inicial pelo WhatsApp'],
    faqs: [
      { question: 'Como solicitar manutenção de ar-condicionado?', answer: 'Envie uma mensagem pelo WhatsApp com uma breve descrição do equipamento, do que está acontecendo e do endereço. A A. J. P. Refrigeração confirma a disponibilidade do atendimento.' },
      { question: 'Quando o ar-condicionado precisa de assistência?', answer: 'Sinais como falhas de funcionamento, ruídos diferentes ou desempenho alterado podem indicar a necessidade de avaliação. Descreva o que você percebeu para receber a orientação adequada.' },
      { question: 'A manutenção pode ser preventiva?', answer: 'Sim. A manutenção preventiva está entre as frentes de atendimento informadas pela empresa. O tipo de serviço é confirmado conforme o equipamento e a necessidade apresentada.' },
    ],
    whatsappMessage: 'Olá! Acessei o site da A. J. P. Refrigeração e gostaria de solicitar informações sobre manutenção de ar-condicionado.',
  },
  {
    slug: 'higienizacao-de-ar-condicionado',
    title: 'Higienização de ar-condicionado',
    shortTitle: 'Higienização',
    eyebrow: 'Climatização',
    summary: 'Limpeza e higienização de equipamentos de ar-condicionado em São José dos Campos e região.',
    description: 'A A. J. P. Refrigeração realiza higienização e limpeza de ar-condicionado. Fale pelo WhatsApp para explicar o equipamento, o local e a necessidade de atendimento.',
    icon: '✦',
    accent: 'yellow',
    problems: ['Equipamento que precisa de limpeza', 'Acúmulo de sujeira percebido no aparelho', 'Manutenção do cuidado rotineiro do equipamento'],
    highlights: ['Higienização de ar-condicionado', 'Limpeza de equipamentos', 'Atendimento externo em São José dos Campos e região'],
    faqs: [
      { question: 'Quando é necessário higienizar o ar-condicionado?', answer: 'A higienização pode ser considerada quando o equipamento apresenta acúmulo de sujeira ou quando a limpeza faz parte do cuidado rotineiro. Explique a situação pelo WhatsApp para confirmar o serviço indicado.' },
      { question: 'A empresa realiza limpeza de ar-condicionado?', answer: 'Sim. Limpeza e higienização de ar-condicionado estão entre os serviços oferecidos pela A. J. P. Refrigeração.' },
      { question: 'A higienização elimina problemas de saúde?', answer: 'O site não faz alegações médicas nem promete resultados clínicos. O serviço é descrito como limpeza e higienização do equipamento.' },
    ],
    whatsappMessage: 'Olá! Acessei o site da A. J. P. Refrigeração e gostaria de solicitar informações sobre higienização de ar-condicionado.',
  },
  {
    slug: 'conserto-de-geladeira-e-freezer',
    title: 'Conserto de geladeira e freezer',
    shortTitle: 'Geladeira e freezer',
    eyebrow: 'Refrigeração doméstica',
    summary: 'Conserto de geladeiras e freezers em São José dos Campos, com assistência solicitada pelo WhatsApp.',
    description: 'A A. J. P. Refrigeração realiza conserto de geladeiras e freezers em São José dos Campos e região. Informe o equipamento e o problema para confirmar a possibilidade de atendimento.',
    icon: '▣',
    accent: 'blue',
    problems: ['Geladeira que não está funcionando corretamente', 'Freezer com falha percebida', 'Dúvidas sobre quando solicitar assistência'],
    highlights: ['Conserto de geladeiras', 'Conserto de freezers', 'Assistência em refrigeração doméstica'],
    faqs: [
      { question: 'A empresa realiza conserto de geladeiras?', answer: 'Sim. Conserto de geladeiras está entre os serviços informados pela A. J. P. Refrigeração. Envie uma mensagem com o problema e a localização para confirmar o atendimento.' },
      { question: 'A empresa conserta freezers?', answer: 'Sim. A empresa também informa o serviço de conserto de freezers em São José dos Campos e região.' },
      { question: 'A A. J. P. Refrigeração atende marcas específicas?', answer: 'Nenhuma marca específica foi informada. Envie os dados do aparelho pelo WhatsApp para confirmar a possibilidade de assistência.' },
    ],
    whatsappMessage: 'Olá! Acessei o site da A. J. P. Refrigeração e gostaria de informações sobre conserto de geladeira ou freezer.',
  },
];

export const serviceBySlug = Object.fromEntries(services.map((service) => [service.slug, service])) as Record<string, Service>;

export const regions = [
  {
    label: 'Zona Sul',
    places: ['Jardim Satélite', 'Bosque dos Eucaliptos', 'Parque Industrial', 'Jardim Oriente', 'Campo dos Alemães', 'Jardim Morumbi', 'Parque Interlagos'],
  },
  {
    label: 'Zona Norte',
    places: ['Santana', 'Alto da Ponte', 'Jardim Telespark', 'Vila Paiva', 'Altos de Santana'],
  },
  {
    label: 'Região Central e bairros próximos',
    places: ['Centro', 'Vila Ema', 'Jardim Esplanada', 'São Dimas', 'Jardim Apolo', 'Jardim Paulista'],
  },
  {
    label: 'Região Oeste',
    places: ['Jardim Aquarius', 'Urbanova', 'Jardim das Indústrias', 'Jardim Colinas'],
  },
  {
    label: 'Região Leste',
    places: ['Vista Verde', 'Novo Horizonte', 'Eugênio de Melo', 'Jardim São Vicente', 'Jardim Motorama'],
  },
] as const;

export const homepageFaqs = [
  { question: 'Onde encontrar serviço de instalação de ar-condicionado em São José dos Campos?', answer: 'A A. J. P. Refrigeração realiza instalação de ar-condicionado em São José dos Campos e região. Fale pelo WhatsApp para informar o equipamento e confirmar o atendimento.' },
  { question: 'A empresa atende quais bairros de São José dos Campos?', answer: 'A atuação principal é São José dos Campos e região. A disponibilidade por bairro deve ser confirmada no contato; a página de área de atendimento apresenta regiões de referência para essa conversa.' },
  { question: 'Como solicitar manutenção de ar-condicionado?', answer: 'Envie uma mensagem pelo WhatsApp com o equipamento, o problema percebido e a localização. A empresa retorna com a orientação inicial e a confirmação de disponibilidade.' },
  { question: 'Quando é necessário higienizar o ar-condicionado?', answer: 'A higienização pode ser solicitada quando houver necessidade de limpeza do equipamento ou como parte do cuidado rotineiro. Descreva a situação para receber a orientação adequada.' },
  { question: 'A empresa realiza conserto de geladeiras e freezers?', answer: 'Sim. A A. J. P. Refrigeração informa conserto de geladeiras e conserto de freezers em São José dos Campos e região.' },
  { question: 'Como solicitar atendimento?', answer: 'Você pode falar com a empresa pelos dois números de WhatsApp disponíveis no site. Escolha um deles, explique o serviço desejado e informe a localização.' },
];

export function whatsAppUrl(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
