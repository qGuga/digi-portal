// ========================================================
// 1. CATÁLOGO DE GUIAS DE PROGRESSÃO
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
    titulo: "Continuação Early Game: Liberando e Completando Shinjuku",
    fase: "early",
    labelFase: "Early Game",
    classeTag: "tag-early",
    data: "23 de Novembro, 2026 • Guia Oficial DMW",
    imagem: "img/guil.jpg",
    resumo: "Como desbloquear o acesso a Shinjuku (West e East), ordem das main quests, D-Reaper e recompensas essenciais da saga.",
    arquivo: "posts/shinjuku.html"
  },
  {
    titulo: "Fechando o Early Game: Desbloqueio da Digital Area",
    fase: "early",
    labelFase: "Early Game",
    classeTag: "tag-early",
    data: "23 de Novembro, 2026 • Guia Oficial DMW",
    imagem: "img/digital.jpg",
    resumo: "Requisitos após Shinjuku, como liberar a entrada da Digital Area, preparação de status e primeiros farms da região.",
    arquivo: "posts/digital-area.html"
  },
  {
    titulo: "Saga de Tokyo Area: Liberando Odaiba, Big Sight e Shibuya",
    fase: "early",
    labelFase: "Early Game",
    classeTag: "tag-early",
    data: "23 de Novembro, 2026 • Guia Oficial DMW",
    imagem: "img/zzx.webp",
    resumo: "Como liberar os mapas de Tokyo Area, sequência das main quests (Odaiba, Big Sight, Shibuya), raids locais e preparação de status.",
    arquivo: "posts/tokyo-area.html"
  },
  {
    titulo: "Desbloqueando Spiral Mountain: Pré-requisitos & Áreas",
    fase: "early",
    labelFase: "Early Game",
    classeTag: "tag-early",
    data: "25 de Novembro, 2026 • Guia Oficial DMW",
    imagem: "img/spiral.jpg", // Troque pela capa/print de Spiral Mountain
    resumo: "Como liberar Spiral Mountain após Tokyo-Odaiba (VenomMyotismon), entrada via Gennai e aviso importante sobre a quest do Piedmon.",
    arquivo: "posts/spiral-mountain.html"
  },
  {
    titulo: "Tera Tours Guide: Spiral Tour, Forest Tour & Rota Sequencial",
    fase: "early",
    labelFase: "Early Game",
    classeTag: "tag-early",
    data: "25 de Novembro, 2026 • Guia de Farm DMW",
    imagem: "img/moneyagu.png", // Troque pela imagem/print das Tours
    resumo: "Guia completo de farm de Tera: horários e canais da Spiral Tour (3,6T), cronograma da Forest Tour (2,4T + Unique Data) e rota combinada (3,1T).",
    arquivo: "posts/tera-tours.html"
  },
  {
    titulo: "Guia de Raid: Coliseu Extreme (R1 ao R6) — Mecânicas",
    fase: "mid",
    labelFase: "Mid Game",
    classeTag: "tag-mid",
    data: "24 de Novembro, 2026 • Guia de Dungeons DMW",
    imagem: "img/colo.jpg",
    resumo: "Preparação para Tanks e DPS, sequência completa de Stack/Split (Millenniummon), círculos de dano e tabela de HP do Examon X e Ordinemon.",
    arquivo: "posts/colo-extreme.html"
  },
  {
    titulo: "Guia de Raid: Berserk Arena (Alter-S & Zwart) — Mecânicas",
    fase: "mid",
    labelFase: "Mid Game",
    classeTag: "tag-mid",
    data: "24 de Novembro, 2026 • Guia de Dungeons DMW",
    imagem: "img/zerk.png", // Troque pela imagem/print da Berserk Arena
    resumo: "Requisitos de Tank e DPS, escolha de Digimons (Shoutmon DX / Icymagnamon), travas de HP (80/60/40/20%) e tabela completa de mecânicas.",
    arquivo: "posts/berserk.html"
  },

  {
    titulo: "Guia de Raid: Green Zone [EX] (Bagramon) — Mecânicas",
    fase: "mid",
    labelFase: "Mid Game",
    classeTag: "tag-mid",
    data: "24 de Novembro, 2026 • Guia de Dungeons DMW",
    imagem: "img/bextreme.png", // Troque pela imagem/print da Green Zone EX
    resumo: "Passo a passo das mecânicas do Bagramon: Troopmon, veneno, círculo de sobrevivência (insta-kill), debuff de cura e gestão de Tank Busters.",
    arquivo: "posts/greenzone-ex.html"
  },
  {
    titulo: "Guia de Raid: Chaotic Battlefield (Beelzemon) — Skip Run",
    fase: "mid",
    labelFase: "Mid Game",
    classeTag: "tag-mid",
    data: "24 de Novembro, 2026 • Guia de Dungeons DMW",
    imagem: "img/chaotic.png", // Troque pela imagem/print do Beelzemon / Chaotic Battlefield
    resumo: "Estratégia de Skip Run com 3 OX (All Delete), timing dos meteoros, mecânica crítica dos Impmons (40%) e finalização aos 11% de HP.",
    arquivo: "posts/chaotic-battlefield.html"
  },
    {
    titulo: "Guia de Raid: Burning Battlefield (Megidramon) — Mecânicas",
    fase: "mid",
    labelFase: "Mid Game",
    classeTag: "tag-mid",
    data: "24 de Novembro, 2026 • Guia de Dungeons DMW",
    imagem: "img/burning.png", // Troque pela imagem/print do Megidramon / Burning Battlefield
    resumo: "Tabela completa de HP (89% ao 10%), invocação de Towers, círculos verdes de sobrevivência (30%) e DPS check final de 1 minuto.",
    arquivo: "posts/burning-battlefield.html"
  },
  {
    titulo: "Guia de Raid: Final Battlefield — Common Skip Run",
    fase: "mid",
    labelFase: "Mid Game",
    classeTag: "tag-mid",
    data: "24 de Novembro, 2026 • Guia de Dungeons DMW",
    imagem: "img/final.png", // Troque pela imagem/print da Final Battlefield
    resumo: "Estratégia de Skip Run: rotações de 63%–60%, controle de HP do Raguelmon (não matar!), minions aos 48% e ordem dos Devas (11%–9%).",
    arquivo: "posts/final-battlefield.html"
  },
  {
    titulo: "Guia de Raid: Bagramon Domain — Mecânicas",
    fase: "mid", // Se preferir na aba End Game, troque para "end"
    labelFase: "Mid Game", // Troque para "End Game" se mudar acima
    classeTag: "tag-mid", // Troque para "tag-end" se mudar acima
    data: "24 de Novembro, 2026 • Guia de Dungeons DMW",
    imagem: "img/bagradg.png", // Troque pela imagem/print da Bagramon Domain
    resumo: "Mecânicas do 1º Boss (uso do item pelo Top DPS), Lilith aos 50% de HP e fase de invulnerabilidade aos 30% (sem AOE!).",
    arquivo: "posts/bagramon-domain.html"
  },
  {
    titulo: "Guia de Raid: Shopping Mall (Mall Dungeon) — Mecânicas",
    fase: "mid",
    labelFase: "Mid Game",
    classeTag: "tag-mid",
    data: "24 de Novembro, 2026 • Guia de Dungeons DMW",
    imagem: "img/bloomdg.png", // Troque pela imagem/print da Shopping Mall
    resumo: "Mecânicas de Meteors, Omae, círculos de sobrevivência aos 30% e 10% de HP e cálculo de dano acumulado do veneno (4k por tick).",
    arquivo: "posts/shopping-mall.html"
  },
  {
    titulo: "Guia de Raid: Neverland — Mecânicas & Status",
    fase: "mid",
    labelFase: "Mid Game",
    classeTag: "tag-mid",
    data: "24 de Novembro, 2026 • Guia de Dungeons DMW",
    imagem: "img/aeosdg.png", // Troque pela imagem/print da Neverland
    resumo: "Recomendações de status (75k+ HP), como mitigar os 70k de dano do Omae, Small Circle aos 50% e DPS Check final.",
    arquivo: "posts/neverland.html"
  },
  {
    titulo: "Guia de Raid: Venomous Vortex [Hard] (Venom Vamdemon)",
    fase: "mid",
    labelFase: "Mid Game",
    classeTag: "tag-mid",
    data: "24 de Novembro, 2026 • Guia de Dungeons DMW",
    imagem: "img/venomhard.png", // Troque pela imagem/print do Venom Vamdemon
    resumo: "Requisitos de SSS+ Vaccine e Tankers, timing do F3 aos 88% e 31% para pular mecânicas, variações de RNG (70%–39%) e DPS Check final.",
    arquivo: "posts/venom-hard.html"
  },
  {
    titulo: "Guia de Raid: Path of Bravery (WarGreymon) — Mecânicas",
    fase: "mid",
    labelFase: "Mid Game",
    classeTag: "tag-mid",
    data: "24 de Novembro, 2026 • Guia de Dungeons DMW",
    imagem: "img/bravedg.png", // Troque pela imagem/print da Path of Bravery
    resumo: "Composição (Examon X / Fanglongmon Shin), janelas de F3 para skip (69%–62% e 29%–22%), Stacks de 70k e Huge Split Circles.",
    arquivo: "posts/path-of-bravery.html"
  },
  {
    titulo: "Guia de Raid: Path of Friendship (MetalGarurumon) — Mecânicas",
    fase: "mid",
    labelFase: "Mid Game",
    classeTag: "tag-mid",
    data: "24 de Novembro, 2026 • Guia de Dungeons DMW",
    imagem: "img/frienddg.png", // Troque pela imagem/print da Path of Friendship
    resumo: "Requisitos de CT (300%+) e composição, debuffs de +20% dano recebido, parada obrigatória aos 60%–59% (Northern Impact) e meteoros finais.",
    arquivo: "posts/path-of-friendship.html"
  },
  {
    titulo: "Guia de Raid: Royal Base Hard (RBH) — Todas as Salas",
    fase: "mid",
    labelFase: "Mid Game",
    classeTag: "tag-mid",
    data: "24 de Novembro, 2026 • Guia de Dungeons DMW",
    imagem: "img/rbhdg.png", // Troque pela imagem/print da Royal Base Hard
    resumo: "Roteiro completo das 3 salas: Room 1 (Exa/Jes/Gankoo), Room 2 (DexDorugoramon), Room 3 Parte 1 (Death-X-mon) e Parte 2 (AOA + sequência de F3).",
    arquivo: "posts/royal-base-hard.html"
  },

  {
    titulo: "Guia de Raid: Marine Dungeon — Common Skip Run",
    fase: "mid",
    labelFase: "Mid Game",
    classeTag: "tag-mid",
    data: "24 de Novembro, 2026 • Guia de Dungeons DMW",
    imagem: "img/marinedg.png", // Troque pela imagem/print da Marine Dungeon
    resumo: "Recomendações de status (81k+ HP contra o Omae de 80k), títulos defensivos, skip aos 87%, mecânica de 1 pessoa por círculo (29%) e DPS Check final.",
    arquivo: "posts/marine-dungeon.html"
  },
  {
    titulo: "Guia de Raid: Puppet Dungeon (Puppetmon) — Mecânicas",
    fase: "mid",
    labelFase: "Mid Game",
    classeTag: "tag-mid",
    data: "24 de Novembro, 2026 • Guia de Dungeons DMW",
    imagem: "img/puppetdg.png", // Troque pela imagem/print da Puppet Dungeon
    resumo: "Status recomendados (90k+ HP), mecânica dos Housemons nos cantos (70% e 30%), fase do Housemon Minion (50%) e Small Blue Circles finais.",
    arquivo: "posts/puppet-dungeon.html"
  },
  {
    titulo: "Guia de Raid: Mugen Dungeon (MugenDramon) — Mecânicas",
    fase: "mid",
    labelFase: "Mid Game",
    classeTag: "tag-mid",
    data: "24 de Novembro, 2026 • Guia de Dungeons DMW",
    imagem: "img/mugendg.png", // Troque pela imagem/print da Mugen Dungeon
    resumo: "Mecânicas de Stack/Unstack, eliminação rápida dos 2 minions aos 49% (evitando Nuke Damage), Blue Circles (24%) e Max Power Burst aos 8%.",
    arquivo: "posts/mugen-dungeon.html"
  },
  {
    titulo: "Guia de Raid: Piedmon Dungeon — Mecânicas",
    fase: "mid",
    labelFase: "Mid Game",
    classeTag: "tag-mid",
    data: "24 de Novembro, 2026 • Guia de Dungeons DMW",
    imagem: "img/pieddg.png", // Troque pela imagem/print da Piedmon Dungeon
    resumo: "Tabela completa (95% ao 10%), LadyDevimon (80%), truque de aggro nos Evilmons (60%–55%), Tank Buster de 120k (UVF) e sequência roxa final.",
    arquivo: "posts/piedmon-dungeon.html"
  },
  {
    titulo: "Guia de Raid: Four Pillars (4 Mestres das Trevas) — Mecânicas",
    fase: "end",
    labelFase: "End Game",
    classeTag: "tag-end",
    data: "24 de Novembro, 2026 • Guia de Dungeons DMW",
    imagem: "img/pillardg.png", // Troque pela imagem/print da Four Pillars
    resumo: "Roteiro completo dos 4 bosses: MetalSeadramon, Puppetmon (Housemon), Mugendramon (hit de 100k + stack de dano) e Piedmon (UFM Shield e sequências).",
    arquivo: "posts/four-pillars.html"
  },
  {
    titulo: "Guia de Raid: Void Space (Apocalymon) — Mecânicas & Curas",
    fase: "end",
    labelFase: "End Game",
    classeTag: "tag-end",
    data: "24 de Novembro, 2026 • Guia de Dungeons DMW",
    imagem: "img/apodg.png", // Troque pela imagem/print da Void Space
    resumo: "Composição (WarGreymon Shin + 3 OMM), rotações de Stack/Split aos 70% e 35%, ordem exata de cura (Choco/HoH/CC) e alerta de Feel the Pain invisível.",
    arquivo: "posts/void-space.html"
  },
  {
    titulo: "Guia de Raid: Odaiba Park (MetalGaruru, WarGrey & OMM)",
    fase: "end",
    labelFase: "End Game",
    classeTag: "tag-end",
    data: "24 de Novembro, 2026 • Guia de Dungeons DMW",
    imagem: "img/ommdg.png", // Troque pela imagem/print da Odaiba Park
    resumo: "Roteiro dos 3 chefes: sequências do MetalGarurumon, posicionamento atrás da torre no WarGreymon, mecânica dos 3 itens no Ordine (50%) e DPS Check final do OMM.",
    arquivo: "posts/odaiba-park.html"
  },
  {
    titulo: "Guia de Raid: Abyss Floor 6 — Mecânicas & Sequências",
    fase: "end",
    labelFase: "End Game",
    classeTag: "tag-end",
    data: "24 de Novembro, 2026 • Guia de Dungeons DMW",
    imagem: "img/ordinelv6.png", // Troque pela imagem/print do Abyss Floor 6
    resumo: "Tabela completa (95% ao 10%), ciclos de 30s (Big Split e HB Meteors), Omae de 76k aos 55% e sequência de Stack/Split aos 35%, 30% e 25%.",
    arquivo: "posts/abyss-floor-6.html"
  },
  {
    titulo: "Guia de Raid: Fanglongmon Hard (FDGH) — Mecânicas & Direções",
    fase: "end",
    labelFase: "End Game",
    classeTag: "tag-end",
    data: "24 de Novembro, 2026 • Guia de Dungeons DMW",
    imagem: "img/fdghdg.png", // Troque pela imagem/print da FDGH
    resumo: "Tabela de direções por cor (Oeste/Sul/Leste/Norte), posição dos 3 Devas (64%), ordem dos círculos aos 50% e regras de sobrevivência.",
    arquivo: "posts/fdgh.html"
  },


];

