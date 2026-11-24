// ========================================================
// 1. CATÁLOGO DE GUIAS (APONTA PARA A PASTA POSTS)
// ========================================================
const guiasProgressao = [
  {
    titulo: "Iniciando a Conta: Roteiro Completo do Nível 1 ao 120",
    fase: "early",
    labelFase: "Early Game",
    classeTag: "tag-early",
    data: "23 de Novembro, 2026 • Guia Oficial DMW",
    imagem: "img/guia.jpg",
    resumo: "Roteiro organizado por etapas: evolução inicial, principais quests, acesso aos continentes, farm e preparação até o nível 120.",
    arquivo: "posts/iniciando-conta.html"
  },
  {
    titulo: "Liberando e Completando Shinjuku",
    fase: "early",
    labelFase: "Early Game",
    classeTag: "tag-early",
    data: "23 de Novembro, 2026 • Guia Oficial DMW",
    imagem: "img/guil.jpg", // Coloque aqui a capa/print de Shinjuku
    resumo: "Como desbloquear o acesso a Shinjuku (West e East), ordem das main quests, D-Reaper e recompensas essenciais da saga.",
    arquivo: "posts/shinjuku.html"
  },


  {
    titulo: "Fechando o Early Game: Desbloqueio da Digital Area",
    fase: "early",
    labelFase: "Early Game",
    classeTag: "tag-early",
    data: "23 de Novembro, 2026 • Guia Oficial DMW",
    imagem: "img/digital.jpg", // Troque pela capa/print da Digital Area
    resumo: "Requisitos após Shinjuku, como liberar a entrada da Digital Area, preparação de status e primeiros farms da região.",
    arquivo: "posts/digital-area.html"
  },

  {
    titulo: "Saga de Tokyo Area:",
    fase: "early", // Se quiser marcar como início do Mid-Game, troque para "mid"
    labelFase: "Early Game", // Troque para "Mid Game" se mudar a fase acima
    classeTag: "tag-early", // Troque para "tag-mid" se mudar a fase acima
    data: "23 de Novembro, 2026 • Guia Oficial DMW",
    imagem: "img/zzx.webp", // Troque pela capa/print de Tokyo Area
    resumo: "Como liberar os mapas de Tokyo Area, sequência das main quests (Odaiba, Big Sight, Shibuya), raids locais e preparação de status.",
    arquivo: "posts/tokyo-area.html"
  },

  {
    titulo: "Guia de Raid: Coliseu Extreme (R1 ao R6) — Mecânicas",
    fase: "mid",
    labelFase: "Mid Game",
    classeTag: "tag-mid",
    data: "24 de Novembro, 2026 • Guia de Dungeons DMW",
    imagem: "img/colo.jpg", // Troque pela imagem/print do Coliseu Extreme
    resumo: "Preparação para Tanks e DPS, sequência completa de mecânicas.",
    arquivo: "posts/colo-extreme.html"
  }

];

// ========================================================
// 2. CATÁLOGO DE PATCH NOTES (APONTA PARA A PASTA POSTS)
// ========================================================
const listaPatches = [
  {
    versao: "Notas de Atualização 3.5.4",
    data: "22 de Novembro, 2026",
    titulo: "Novo Patch 3.5.4: Ajustes de Balanceamento & Eventos",
    imagem: "img/jumping.jpg",
    resumo: "Chegada do evento de Novembro, ajustes em raids e melhorias de qualidade de vida.",
    arquivo: "posts/patch-354.html"
  }
];

const listaFerramentas = [
  {
    categoria: "Simulador • True Vice",
    data: "Calculadora Interativa",
    titulo: "Calculadora de True Digivice (Tokyo Tokens)",
    imagem: "img/maxresdefault.jpg", // Troque pela imagem do True Vice
    resumo: "Informe quantos materiais e Tokyo Tokens você já possui para calcular exatamente o que falta farmar.",
    arquivo: "posts/calc-true-vice.html",
  },
  {
    categoria: "Simulador • Dungeons",
    data: "Ferramenta Interativa",
    titulo: "Verificador de Dungeons (DPS & Tank)",
    imagem: "img/verfdg.png", // Troque pela miniatura/banner dessa ferramenta
    resumo: "Informe seus status de DPS (HP/CT/HT) ou Tank (HP/DE/BL) para descobrir quais dungeons você já pode fazer.",
    arquivo: "posts/verificador-dg.html"


  }
];



