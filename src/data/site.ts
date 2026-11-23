export const company = {
  name: 'A. J. P. Refrigeração',
  shortName: 'AJP Refrigeração',
  url: 'https://www.ajprefrigeracao.com.br',
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
  image?: { src: string; alt: string };
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
    eyebrow: 'Ar-condicionado',
    summary: 'Instalação de ar-condicionado em São José dos Campos e região.',
    description: 'A A. J. P. Refrigeração realiza instalação de ar-condicionado em São José dos Campos e região. Para consultar o serviço, informe pelo WhatsApp a marca e o modelo do aparelho, sua capacidade em BTUs, o endereço do local e se já existe infraestrutura para instalação.',
    icon: '↗',
    accent: 'green',
    image: { src: '/images/instalacao-ar-condicionado-apartamento.jpg', alt: 'Instalação de ar-condicionado em apartamento' },
    problems: ['Compra de um aparelho novo', 'Instalação de um equipamento que ainda não está em uso', 'Substituição ou mudança de local do aparelho'],
    highlights: ['Instalação de ar-condicionado'],
    faqs: [
      { question: 'A A. J. P. Refrigeração instala ar-condicionado split?', answer: 'Envie pelo WhatsApp o modelo do aparelho e o local da instalação para confirmar a disponibilidade do serviço.' },
      { question: 'O que preciso informar para solicitar a instalação?', answer: 'Informe a marca, o modelo, a capacidade em BTUs, o bairro e se o local já possui infraestrutura para instalação.' },
      { question: 'A instalação é feita em residências e comércios?', answer: 'Informe se a instalação será residencial ou comercial para confirmar a disponibilidade e os detalhes do serviço.' },
    ],
    whatsappMessage: 'Olá! Acessei o site da A. J. P. Refrigeração e gostaria de solicitar informações sobre instalação de ar-condicionado.',
  },
  {
    slug: 'manutencao-de-ar-condicionado',
    title: 'Manutenção de ar-condicionado',
    shortTitle: 'Manutenção',
    eyebrow: 'Ar-condicionado',
    summary: 'Manutenção de ar-condicionado em São José dos Campos e região.',
    description: 'A manutenção de ar-condicionado permite avaliar falhas e alterações no funcionamento do equipamento. A A. J. P. Refrigeração atende em São José dos Campos e região. Ao solicitar uma avaliação, descreva o problema, informe a marca e o modelo e diga há quanto tempo o aparelho apresenta o sintoma.',
    icon: '◌',
    accent: 'blue',
    image: { src: '/images/ar-condicionado-lg.jpg', alt: 'Equipamento de ar-condicionado instalado' },
    problems: ['Ar-condicionado que não liga', 'Equipamento que apresenta ruídos ou falhas', 'Aparelho com desempenho diferente do habitual'],
    highlights: ['Manutenção de ar-condicionado', 'Manutenção preventiva e corretiva'],
    faqs: [
      { question: 'Quando devo chamar um técnico para manutenção?', answer: 'Quando o aparelho deixa de funcionar, apresenta ruídos incomuns ou não climatiza como antes, vale solicitar uma avaliação.' },
      { question: 'A manutenção pode ser preventiva?', answer: 'Sim. A manutenção preventiva também faz parte dos serviços. Entre em contato para informar o equipamento e consultar a disponibilidade.' },
      { question: 'Como solicitar manutenção?', answer: 'Envie uma mensagem pelo WhatsApp com o modelo do aparelho, o que está acontecendo e o bairro onde será realizado o serviço.' },
    ],
    whatsappMessage: 'Olá! Acessei o site da A. J. P. Refrigeração e gostaria de solicitar informações sobre manutenção de ar-condicionado.',
  },
  {
    slug: 'higienizacao-de-ar-condicionado',
    title: 'Higienização de ar-condicionado',
    shortTitle: 'Higienização',
    eyebrow: 'Ar-condicionado',
    summary: 'Limpeza e higienização de ar-condicionado em São José dos Campos e região.',
    description: 'A higienização de ar-condicionado é voltada à limpeza do equipamento e de seus componentes, conforme o tipo de aparelho e a necessidade identificada. A A. J. P. Refrigeração realiza o serviço em São José dos Campos e região. Informe pelo WhatsApp o modelo do aparelho e o local onde está instalado.',
    icon: '✦',
    accent: 'yellow',
    image: { src: '/images/higienizacao-de-ar-condicionado.jpg', alt: 'Serviço de higienização de ar-condicionado' },
    problems: ['Filtros e partes acessíveis com acúmulo de sujeira', 'Limpeza periódica do equipamento', 'Aparelho que precisa de higienização'],
    highlights: ['Higienização de ar-condicionado', 'Limpeza de equipamentos'],
    faqs: [
      { question: 'Com que frequência devo higienizar o ar-condicionado?', answer: 'A frequência varia conforme o uso, o ambiente e as orientações do fabricante. A limpeza dos filtros deve seguir o manual do equipamento; para a higienização completa, consulte um técnico sobre a necessidade do aparelho.' },
      { question: 'Higienização e manutenção são a mesma coisa?', answer: 'Não. A higienização é voltada à limpeza do equipamento. A manutenção avalia o funcionamento e possíveis falhas.' },
      { question: 'A A. J. P. Refrigeração faz limpeza de ar-condicionado?', answer: 'Sim. A empresa realiza limpeza e higienização de ar-condicionado em São José dos Campos e região.' },
    ],
    whatsappMessage: 'Olá! Acessei o site da A. J. P. Refrigeração e gostaria de solicitar informações sobre higienização de ar-condicionado.',
  },
  {
    slug: 'conserto-de-geladeira-e-freezer',
    title: 'Conserto de geladeira e freezer',
    shortTitle: 'Geladeira e freezer',
    eyebrow: 'Refrigeração',
    summary: 'Conserto de geladeiras e freezers em São José dos Campos e região.',
    description: 'Geladeiras e freezers que não refrigeram ou congelam corretamente, apresentam ruídos ou deixam de ligar precisam de avaliação técnica. A A. J. P. Refrigeração realiza conserto desses equipamentos em São José dos Campos e região. Ao entrar em contato, informe o tipo de aparelho, a marca, o modelo e o defeito observado.',
    icon: '▣',
    accent: 'blue',
    image: { src: '/images/freezer-e-geladeira.png', alt: 'Geladeira e freezer para serviço de refrigeração' },
    problems: ['Geladeira que não está refrigerando', 'Freezer que não está congelando corretamente', 'Equipamento que parou de funcionar ou apresenta ruídos'],
    highlights: ['Conserto de geladeiras', 'Conserto de freezers'],
    faqs: [
      { question: 'A A. J. P. Refrigeração conserta geladeiras?', answer: 'Sim. A A. J. P. Refrigeração realiza conserto de geladeiras em São José dos Campos e região. Envie a marca, o modelo e uma descrição do defeito para consultar o atendimento.' },
      { question: 'A empresa também conserta freezers?', answer: 'Sim. O conserto de freezers também faz parte dos serviços. Informe o tipo, a marca, o modelo e o defeito apresentado ao entrar em contato.' },
      { question: 'Quais informações devo enviar antes de solicitar o conserto?', answer: 'Informe se é geladeira ou freezer, a marca, o modelo, o que está acontecendo e o bairro. Uma foto da etiqueta de identificação pode ajudar a reconhecer o equipamento.' },
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
    label: 'Região Central',
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
  { question: 'A A. J. P. Refrigeração instala ar-condicionado?', answer: 'Sim. A empresa realiza instalação de ar-condicionado em São José dos Campos e região. Informe o modelo do aparelho e o bairro pelo WhatsApp.' },
  { question: 'A empresa faz manutenção e higienização?', answer: 'Sim. A A. J. P. Refrigeração trabalha com manutenção e higienização de ar-condicionado.' },
  { question: 'Vocês consertam geladeiras e freezers?', answer: 'Sim. A empresa realiza conserto de geladeiras e freezers em São José dos Campos e região.' },
  { question: 'Quais bairros são atendidos?', answer: 'A atuação é voltada a São José dos Campos e região. Consulte a disponibilidade para o seu bairro pelo WhatsApp.' },
  { question: 'Como pedir atendimento?', answer: 'Escolha um dos números de WhatsApp, informe o serviço que procura e descreva o equipamento e o bairro.' },
];

export function whatsAppUrl(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