// ========================================================
// 2. CATÁLOGO DE PATCH NOTES
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

// ========================================================
// 3. CATÁLOGO DE FERRAMENTAS & SIMULADORES
// ========================================================
const listaFerramentas = [
  {
    categoria: "Simulador • True Vice",
    data: "Calculadora Interativa",
    titulo: "Calculadora de True Digivice (Tokyo Tokens 5:1)",
    imagem: "img/maxresdefault.jpg",
    resumo: "Selecione sua etapa atual (Beginning/Adventure) e calcule quanto falta de Essence e Tokyo Tokens.",
    arquivo: "posts/calc-true-vice.html"
  },
  {
    categoria: "Simulador • Dungeons",
    data: "Ferramenta Interativa",
    titulo: "Verificador de Dungeons (DPS & Tank)",
    imagem: "img/verfdg.png",
    resumo: "Informe seus status de DPS (HP/CT/HT) ou Tank (HP/DE/BL) para descobrir quais dungeons você já pode fazer.",
    arquivo: "posts/verificador-dg.html"
  }
];
// ========================================================
// 4. MOTOR DO SITE (CARREGAMENTO, FILTROS E SCROLL)
// ========================================================
document.addEventListener("DOMContentLoaded", () => {
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

  const gradeGuias = document.getElementById('grade-guias');
  const gradePatches = document.getElementById('grade-patches');
  const gradeFerramentas = document.getElementById('grade-ferramentas');
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
  renderizarFerramentas();

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
// 5. CALCULADORA DE TRUE DIGIVICE (COM TOKYO TOKENS 5:1)
// ========================================================
const receitasVice = [
  { essence: 150, skull: 30, soul: 0, venom: 0 },
  { essence: 300, skull: 40, soul: 0, venom: 0 },
  { essence: 300, skull: 0, soul: 30, venom: 0 },
  { essence: 500, skull: 0, soul: 0, venom: 30 },
  { essence: 500, skull: 0, soul: 0, venom: 40 }
];

let metaAtualVice = { essence: 1750, skull: 70, soul: 30, venom: 70 };

window.atualizarMetaVice = function() {
  const select = document.getElementById('etapa-atual-vice');
  const etapaInicial = select ? parseInt(select.value, 10) : 0;

  metaAtualVice = { essence: 0, skull: 0, soul: 0, venom: 0 };
  for (let i = etapaInicial; i < receitasVice.length; i++) {
    metaAtualVice.essence += receitasVice[i].essence;
    metaAtualVice.skull += receitasVice[i].skull;
    metaAtualVice.soul += receitasVice[i].soul;
    metaAtualVice.venom += receitasVice[i].venom;
  }

  document.getElementById('meta-essence').textContent = metaAtualVice.essence;
  document.getElementById('meta-skull').textContent = metaAtualVice.skull;
  document.getElementById('meta-soul').textContent = metaAtualVice.soul;
  document.getElementById('meta-venom').textContent = metaAtualVice.venom;

  window.calcularVice();
};

window.calcularVice = function() {
  const itens = ['essence', 'skull', 'soul', 'venom'];
  let faltam = { essence: 0, skull: 0, soul: 0, venom: 0 };
  let concluidos = { essence: 0, skull: 0, soul: 0, venom: 0 };

  itens.forEach(item => {
    const input = document.getElementById(`input-${item}`);
    const colFalta = document.getElementById(`falta-${item}`);
    const colTokens = document.getElementById(`tokens-${item}`);
    if (!input || !colFalta) return;

    let tenho = parseInt(input.value, 10) || 0;
    if (tenho < 0) { tenho = 0; input.value = ''; }

    const meta = metaAtualVice[item];
    const falta = Math.max(meta - tenho, 0);
    faltam[item] = falta;
    concluidos[item] = Math.min(tenho, meta);

    if (meta === 0) {
      colFalta.textContent = 'Não precisa';
      colFalta.style.color = '#64748b';
    } else if (falta === 0) {
      colFalta.textContent = '✔ Completo';
      colFalta.style.color = '#00ff88';
    } else {
      colFalta.textContent = falta;
      colFalta.style.color = '#f8fafc';
    }

    if (colTokens && item !== 'essence') {
      colTokens.textContent = falta * 5;
    }
  });

  const tokensNecessariosItens = (faltam.skull + faltam.soul + faltam.venom) * 5;
  const inputBag = document.getElementById('tokens-atuais');
  const tokensNaBag = inputBag ? Math.max(parseInt(inputBag.value, 10) || 0, 0) : 0;
  const tokensParaFarmar = Math.max(tokensNecessariosItens - tokensNaBag, 0);

  document.getElementById('res-falta-essence').textContent = faltam.essence === 0 ? '✔ OK' : faltam.essence;
  document.getElementById('res-tokens-bruto').textContent = tokensNecessariosItens;
  document.getElementById('res-tokens-farmar').textContent = tokensParaFarmar === 0 ? 'Pronto! 🎉' : `${tokensParaFarmar} Tokens`;

  const metaTokensTotal = (metaAtualVice.skull + metaAtualVice.soul + metaAtualVice.venom) * 5;
  const pontosMeta = metaAtualVice.essence + metaTokensTotal;
  const tokensConcluidos = Math.min(((concluidos.skull + concluidos.soul + concluidos.venom) * 5) + tokensNaBag, metaTokensTotal);
  const pontosConcluidos = concluidos.essence + tokensConcluidos;

  const progresso = pontosMeta > 0 ? Math.min(Math.round((pontosConcluidos / pontosMeta) * 100), 100) : 100;
  document.getElementById('texto-porcentagem').textContent = `${progresso}%`;
  document.getElementById('barra-progresso').style.width = `${progresso}%`;

  const elStatus = document.getElementById('status-final-vice');
  if (elStatus) {
    elStatus.textContent = (faltam.essence === 0 && tokensParaFarmar === 0)
      ? '🎉 Você já tem todos os recursos necessários para o True Digivice!'
      : '';
  }
};

window.zerarCalcVice = function() {
  const inputBag = document.getElementById('tokens-atuais');
  if (inputBag) inputBag.value = '';
  ['essence', 'skull', 'soul', 'venom'].forEach(item => {
    const input = document.getElementById(`input-${item}`);
    if (input) input.value = '';
  });
  window.calcularVice();
};
// ========================================================
// 6. VERIFICADOR DE DUNGEONS (BANCO COMPLETO)
// ========================================================
let funcaoAtualDG = 'dps';

const bancoDungeons = [
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
    tank: { hp: 60000, de: 0, bl: 100, nota: "Requisito Overall • Exige também: HT 7.5k+." }
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
  }
];
function converterValorStatus(valorTexto) {
  if (!valorTexto) return 0;
  let limpo = valorTexto.toString().trim().toLowerCase().replace(',', '.').replace('%', '');
  if (limpo.endsWith('k')) return (parseFloat(limpo.slice(0, -1)) || 0) * 1000;
  if (limpo.endsWith('m')) return (parseFloat(limpo.slice(0, -1)) || 0) * 1000000;
  return parseFloat(limpo) || 0;
}

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
    i1.placeholder = 'Ex: 105k ou 105000';
    i2.placeholder = 'Ex: 350 ou 350%';
    i3.placeholder = 'Ex: 15.5k ou 15500';
  } else {
    btnTank.className = 'btn-funcao ativo-tank';
    btnDps.className = 'btn-funcao';
    l1.textContent = '❤️ Seu HP Máximo';
    l2.textContent = '🛡️ Sua Defesa (DE)';
    l3.textContent = '🧱 Seu Block (BL %)';
    i1.placeholder = 'Ex: 230k ou 230000';
    i2.placeholder = 'Ex: 45k ou 45000';
    i3.placeholder = 'Ex: 190 ou 190%';
  }
};