// ========================================================
// 3. MOTOR DO SITE (NÃO PRECISA MEXER DAQUI PARA BAIXO)
// ========================================================
document.addEventListener("DOMContentLoaded", () => {
  // Carrega o artigo completo quando estiver no artigo.html
  const containerArtigo = document.getElementById('artigo-completo');
  if (containerArtigo) {
    const params = new URLSearchParams(window.location.search);
    const tipo = params.get('tipo');
    const id = parseInt(params.get('id'), 10);
    const item = tipo === 'patch' ? listaPatches[id] : (tipo === 'tool' ? listaFerramentas[id] : guiasProgressao[id]);

    if (item) {
      document.title = `${item.titulo} • DigiLab-Hub`;
      const tagTexto = tipo === 'patch' ? item.versao : (tipo === 'tool' ? item.categoria : item.labelFase);
      const tagClasse = tipo === 'patch' ? 'tag-patch' : (tipo === 'tool' ? 'tag-tool' : item.classeTag);
      const bannerHtml = item.imagem ? `<img src="${item.imagem}" alt="${item.titulo}" class="artigo-banner">` : '';

      const exibirConteudo = (htmlTexto) => {
        containerArtigo.innerHTML = `
          ${bannerHtml}
          <span class="badge-tag ${tagClasse}">${tagTexto}</span>
          <h1 style="font-size: clamp(1.8rem, 4vw, 2.6rem); margin: 10px 0;">${item.titulo}</h1>
          <p style="color: #94a3b8; font-size: 0.9rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; margin-bottom: 30px;">
            📅 ${item.data}
          </p>
          <div class="corpo-texto">${htmlTexto}</div>
        `;
      };

      if (item.arquivo) {
        fetch(item.arquivo)
          .then(res => res.ok ? res.text() : Promise.reject())
          .then(html => exibirConteudo(html))
          .catch(() => exibirConteudo('<p>Erro ao carregar o arquivo. Verifique se o nome na pasta posts/ está correto.</p>'));
      } else {
        exibirConteudo(item.conteudo || '');
      }
    } else {
      containerArtigo.innerHTML = `<h2>Artigo não encontrado.</h2>`;
    }
    return;
  }

  // Gera os cards na página inicial (index.html)
  const gradeGuias = document.getElementById('grade-guias');
  const gradePatches = document.getElementById('grade-patches');
  const inputBusca = document.getElementById('busca-guia');
  let categoriaAtual = 'todos';

  function renderizarGuias() {
    if (!gradeGuias) return;
    const termo = inputBusca ? inputBusca.value.toLowerCase() : '';
    gradeGuias.innerHTML = '';

    guiasProgressao.forEach((guia, index) => {
      const bateCat = categoriaAtual === 'todos' || guia.fase === categoriaAtual;
      const bateBusca = guia.titulo.toLowerCase().includes(termo) || guia.resumo.toLowerCase().includes(termo);

      if (bateCat && bateBusca) {
        const card = document.createElement('a');
        card.href = `artigo.html?tipo=guia&id=${index}`;
        card.className = 'item-card';
        card.style.textDecoration = 'none';
        card.style.color = 'inherit';
        const thumbHtml = guia.imagem ? `<img src="${guia.imagem}" alt="${guia.titulo}" class="card-thumb">` : '';

        card.innerHTML = `
          <div>
            ${thumbHtml}
            <span class="badge-tag ${guia.classeTag}">${guia.labelFase}</span>
            <h3 style="margin: 0 0 8px 0; color: #f8fafc;">${guia.titulo}</h3>
            <p style="margin: 0; font-size: 0.9rem; color: #94a3b8;">${guia.resumo}</p>
          </div>
          <span style="margin-top: 16px; font-size: 0.85rem; color: #00e5ff; font-weight: bold;">Abrir guia completo →</span>
        `;
        gradeGuias.appendChild(card);
      }
    });
  }

  function renderizarPatches() {
    if (!gradePatches) return;
    gradePatches.innerHTML = '';
    listaPatches.forEach((patch, index) => {
      const card = document.createElement('a');
      card.href = `artigo.html?tipo=patch&id=${index}`;
      card.className = 'item-card patch';
      card.style.textDecoration = 'none';
      card.style.color = 'inherit';
      const thumbHtml = patch.imagem ? `<img src="${patch.imagem}" alt="${patch.titulo}" class="card-thumb">` : '';

      card.innerHTML = `
        <div>
          ${thumbHtml}
          <span class="badge-tag tag-patch">${patch.versao}</span>
          <h3 style="margin: 0 0 8px 0; color: #f8fafc;">${patch.titulo}</h3>
          <p style="margin: 0; font-size: 0.9rem; color: #94a3b8;">${patch.resumo}</p>
        </div>
        <span style="margin-top: 16px; font-size: 0.85rem; color: #fb7185; font-weight: bold;">Ler notas completas →</span>
      `;
      gradePatches.appendChild(card);
    });
  }

  const gradeFerramentas = document.getElementById('grade-ferramentas');
  function renderizarFerramentas() {
    if (!gradeFerramentas) return;
    gradeFerramentas.innerHTML = '';
    listaFerramentas.forEach((tool, index) => {
      const card = document.createElement('a');
      card.href = `artigo.html?tipo=tool&id=${index}`;
      card.className = 'item-card tool';
      card.style.textDecoration = 'none';
      card.style.color = 'inherit';
      const thumbHtml = tool.imagem ? `<img src="${tool.imagem}" alt="${tool.titulo}" class="card-thumb">` : '';

      card.innerHTML = `
        <div>
          ${thumbHtml}
          <span class="badge-tag tag-tool">${tool.categoria}</span>
          <h3 style="margin: 0 0 8px 0; color: #f8fafc;">${tool.titulo}</h3>
          <p style="margin: 0; font-size: 0.9rem; color: #94a3b8;">${tool.resumo}</p>
        </div>
        <span style="margin-top: 16px; font-size: 0.85rem; color: #fbbf24; font-weight: bold;">Abrir simulador →</span>
      `;
      gradeFerramentas.appendChild(card);
    });
  }
  renderizarFerramentas();

  document.querySelectorAll('.aba-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.aba-btn').forEach(b => b.classList.remove('ativa'));
      btn.classList.add('ativa');
      categoriaAtual = btn.dataset.cat;
      renderizarGuias();
    };
  });

  if (inputBusca) inputBusca.oninput = renderizarGuias;
  renderizarGuias();
  renderizarPatches();

  // Crossfade de fundo e deslize suave
  const c0 = document.getElementById('cenario-0'), c1 = document.getElementById('cenario-1'), c2 = document.getElementById('cenario-2'), c3 = document.getElementById('cenario-3');
  const secProg = document.getElementById('progressao'), secPatch = document.getElementById('patch-notes'), secTools = document.getElementById('ferramentas');

  function atualizarCenario() {
    if (!c0 || !c1 || !c2 || !c3 || !secProg || !secPatch || !secTools) return;
    const s = window.scrollY, h = window.innerHeight;
    if (s < secProg.offsetTop - h * 0.55) {
      c0.style.opacity = 1; c1.style.opacity = 0; c2.style.opacity = 0; c3.style.opacity = 0;
    } else if (s < secPatch.offsetTop - h * 0.55) {
      c0.style.opacity = 0; c1.style.opacity = 1; c2.style.opacity = 0; c3.style.opacity = 0;
    } else if (s < secTools.offsetTop - h * 0.55) {
      c0.style.opacity = 0; c1.style.opacity = 0; c2.style.opacity = 1; c3.style.opacity = 0;
    } else {
      c0.style.opacity = 0; c1.style.opacity = 0; c2.style.opacity = 0; c3.style.opacity = 1;
    }
  }

  // FUNÇÕES DA CALCULADORA DE TRUE DIGIVICE
