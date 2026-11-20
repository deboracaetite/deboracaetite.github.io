// ============================================================
//  CONFIGURAÇÃO DO SITE — edite só este arquivo.
//  No GitHub: abra este arquivo, clique no lápis (Edit),
//  mude os valores entre aspas e clique em "Commit changes".
//  O site atualiza sozinho em 1 ou 2 minutos.
// ============================================================

window.CONFIG = {
  nome: "Débora Caetité",
  profissao: "Nail Designer",

  // Frases em letra cursiva
  frase: "Beleza e elegância em cada detalhe",
  frase2: "Sua beleza em boas mãos",

  // WhatsApp que recebe os pedidos: DDD + número, só dígitos
  whatsapp: "11910026920",

  // Endereço (aparece na página inicial)
  endereco: "Bocaina (Jardim Mirante), Ribeirão Pires",
  enderecoDetalhe: "8 min do centro",

  // Instagram sem o @
  instagram: "deboracaetite.nails",

  // Seção "Sobre" na página inicial
  sobre: {
    foto: "img/debora-perfil.jpg",
    titulo: "Prazer, sou a Débora",
    texto: [
      "Sou nail designer em Ribeirão Pires e acredito que cuidar das unhas é cuidar de si. Por isso, cada atendimento é um momento só seu: sem pressa, com atenção a cada detalhe.",
      "Trabalho com alongamento em gel, banho de gel e esmaltação em gel, sempre com materiais de qualidade e todo o cuidado com a higiene.",
      "Meu objetivo é que você saia daqui com unhas lindas, duradouras e com a autoestima lá em cima."
    ]
  },

  // Portfólio: fotos da pasta img/ com uma legenda curta.
  // Para adicionar: suba a foto na pasta img/ e copie uma linha.
  fotos: [
    { src: "img/port-francesinha-dourada.jpg", legenda: "Francesinha com filete dourado" },
    { src: "img/port-terracota.jpg", legenda: "Terracota" },
    { src: "img/port-francesinha-branca.jpg", legenda: "Francesinha clássica" },
    { src: "img/port-dourado-flocos.jpg", legenda: "Dourado com flocos de ouro" },
    { src: "img/port-amarelo.jpg", legenda: "Amarelo manteiga" },
    { src: "img/port-perolado.jpg", legenda: "Perolado com brilho" }
  ],

  // Promoção em destaque. Some sozinha depois da data "ate".
  // Para tirar antes, troque por: promo: null,
  promo: {
    titulo: "Black Beauty",
    subtitulo: "de Novembro",
    chamada: "Suas próximas unhas podem custar menos do que você imagina!",
    rodape: "Fechando agora, você já garante suas unhas pra dezembro!",
    selo: "Vagas limitadas",
    ate: "2026-11-30"
  },

  // RIFA. Para desligar: ativa: false
  // Para uma rifa nova: troque o "id" (ex.: "rifa-2026-12") e os prêmios.
  rifa: {
    ativa: true,
    id: "rifa-da-beleza-1",
    titulo: "Rifa da Beleza",
    chamada: "Cuide das suas unhas e concorra a prêmios incríveis!",
    preco: 5,
    numeros: 100,
    sorteio: "",            // data/forma do sorteio, ex.: "20/12 pelo app Sorteador". Vazio = não mostra.
    premios: [
      "Alongamento em gel",
      "1 conjunto ou vestido",
      "Banho de gel com esmaltação"
    ],
    // Pix que recebe o pagamento
    pixChave: "+5511934854873",   // chave celular: +55 + DDD + número
    pixNome: "Debora Gomes Caetite",
    pixCidade: "Ribeirao Pires"
  },

  // De quanto em quanto tempo aparecem os horários (minutos)
  intervalo: 30,

  // Quantos dias pra frente a cliente pode marcar
  diasAFrente: 30,

  // Horário de cada dia. null = fechado.
  // 0 = domingo, 1 = segunda ... 6 = sábado
  horarios: {
    0: null,
    1: { abre: "09:00", fecha: "19:00" },
    2: { abre: "09:00", fecha: "19:00" },
    3: { abre: "09:00", fecha: "19:00" },
    4: { abre: "09:00", fecha: "19:00" },
    5: { abre: "09:00", fecha: "19:00" },
    6: { abre: "09:00", fecha: "14:00" }
  },

  // Pausa de almoço (deixe null se não tiver)
  almoco: { inicio: "12:00", fim: "13:00" },

  // Serviços: nome, preço em reais (null = "sob consulta"),
  // duração em minutos e se está na promoção.
  servicos: [
    { nome: "Alongamento em gel", preco: 120, minutos: 180, promo: true },
    { nome: "Manutenção do alongamento", preco: 90, minutos: 150 },
    { nome: "Banho de gel + esmaltação", preco: 75, minutos: 150, promo: true },
    { nome: "Pacote duas esmaltações em gel (mão)", preco: 80, minutos: 90, promo: true, obs: "Valor das duas sessões" },
    { nome: "Esmaltação em gel (mão)", preco: 45, minutos: 90, promo: true }
  ]
};