window.verificarDungeons = function() {
  const s1 = converterValorStatus(document.getElementById('input-stat-1').value);
  const s2 = converterValorStatus(document.getElementById('input-stat-2').value);
  const s3 = converterValorStatus(document.getElementById('input-stat-3').value);
  const containerRes = document.getElementById('resultado-dungeons');

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
        <p style="margin: 6px 0 0 0; font-size: 0.9rem; color: #cbd5e1;">Confira os valores digitados ou fortaleça seus selos, acessórios e clonagem!</p>
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
// ========================================================
// 7. TRADUTOR INTERNO INSTANTÂNEO (PT-BR <-> EN-US)
// ========================================================
async function traduzirLoteGoogle(textos) {
  const unificado = textos.join('\n|||\n');
  try {
    const url = 'https://googleapis.com' + encodeURIComponent(unificado);
    const res = await fetch(url);
    const data = await res.json();
    const traduzidoCompleto = data.map(item => item).join('');
    return traduzidoCompleto.split(/\s*\|\|\|\s*/);
  } catch (e) {
    return textos;
  }
}

window.mudarIdioma = async function(lang) {
  localStorage.setItem('digilab_lang', lang);

  const btnPt = document.getElementById('btn-lang-pt');
  const btnEn = document.getElementById('btn-lang-en');
  if (btnPt && btnEn) {
    btnPt.classList.toggle('ativo', lang === 'pt');
    btnEn.classList.toggle('ativo', lang === 'en');
  }

  if (lang === 'pt') {
    window.location.reload();
    return;
  }

  if (btnEn) btnEn.innerHTML = '<img src="https://flagcdn.com" alt="EN"> ...';

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  const nos = [];
  let no;

  while ((no = walker.nextNode())) {
    const pai = no.parentElement;
    if (!pai || pai.tagName === 'SCRIPT' || pai.tagName === 'STYLE' || pai.closest('.seletor-idioma')) continue;
    const limpo = no.nodeValue.trim();
    if (limpo.length > 1 && /[a-zA-ZÀ-ÿ]/.test(limpo)) {
      nos.push(no);
    }
  }

  const tamanhoLote = 25;
  for (let i = 0; i < nos.length; i += tamanhoLote) {
    const fatiaNos = nos.slice(i, i + tamanhoLote);
    const textosOriginais = fatiaNos.map(n => n.nodeValue.trim());
    const textosTraduzidos = await traduzirLoteGoogle(textosOriginais);

    fatiaNos.forEach((n, idx) => {
      if (textosTraduzidos[idx]) {
        n.nodeValue = n.nodeValue.replace(n.nodeValue.trim(), textosTraduzidos[idx]);
      }
    });
  }

  if (btnEn) btnEn.innerHTML = '<img src="https://flagcdn.com" alt="EN-US"> EN';
};

window.addEventListener('load', () => {
  if (localStorage.getItem('digilab_lang') === 'en') {
    setTimeout(() => window.mudarIdioma('en'), 800);
  }
});