// ========================================================
function calcularVice() {
  const linhas = document.querySelectorAll('#tabela-materiais tr');
  if (!linhas.length) return;

  let tokensNecessariosItens = 0;

  linhas.forEach(linha => {
    const req = parseInt(linha.dataset.req, 10);
    const custo = parseInt(linha.dataset.custo, 10);
    const input = linha.querySelector('.item-qtd');
    let tenho = parseInt(input.value, 10) || 0;

    if (tenho < 0) { tenho = 0; input.value = 0; }

    const falta = Math.max(req - tenho, 0);
    const tokensItem = falta * custo;
    tokensNecessariosItens += tokensItem;

    const colFalta = linha.querySelector('.col-falta');
    const colTokens = linha.querySelector('.col-tokens');

    colFalta.textContent = falta === 0 ? '✔ OK' : falta;
    colFalta.style.color = falta === 0 ? '#00ff88' : '#f8fafc';
    colTokens.textContent = tokensItem;
  });

  const tokensNaBag = Math.max(parseInt(document.getElementById('tokens-atuais').value, 10) || 0, 0);
  const tokensParaFarmar = Math.max(tokensNecessariosItens - tokensNaBag, 0);

  document.getElementById('res-tokens-itens').textContent = tokensNecessariosItens;
  document.getElementById('res-tokens-farmar').textContent = tokensParaFarmar === 0 ? 'Pronto! 🎉' : `${tokensParaFarmar} Tokens`;

  const progresso = Math.min(Math.round(((373 - tokensParaFarmar) / 373) * 100), 100);
  document.getElementById('texto-porcentagem').textContent = `${progresso}%`;
  document.getElementById('barra-progresso').style.width = `${progresso}%`;
}

