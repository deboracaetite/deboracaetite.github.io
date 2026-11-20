// ============================================================
//  CONFIGURAÇÃO DO STUDIO — edite só este arquivo.
//  No GitHub: abra este arquivo, clique no lápis (Edit),
//  mude os valores entre aspas e clique em "Commit changes".
//  O site atualiza sozinho em 1 ou 2 minutos.
// ============================================================

window.CONFIG = {
  // Nome que aparece no topo do site
  nome: "Debora Caetite",

  // Frase curta abaixo do nome
  frase: "Nail Designer · manicure e pedicure com hora marcada",

  // WhatsApp que recebe os pedidos: DDD + número, só dígitos.
  // Exemplo: "11987654321"
  whatsapp: "",

  // Endereço ou bairro (pode deixar vazio "")
  endereco: "",

  // Instagram sem o @ (pode deixar vazio "")
  instagram: "",

  // De quanto em quanto tempo aparecem os horários (minutos)
  intervalo: 30,

  // Quantos dias pra frente a cliente pode marcar
  diasAFrente: 21,

  // Horário de cada dia. null = fechado.
  // 0 = domingo, 1 = segunda ... 6 = sábado
  horarios: {
    0: null,
    1: null,
    2: { abre: "09:00", fecha: "19:00" },
    3: { abre: "09:00", fecha: "19:00" },
    4: { abre: "09:00", fecha: "19:00" },
    5: { abre: "09:00", fecha: "19:00" },
    6: { abre: "08:00", fecha: "16:00" }
  },

  // Pausa de almoço (deixe null se não tiver)
  almoco: { inicio: "12:00", fim: "13:00" },

  // Serviços: nome, preço em reais e duração em minutos.
  // ATENÇÃO: preços de exemplo, troque pelos dela.
  servicos: [
    { nome: "Mão", preco: 35, minutos: 45 },
    { nome: "Pé", preco: 40, minutos: 45 },
    { nome: "Pé e mão", preco: 70, minutos: 90 },
    { nome: "Esmaltação em gel", preco: 80, minutos: 75 },
    { nome: "Alongamento em gel", preco: 150, minutos: 150 },
    { nome: "Manutenção do alongamento", preco: 100, minutos: 90 },
    { nome: "Spa dos pés", preco: 60, minutos: 60 }
  ]
};