function zerarCalcVice() {
  document.getElementById('tokens-atuais').value = 0;
  document.querySelectorAll('#tabela-materiais .item-qtd').forEach(input => input.value = 0);
  calcularVice();
}

  window.addEventListener('scroll', atualizarCenario);
  atualizarCenario();

  function deslizarPara(destino, duracao = 1200) {
    const inicio = window.scrollY, fim = destino.getBoundingClientRect().top + inicio - 40, dist = fim - inicio;
    let t0 = null;
    function animar(t) {
      if (!t0) t0 = t;
      const p = Math.min((t - t0) / duracao, 1);
      window.scrollTo(0, inicio + dist * (1 - Math.pow(1 - p, 4)));
      if (t - t0 < duracao) requestAnimationFrame(animar);
      else { destino.classList.remove('destaque-chegada'); void destino.offsetWidth; destino.classList.add('destaque-chegada'); }
    }
    requestAnimationFrame(animar);
  }

  document.querySelectorAll('.link-suave').forEach(l => {
    l.addEventListener('click', e => { e.preventDefault(); const s = document.querySelector(l.getAttribute('href')); if (s) deslizarPara(s, 1200); });
  });
});

// ========================================================
// FUNÇÕES GLOBAIS DA CALCULADORA DE TRUE DIGIVICE
// ========================================================
window.calcularVice = function() {
  const linhas = document.querySelectorAll('#tabela-materiais tr');
  if (!linhas.length) return;

  let tokensNecessariosItens = 0;

  linhas.forEach(linha => {
    const req = parseInt(linha.getAttribute('data-req'), 10);
    const custo = parseInt(linha.getAttribute('data-custo'), 10);
    const input = linha.querySelector('.item-qtd');
    let tenho = parseInt(input.value, 10) || 0;

    if (tenho < 0) { tenho = 0; input.value = 0; }

    const falta = Math.max(req - tenho, 0);
    const tokensItem = falta * custo;
    tokensNecessariosItens += tokensItem;

    const colFalta = linha.querySelector('.col-falta');
    const colTokens = linha.querySelector('.col-tokens');

    if (colFalta) {
      colFalta.textContent = falta === 0 ? '✔ OK' : falta;
      colFalta.style.color = falta === 0 ? '#00ff88' : '#f8fafc';
    }
    if (colTokens) {
      colTokens.textContent = tokensItem;
    }
  });

  const inputBag = document.getElementById('tokens-atuais');
  const tokensNaBag = inputBag ? Math.max(parseInt(inputBag.value, 10) || 0, 0) : 0;
  const tokensParaFarmar = Math.max(tokensNecessariosItens - tokensNaBag, 0);

  const elItens = document.getElementById('res-tokens-itens');
  const elFarmar = document.getElementById('res-tokens-farmar');
  const elPorcento = document.getElementById('texto-porcentagem');
  const elBarra = document.getElementById('barra-progresso');

  if (elItens) elItens.textContent = tokensNecessariosItens;
  if (elFarmar) elFarmar.textContent = tokensParaFarmar === 0 ? 'Pronto! 🎉' : `${tokensParaFarmar} Tokens`;

  const progresso = Math.min(Math.round(((373 - tokensParaFarmar) / 373) * 100), 100);
  if (elPorcento) elPorcento.textContent = `${progresso}%`;
  if (elBarra) elBarra.style.width = `${progresso}%`;
};

window.zerarCalcVice = function() {
  const inputBag = document.getElementById('tokens-atuais');
  if (inputBag) inputBag.value = 0;
  document.querySelectorAll('#tabela-materiais .item-qtd').forEach(input => input.value = 0);
  window.calcularVice();
};

// ========================================================
// FERRAMENTA: VERIFICADOR DE DUNGEONS (BANCO COMPLETO)
// ========================================================
let funcaoAtualDG = 'dps';

const bancoDungeons = [
  {
    nome: "🐘 Vajramon",
    dps: { hp: 45000, ct: 200, ht: 7000, nota: "Requisito Overall (Serve para DPS/Geral)." },
    tank: null
  },
  {
    nome: "❄️ Vikamon",
    dps: { hp: 45000, ct: 200, ht: 7000, nota: "Requisito Overall (Serve para DPS/Geral)." },
    tank: null
  },
  {
    nome: "⚔️ Berserk Arena",
    dps: { hp: 40000, ct: 200, ht: 11000, nota: "" },
    tank: { hp: 78000, de: 20000, bl: 100, nota: "" }
  },
  {
    nome: "🛍️ Shopping Mall",
    dps: { hp: 60000, ct: 200, ht: 7500, nota: "Requisito Overall • Exige também: CD 350%+ e BL 100%." },
    tank: { hp: 60000, de: 0, bl: 100, nota: "Requisito Overall • Exige também: CT 200%+, HT 7.5k+ e CD 350%+." }
  },
  {
    nome: "🎡 Neverland",
    dps: { hp: 65000, ct: 200, ht: 10000, nota: "Exige também: CD 350% e BL 100%." },
    tank: null
  },
  {
    nome: "🔥 Burning Battlefield",
    dps: { hp: 80000, ct: 150, ht: 12000, nota: "" },
    tank: { hp: 120000, de: 25000, bl: 0, nota: "BL não especificado." }
  },
  {
    nome: "⚔️ Chaotic Battlefield",
    dps: { hp: 80000, ct: 190, ht: 11500, nota: "" },
    tank: { hp: 120000, de: 25000, bl: 0, nota: "BL não especificado." }
  },
  {
    nome: "🏟️ Final Battlefield",
    dps: { hp: 80000, ct: 190, ht: 11500, nota: "" },
    tank: { hp: 120000, de: 25000, bl: 0, nota: "BL não especificado." }
  },
  {
    nome: "👹 Bagramon Domain",
    dps: { hp: 80000, ct: 265, ht: 10000, nota: "Exige também: CD 350%+." },
    tank: { hp: 100000, de: 20000, bl: 100, nota: "" }
  },
  {
    nome: "🦠 Venom Hard",
    dps: { hp: 85000, ct: 310, ht: 13000, nota: "" },
    tank: { hp: 120000, de: 25000, bl: 130, nota: "Exige também: EV 190%." }
  },
  {
    nome: "🤝 Friendship",
    dps: { hp: 85000, ct: 310, ht: 13000, nota: "" },
    tank: { hp: 120000, de: 25000, bl: 130, nota: "Exige também: EV 190%." }
  },
  {
    nome: "🛡️ Bravery",
    dps: { hp: 85000, ct: 310, ht: 13000, nota: "" },
    tank: { hp: 120000, de: 25000, bl: 130, nota: "Exige também: EV 190%." }
  },
  {
    nome: "🌊 Marine Dungeon",
    dps: { hp: 80000, ct: 330, ht: 14500, nota: "" },
    tank: { hp: 150000, de: 30000, bl: 165, nota: "Exige também: EV 110%." }
  },
  {
    nome: "🏰 Royal Base Hard",
    dps: { hp: 80000, ct: 330, ht: 14500, nota: "" },
    tank: { hp: 150000, de: 30000, bl: 165, nota: "Exige também: EV 110%." }
  },
  {
    nome: "🃏 Puppetmon",
    dps: { hp: 90000, ct: 330, ht: 14500, nota: "" },
    tank: { hp: 170000, de: 40000, bl: 175, nota: "Exige também: EV 205.5%." }
  },
  {
    nome: "🤖 MugenDramon",
    dps: { hp: 100000, ct: 350, ht: 14500, nota: "" },
    tank: { hp: 170000, de: 40000, bl: 185, nota: "Exige também: EV 205.5%." }
  },
  {
    nome: "🏛️ Four Pillars",
    dps: { hp: 105000, ct: 350, ht: 14800, nota: "Support: HP 115k+, DS 34k+, CT 350%+, HT 14.8k+." },
    tank: { hp: 170000, de: 40000, bl: 205, nota: "Exige também: EV 205.5%+." }
  },
  {
    nome: "🎭 Piedmon",
    dps: { hp: 105000, ct: 350, ht: 14800, nota: "Support: HP 115k+, DS 34k+, CT 350%, HT 14.8k+." },
    tank: { hp: 200000, de: 45000, bl: 190, nota: "Exige também: EV 130%+." }
  },
  {
    nome: "🌳 Odaiba Park",
    dps: { hp: 105000, ct: 350, ht: 15000, nota: "" },
    tank: { hp: 230000, de: 45000, bl: 190, nota: "Atenção: 210% BL real necessário após debuff • EV 130%." }
  },
  {
    nome: "🌌 Void Space",
    dps: { hp: 105000, ct: 350, ht: 15500, nota: "Support: HP 105k+, DS 34k+, CT 350%+, HT 15.5k+." },
    tank: { hp: 230000, de: 60000, bl: 215, nota: "Exige também: EV 135.5%+." }
  },
  {
    nome: "🐉 Fanglongmon (Hard)",
    dps: { hp: 105000, ct: 350, ht: 16300, nota: "" },
    tank: { hp: 240000, de: 60000, bl: 229, nota: "Exige também: EV 135%+." }
  },
  {
    nome: "🌌 Void Space [Hard]",
    dps: { hp: 125500, ct: 0, ht: 18000, nota: "CT não especificado." },
    tank: { hp: 310000, de: 88000, bl: 240, nota: "EV não especificado." }
  },
  {
    nome: "🌿 Greenzone [EX]",
    dps: null,
    tank: { hp: 1800000, de: 30000, bl: 140, nota: "Exclusivo: Tank (Shoutmon DX Only)." }
  },
  {
    nome: "🌀 Mysterious Underground Dungeon [TA]",
    dps: null,
    tank: { hp: 1800000, de: 30000, bl: 140, nota: "Requisito Overall (Tank/TA) • EV não especificado." }
  },
    {
    nome: "🐾 Holy Beast Dungeon [Solo] (EDG / ZDG / BDG / QDG)",
    dps: { hp: 40000, ct: 220, ht: 3000, nota: "Modo Solo (Sem Ticket • Drops Character Bound) • Exige também: CD 350% e BL 100%." },
    tank: { hp: 40000, de: 0, bl: 100, nota: "Modo Solo (Sem Ticket • Drops Character Bound) • Exige também: HT 3k." }
  },
  {
    nome: "🗼 Tokyo Dungeons [Solo] (Tokyo Tower & Fuji TV)",
    dps: { hp: 40000, ct: 220, ht: 4500, nota: "Modo Solo (Sem Ticket • Drops Character Bound) • Exige também: CD 350% e BL 100%." },
    tank: { hp: 40000, de: 0, bl: 100, nota: "Modo Solo (Sem Ticket • Drops Character Bound) • Exige também: HT 4.5k." }
  },
  {
    nome: "🏙️ Shinjuku Dungeons [Solo] (Venomous Vortex, Vajramon & Vikaralamon)",
    dps: { hp: 40000, ct: 220, ht: 7000, nota: "Modo Solo (Sem Ticket • Drops Character Bound) • Exige também: CD 350% e BL 100%." },
    tank: { hp: 40000, de: 0, bl: 100, nota: "Modo Solo (Sem Ticket • Drops Character Bound) • Exige também: HT 7k." }
  },

];

window.mudarFuncaoDG = function(role) {
  funcaoAtualDG = role;
  const btnDps = document.getElementById('btn-role-dps');
  const btnTank = document.getElementById('btn-role-tank');
  const l1 = document.getElementById('label-stat-1');
  const l2 = document.getElementById('label-stat-2');
  const l3 = document.getElementById('label-stat-3');
  const i1 = document.getElementById('input-stat-1');
  const i2 = document.getElementById('input-stat-2');
  const i3 = document.getElementById('input-stat-3');

  document.getElementById('resultado-dungeons').innerHTML = '';
  i1.value = '';
  i2.value = '';
  i3.value = '';

  if (role === 'dps') {
    btnDps.className = 'btn-funcao ativo-dps';
    btnTank.className = 'btn-funcao';
    l1.textContent = '❤️ Seu HP Máximo';
    l2.textContent = '💥 Seu Critical Rate (CT %)';
    l3.textContent = '🎯 Seu Hit Rate (HT)';
    i1.placeholder = 'Ex: 105000';
    i2.placeholder = 'Ex: 350';
    i3.placeholder = 'Ex: 15500';
  } else {
    btnTank.className = 'btn-funcao ativo-tank';
    btnDps.className = 'btn-funcao';
    l1.textContent = '❤️ Seu HP Máximo';
    l2.textContent = '🛡️ Sua Defesa (DE)';
    l3.textContent = '🧱 Seu Block (BL %)';
    i1.placeholder = 'Ex: 230000';
    i2.placeholder = 'Ex: 45000';
    i3.placeholder = 'Ex: 190';
  }
};

// Converte textos como "120k", "14,5k", "1.8m" ou "350%" em números reais
function converterValorStatus(valorTexto) {
  if (!valorTexto) return 0;
  let limpo = valorTexto.toString().trim().toLowerCase().replace(',', '.').replace('%', '');
  
  if (limpo.endsWith('k')) {
    return (parseFloat(limpo.slice(0, -1)) || 0) * 1000;
  }
  if (limpo.endsWith('m')) {
    return (parseFloat(limpo.slice(0, -1)) || 0) * 1000000;
  }
  return parseFloat(limpo) || 0;
}

window.verificarDungeons = function() {
  const s1 = converterValorStatus(document.getElementById('input-stat-1').value);
  const s2 = converterValorStatus(document.getElementById('input-stat-2').value);
  const s3 = converterValorStatus(document.getElementById('input-stat-3').value);
  const containerRes = document.getElementById('resultado-dungeons');
  
  // ... (o restante da função verificarDungeons continua exatamente igual!)


  if (s1 === 0 && s2 === 0 && s3 === 0) {
    containerRes.innerHTML = `<p style="color: #fbbf24; text-align: center;">⚠️ Preencha seus status acima para verificar as dungeons.</p>`;
    return;
  }

  const liberadas = bancoDungeons.filter(dg => {
    if (funcaoAtualDG === 'dps') {
      if (!dg.dps) return false;
      return s1 >= dg.dps.hp && s2 >= dg.dps.ct && s3 >= dg.dps.ht;
    } else {
      if (!dg.tank) return false;
      return s1 >= dg.tank.hp && s2 >= dg.tank.de && s3 >= dg.tank.bl;
    }
  });

  if (liberadas.length === 0) {
    containerRes.innerHTML = `
      <div style="background: rgba(244, 63, 94, 0.12); border: 1px solid #f43f5e; padding: 18px; border-radius: 8px; text-align: center;">
        <strong style="color: #fb7185;">Nenhuma dungeon recomendada atingida ainda com esses status.</strong>
        <p style="margin: 6px 0 0 0; font-size: 0.9rem; color: #cbd5e1;">Confira se digitou os valores completos (ex: 80000 para 80k) ou fortaleça seus selos e acessórios!</p>
      </div>
    `;
    return;
  }

  let cardsHtml = liberadas.map(dg => {
    const info = funcaoAtualDG === 'dps' ? dg.dps : dg.tank;
    const notaHtml = info.nota ? `<div class="dg-nota-extra">⚠️ ${info.nota}</div>` : '';
    return `
      <div class="dg-card-ok">
        <div>
          <span style="font-size: 0.72rem; text-transform: uppercase; color: #34d399; font-weight: bold;">✔ Status Compatíveis</span>
          <h4 style="margin: 6px 0 0 0; color: #f8fafc; font-size: 1.05rem;">${dg.nome}</h4>
        </div>
        ${notaHtml}
      </div>
    `;
  }).join('');

  containerRes.innerHTML = `
    <h3 style="margin-top: 0; color: #34d399;">✅ Você pode fazer ${liberadas.length} Dungeon(s) como ${funcaoAtualDG.toUpperCase()}:</h3>
    <div class="lista-dgs-liberadas">${cardsHtml}</div>
  `;
};


