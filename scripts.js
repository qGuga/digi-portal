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
  {
    titulo: "Guia de Raid: Void Space [Hard] — Apocalymon",
    fase: "end",
    labelFase: "End Game",
    classeTag: "tag-end",
    data: "26 de Novembro, 2026 • Guia de Dungeons DMW",
    imagem: "img/apo.jpg", // Troque pelo nome da imagem/print da Apo Hard
    resumo: "Roteiro completo das 3 fases: Apocalymon (debuffs opostos), mensagens enganosas, regra do MetalEtemon e rotação de cura dos 30%.",
    arquivo: "posts/void-space-hard.html"
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

window.aplicarTraducao = function() {
  if (localStorage.getItem('digilab_lang') !== 'en' || typeof dicionarioExatoEN === 'undefined') return;

  // Placeholders de inputs
  document.querySelectorAll('input[placeholder]').forEach(inp => {
    const ph = inp.getAttribute('placeholder');
    if (dicionarioExatoEN[ph]) inp.setAttribute('placeholder', dicionarioExatoEN[ph]);
  });

  // Atributos title, alt, aria-label
  document.querySelectorAll('[title], [alt], [aria-label]').forEach(el => {
    ['title', 'alt', 'aria-label'].forEach(attr => {
      if (el.hasAttribute(attr)) {
        const val = el.getAttribute(attr);
        if (dicionarioExatoEN[val]) el.setAttribute(attr, dicionarioExatoEN[val]);
      }
    });
  });

  // Nós de texto
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let no;
  while ((no = walker.nextNode())) {
    const pai = no.parentElement;
    if (!pai || pai.tagName === 'SCRIPT' || pai.tagName === 'STYLE' || pai.closest('.seletor-idioma')) continue;

    let texto = no.nodeValue;
    const limpo = texto.trim();
    if (limpo === '') continue;

    if (dicionarioExatoEN[limpo]) {
      no.nodeValue = texto.replace(limpo, dicionarioExatoEN[limpo]);
    } else if (limpo.length > 2 && typeof substituicoesParciaisEN !== 'undefined') {
      let alterado = texto;
      substituicoesParciaisEN.forEach(([regex, troca]) => {
        alterado = alterado.replace(regex, troca);
      });
      no.nodeValue = alterado;
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  function t(texto) {
    if (localStorage.getItem('digilab_lang') === 'en' && typeof dicionarioExatoEN !== 'undefined') {
      if (dicionarioExatoEN[texto]) return dicionarioExatoEN[texto];
      let alterado = texto;
      if (typeof substituicoesParciaisEN !== 'undefined') {
        substituicoesParciaisEN.forEach(([regex, troca]) => {
          alterado = alterado.replace(regex, troca);
        });
      }
      return alterado;
    }
    return texto;
  }

  const containerArtigo = document.getElementById('artigo-completo');
  if (containerArtigo) {
    const params = new URLSearchParams(window.location.search);
    const tipo = params.get('tipo');
    const id = parseInt(params.get('id'), 10);
    const item = tipo === 'patch' ? listaPatches[id] : (tipo === 'tool' ? listaFerramentas[id] : guiasProgressao[id]);

    if (item) {
      const tituloTraduzido = t(item.titulo);
      const dataTraduzida = t(item.data);
      const tagTexto = t(tipo === 'patch' ? item.versao : (tipo === 'tool' ? item.categoria : item.labelFase));

      document.title = `${tituloTraduzido} • DigiLab-Hub`;
      const tagClasse = tipo === 'patch' ? 'tag-patch' : (tipo === 'tool' ? 'tag-tool' : item.classeTag);
      const bannerHtml = item.imagem ? `<img src="${item.imagem}" alt="${tituloTraduzido}" class="artigo-banner">` : '';

      const exibirConteudo = (htmlTexto) => {
        containerArtigo.innerHTML = `
          ${bannerHtml}
          <span class="badge-tag ${tagClasse}">${tagTexto}</span>
          <h1 style="font-size: clamp(1.8rem, 4vw, 2.6rem); margin: 10px 0;">${tituloTraduzido}</h1>
          <p style="color: #94a3b8; font-size: 0.9rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; margin-bottom: 30px;">
            📅 ${dataTraduzida}
          </p>
          <div class="corpo-texto">${htmlTexto}</div>
        `;
      };

      if (item.arquivo) {
        const idiomaAtual = localStorage.getItem('digilab_lang') || 'pt';
        const arquivoAlvo = idiomaAtual === 'en'
          ? item.arquivo.replace('posts/', 'post_en/')
          : item.arquivo;

        fetch(arquivoAlvo)
          .then(res => res.ok ? res.text() : fetch(item.arquivo).then(r => r.text()))
          .then(html => {
            exibirConteudo(html);
            window.aplicarTraducao();
          })
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
      const tituloTraduzido = t(guia.titulo);
      const resumoTraduzido = t(guia.resumo);

      const bateCat = categoriaAtual === 'todos' || guia.fase === categoriaAtual;
      const bateBusca = tituloTraduzido.toLowerCase().includes(termo) || resumoTraduzido.toLowerCase().includes(termo);

      if (bateCat && bateBusca) {
        const card = document.createElement('a');
        card.href = `artigo.html?tipo=guia&id=${index}`;
        card.className = 'item-card';
        card.style.textDecoration = 'none';
        card.style.color = 'inherit';
        const thumbHtml = guia.imagem ? `<img src="${guia.imagem}" alt="${tituloTraduzido}" class="card-thumb">` : '';

        card.innerHTML = `
          <div>
            ${thumbHtml}
            <span class="badge-tag ${guia.classeTag}">${guia.labelFase}</span>
            <h3 style="margin: 0 0 8px 0; color: #f8fafc;">${tituloTraduzido}</h3>
            <p style="margin: 0; font-size: 0.9rem; color: #94a3b8;">${resumoTraduzido}</p>
          </div>
          <span style="margin-top: 16px; font-size: 0.85rem; color: #00e5ff; font-weight: bold;">${t("Abrir guia completo →")}</span>
        `;
        gradeGuias.appendChild(card);
      }
    });
  }

  function renderizarPatches() {
    if (!gradePatches) return;
    gradePatches.innerHTML = '';
    listaPatches.forEach((patch, index) => {
      const tituloTraduzido = t(patch.titulo);
      const resumoTraduzido = t(patch.resumo);

      const card = document.createElement('a');
      card.href = `artigo.html?tipo=patch&id=${index}`;
      card.className = 'item-card patch';
      card.style.textDecoration = 'none';
      card.style.color = 'inherit';
      const thumbHtml = patch.imagem ? `<img src="${patch.imagem}" alt="${tituloTraduzido}" class="card-thumb">` : '';

      card.innerHTML = `
        <div>
          ${thumbHtml}
          <span class="badge-tag tag-patch">${t(patch.versao)}</span>
          <h3 style="margin: 0 0 8px 0; color: #f8fafc;">${tituloTraduzido}</h3>
          <p style="margin: 0; font-size: 0.9rem; color: #94a3b8;">${resumoTraduzido}</p>
        </div>
        <span style="margin-top: 16px; font-size: 0.85rem; color: #fb7185; font-weight: bold;">${t("Ler notas completas →")}</span>
      `;
      gradePatches.appendChild(card);
    });
  }

  function renderizarFerramentas() {
    if (!gradeFerramentas) return;
    gradeFerramentas.innerHTML = '';
    listaFerramentas.forEach((tool, index) => {
      const tituloTraduzido = t(tool.titulo);
      const resumoTraduzido = t(tool.resumo);

      const card = document.createElement('a');
      card.href = `artigo.html?tipo=tool&id=${index}`;
      card.className = 'item-card tool';
      card.style.textDecoration = 'none';
      card.style.color = 'inherit';
      const thumbHtml = tool.imagem ? `<img src="${tool.imagem}" alt="${tituloTraduzido}" class="card-thumb">` : '';

      card.innerHTML = `
        <div>
          ${thumbHtml}
          <span class="badge-tag tag-tool">${t(tool.categoria)}</span>
          <h3 style="margin: 0 0 8px 0; color: #f8fafc;">${tituloTraduzido}</h3>
          <p style="margin: 0; font-size: 0.9rem; color: #94a3b8;">${resumoTraduzido}</p>
        </div>
        <span style="margin-top: 16px; font-size: 0.85rem; color: #fbbf24; font-weight: bold;">${t("Abrir simulador →")}</span>
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

  // Detecta automaticamente se o post carregado é o post_en/verificador-dg.html
  const btnVerificar = document.querySelector('.btn-verificar');
  const isEN = btnVerificar && btnVerificar.textContent.includes('Check');

  document.getElementById('resultado-dungeons').innerHTML = '';
  i1.value = '';
  i2.value = '';
  i3.value = '';

  if (role === 'dps') {
    btnDps.className = 'btn-funcao ativo-dps';
    btnTank.className = 'btn-funcao';
    l1.textContent = isEN ? '❤️ Max HP' : '❤️ Seu HP Máximo';
    l2.textContent = isEN ? '💥 Critical Rate (CT %)' : '💥 Seu Critical Rate (CT %)';
    l3.textContent = isEN ? '🎯 Hit Rate (HT)' : '🎯 Seu Hit Rate (HT)';
    i1.placeholder = isEN ? 'e.g., 105k or 105000' : 'Ex: 105k ou 105000';
    i2.placeholder = isEN ? 'e.g., 350 or 350%' : 'Ex: 350 ou 350%';
    i3.placeholder = isEN ? 'e.g., 15.5k or 15500' : 'Ex: 15.5k ou 15500';
  } else {
    btnTank.className = 'btn-funcao ativo-tank';
    btnDps.className = 'btn-funcao';
    l1.textContent = isEN ? '❤️ Max HP' : '❤️ Seu HP Máximo';
    l2.textContent = isEN ? '🛡️ Defense (DE)' : '🛡️ Sua Defesa (DE)';
    l3.textContent = isEN ? '🧱 Block (BL %)' : '🧱 Seu Block (BL %)';
    i1.placeholder = isEN ? 'e.g., 230k or 230000' : 'Ex: 230k ou 230000';
    i2.placeholder = isEN ? 'e.g., 45k or 45000' : 'Ex: 45k ou 45000';
    i3.placeholder = isEN ? 'e.g., 190 or 190%' : 'Ex: 190 ou 190%';
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
// 7. TRADUTOR NATIVO EXPANDIDO (PT-BR <-> EN-US)
// ========================================================
const dicionarioExatoEN = {
  // Menu, Hero e Navegação
  "GUIAS": "GUIDES",
  "PATCHES": "PATCHES",
  "FERRAMENTAS": "TOOLS",
  "Guias, Patch Notes & Calculadoras DMW": "DMW Guides, Patch Notes & Calculators",
  "Central de ferramentas, calculadora de True Digivice, verificador de Dungeons e roteiros completos para DMW.": "Tool hub, True Digivice calculator, Dungeon checker, and complete progression guides for DMW.",
  "Explorar Guias": "Explore Guides",
  "Ver Patch Notes": "View Patch Notes",
  "Abrir Calculadoras": "Open Calculators",
  "Guias de Progressão": "Progression Guides",
  "Todos": "All",
  "Todos os Guias": "All Guides",
  "Buscar guia por nome ou palavra-chave...": "Search guide by name or keyword...",
  "Notas de Atualização (Patch Notes)": "Update Notes (Patch Notes)",
  "Ferramentas & Calculadoras": "Tools & Calculators",
  "Abrir guia completo →": "Open full guide →",
  "Ler notas completas →": "Read full notes →",
  "Abrir simulador →": "Open simulator →",
  "← Voltar para o Portal": "← Back to Portal",
  "▲ TOPO": "▲ TOP",
  "Voltar ao topo": "Back to top",
  "✕ FECHAR": "✕ CLOSE",

  // Ferramentas e Calculadoras
  "Simulador • True Vice": "Simulator • True Vice",
  "Calculadora Interativa": "Interactive Calculator",
  "Calculadora de True Digivice (Tokyo Tokens 5:1)": "True Digivice Calculator (Tokyo Tokens 5:1)",
  "Selecione sua etapa atual (Beginning/Adventure) e calcule quanto falta de Essence e Tokyo Tokens.": "Select your current stage (Beginning/Adventure) and calculate remaining Essence and Tokyo Tokens.",
  "Simulador • Dungeons": "Simulator • Dungeons",
  "Ferramenta Interativa": "Interactive Tool",
  "Verificador de Dungeons (DPS & Tank)": "Dungeon Checker (DPS & Tank)",
  "Informe seus status de DPS (HP/CT/HT) ou Tank (HP/DE/BL) para descobrir quais dungeons você já pode fazer.": "Enter your DPS (HP/CT/HT) or Tank (HP/DE/BL) stats to see which dungeons you can clear.",
  "Verificar Dungeons Compatíveis": "Check Compatible Dungeons",
  "Material Necessário": "Required Material",
  "Você Tem": "You Have",
  "Meta": "Goal",
  "Faltam": "Missing",
  "Troca": "Exchange",
  "Tokens Faltando": "Missing Tokens",
  "Zerar Campos": "Reset Fields",
  "Progresso Total até o True Digivice": "Total Progress to True Digivice",
  "Essence Restante": "Remaining Essence",
  "Tokens para os Itens": "Tokens for Items",
  "Tokyo Tokens a Farmar": "Tokyo Tokens to Farm",
  "Tabela Completa de Receitas por Etapa": "Complete Recipe Table by Stage",
  "Etapa": "Stage",
  "Seu HP Máximo": "Your Max HP",
  "Seu Critical Rate (CT %)": "Your Critical Rate (CT %)",
  "Seu Hit Rate (HT)": "Your Hit Rate (HT)",
  "Sua Defesa (DE)": "Your Defense (DE)",
  "Seu Block (BL %)": "Your Block (BL %)",

  // Cabeçalhos e Títulos Comuns nas Raids
  "HP do Boss": "Boss HP",
  "HP do Chefe": "Boss HP",
  "Mecânica Ativada": "Triggered Mechanic",
  "Mecânica": "Mechanic",
  "Status": "Stat",
  "Atributo": "Attribute",
  "Requisito": "Requirement",
  "Recomendação": "Recommendation",
  "Recomendações de Status": "Recommended Stats",
  "Composição & Recomendações": "Composition & Recommendations",
  "Composição & Digimons Recomendados": "Recommended Composition & Digimon",
  "Mecânicas Gerais": "General Mechanics",
  "Mecânicas Finais": "Final Mechanics",
  "Observações Importantes": "Important Notes",

  // Tags de atributo (cabeçalhos das seções e cards da página inicial)
  "// ROTEIRO DO TAMER": "// TAMER ROADMAP",
  "// CHANGELOG OFICIAL": "// OFFICIAL CHANGELOG",
  "// SIMULADORES & UTILIDADES": "// SIMULATORS & UTILITIES",
  "// EVOLUÇÃO DA CONTA": "// ACCOUNT EVOLUTION",
  "// REGISTRO DO SISTEMA": "// SYSTEM LOG",
  "// CÁLCULO DE RECURSOS": "// RESOURCE CALCULATION",

  // Hero / topo da página inicial
  "Servidor DMO • Patch v3.5.4 Ativo": "DMO Server • Patch v3.5.4 Active",
  "Roteiros completos de progressão, dicas de farm e registro oficial de atualizações do servidor.": "Complete progression guides, farming tips, and official server update log.",

  // Cards da página inicial
  "Do nível 1 ao End-Game: equipamentos, selos, acessórios e rotas de farm.": "From level 1 to End-Game: equipment, seals, accessories, and farming routes.",
  "Notas de atualização, balanceamentos, novos sistemas e eventos ativos.": "Update notes, balance changes, new systems, and active events.",
  "Calculadoras de farm, quantidade de materiais para craft e simuladores.": "Farming calculators, craft material quantities, and simulators.",

  // Seções da página inicial
  "🔥 Patch Notes & Atualizações": "🔥 Patch Notes & Updates",
  "🔥 Patch Notes & Eventos": "🔥 Patch Notes & Events",
  "🛠️ Ferramentas & Simuladores de Farm": "🛠️ Tools & Farming Simulators",

  // Títulos dos cards da página inicial (com emoji)
  "📈 Guias de Progressão": "📈 Progression Guides",
  "🛠️ Ferramentas": "🛠️ Tools",
  "Selecione um simulador abaixo para calcular exatamente quantos itens você precisa farmar.": "Select a simulator below to calculate exactly how many items you need to farm.",

  // Busca e filtros
  "🔍 Buscar (ex: Super Jumping, Dungeons, Acessórios)...": "🔍 Search (e.g. Super Jumping, Dungeons, Accessories)...",

  "🍀 Boa sorte nas suas runs!": "🍀 Good luck on your runs!",
  "🎉 Fim do Guia! Bom farm no Digital World!": "🎉 End of Guide! Happy farming in the Digital World!",

  // Títulos dos Guias
  "Iniciando a Conta: Roteiro Completo do Nível 1 ao 120": "Starting Your Account: Complete Guide from Level 1 to 120",
  "Continuação Early Game: Liberando e Completando Shinjuku": "Early Game Continuation: Unlocking & Completing Shinjuku",
  "Fechando o Early Game: Desbloqueio da Digital Area": "Closing Early Game: Unlocking Digital Area",
  "Saga de Tokyo Area: Liberando Odaiba, Big Sight e Shibuya": "Tokyo Area Saga: Unlocking Odaiba, Big Sight & Shibuya",
  "Desbloqueando Spiral Mountain: Pré-requisitos & Áreas": "Unlocking Spiral Mountain: Prerequisites & Areas",
  "Guia de Raid: Coliseu Extreme (R1 ao R6) — Mecânicas": "Raid Guide: Colosseum Extreme (R1 to R6) — Mechanics",
  "Guia de Raid: Berserk Arena (Alter-S & Zwart) — Mecânicas": "Raid Guide: Berserk Arena (Alter-S & Zwart) — Mechanics",
  "Guia de Raid: Green Zone [EX] (Bagramon) — Mecânicas": "Raid Guide: Green Zone [EX] (Bagramon) — Mechanics",
  "Guia de Raid: Chaotic Battlefield (Beelzemon) — Skip Run": "Raid Guide: Chaotic Battlefield (Beelzemon) — Skip Run",
  "Guia de Raid: Burning Battlefield (Megidramon) — Mecânicas": "Raid Guide: Burning Battlefield (Megidramon) — Mechanics",
  "Guia de Raid: Final Battlefield — Common Skip Run": "Raid Guide: Final Battlefield — Common Skip Run",
  "Guia de Raid: Bagramon Domain — Mecânicas": "Raid Guide: Bagramon Domain — Mechanics",
  "Guia de Raid: Shopping Mall (Mall Dungeon) — Mecânicas": "Raid Guide: Shopping Mall (Mall Dungeon) — Mechanics",
  "Guia de Raid: Neverland — Mecânicas & Status": "Raid Guide: Neverland — Mechanics & Stats",
  "Guia de Raid: Venomous Vortex [Hard] (Venom Vamdemon)": "Raid Guide: Venomous Vortex [Hard] (Venom Vamdemon)",
  "Guia de Raid: Path of Bravery (WarGreymon) — Mecânicas": "Raid Guide: Path of Bravery (WarGreymon) — Mechanics",
  "Guia de Raid: Path of Friendship (MetalGarurumon) — Mecânicas": "Raid Guide: Path of Friendship (MetalGarurumon) — Mechanics",
  "Guia de Raid: Marine Dungeon — Common Skip Run": "Raid Guide: Marine Dungeon — Common Skip Run",
  "Guia de Raid: Puppet Dungeon (Puppetmon) — Mecânicas": "Raid Guide: Puppet Dungeon (Puppetmon) — Mechanics",
  "Guia de Raid: Mugen Dungeon (MugenDramon) — Mecânicas": "Raid Guide: Mugen Dungeon (MugenDramon) — Mechanics",
  "Guia de Raid: Piedmon Dungeon — Mecânicas": "Raid Guide: Piedmon Dungeon — Mechanics",
  "Guia de Raid: Royal Base Hard (RBH) — Todas as Salas": "Raid Guide: Royal Base Hard (RBH) — All Rooms",
  "Guia de Raid: Four Pillars (4 Mestres das Trevas) — Mecânicas": "Raid Guide: Four Pillars (4 Dark Masters) — Mechanics",
  "Guia de Raid: Void Space (Apocalymon) — Mecânicas & Curas": "Raid Guide: Void Space (Apocalymon) — Mechanics & Heals",
  "Guia de Raid: Odaiba Park (MetalGaruru, WarGrey & OMM)": "Raid Guide: Odaiba Park (MetalGaruru, WarGrey & OMM)",
  "Guia de Raid: Abyss Floor 6 — Mecânicas & Sequências": "Raid Guide: Abyss Floor 6 — Mechanics & Sequences",
  "Guia de Raid: Fanglongmon Hard (FDGH) — Mecânicas & Direções": "Raid Guide: Fanglongmon Hard (FDGH) — Mechanics & Directions",
  "Tera Tours Guide: Spiral Tour, Forest Tour & Rota Sequencial": "Tera Tours Guide: Spiral Tour, Forest Tour & Sequential Route",

  // Rodapé
  "⚠ Aviso Legal (Fan-Wiki / Fan-Site Não Oficial):": "⚠ Legal Disclaimer (Unofficial Fan-Wiki / Fan-Site):",
  "Este portal é um projeto independente feito de fã para fã, sem qualquer vínculo, patrocínio ou afiliação com a": "This portal is an independent fan-made project with no affiliation, sponsorship, or endorsement from",
  "Todas as marcas, nomes e imagens do jogo pertencem aos seus respectivos proprietários.": "All game trademarks, names, and images belong to their respective owners.",
  "• Guias, ferramentas e layout desenvolvidos por": "• Guides, tools, and layout developed by",

    // Resumos dos Cards na Página Inicial
  "Roteiro organizado por etapas: evolução inicial, principais quests, acesso aos continentes, farm e preparação até o nível 120.": "Step-by-step roadmap: early evolution, main quests, continent unlocks, farming, and preparation up to level 120.",
  "Como desbloquear o acesso a Shinjuku (West e East), ordem das main quests, D-Reaper e recompensas essenciais da saga.": "How to unlock Shinjuku (West & East), main quest order, D-Reaper, and essential saga rewards.",
  "Requisitos após Shinjuku, como liberar a entrada da Digital Area, preparação de status e primeiros farms da região.": "Post-Shinjuku requirements, how to unlock Digital Area, stat preparation, and early regional farming.",
  "Como liberar os mapas de Tokyo Area, sequência das main quests (Odaiba, Big Sight, Shibuya), raids locais e preparação de status.": "How to unlock Tokyo Area maps, main quest sequence (Odaiba, Big Sight, Shibuya), local raids, and stat prep.",
  "Como liberar Spiral Mountain após Tokyo-Odaiba (VenomMyotismon), entrada via Gennai e aviso importante sobre a quest do Piedmon.": "How to unlock Spiral Mountain after Tokyo-Odaiba (VenomMyotismon), Gennai entrance, and important note on Piedmon quest.",
  "Preparação para Tanks e DPS, sequência completa de Stack/Split (Millenniummon), círculos de dano e tabela de HP do Examon X e Ordinemon.": "Tank & DPS prep, full Stack/Split sequence (Millenniummon), damage circles, and Examon X / Ordinemon HP table.",
  "Requisitos de Tank e DPS, escolha de Digimons (Shoutmon DX / Icymagnamon), travas de HP (80/60/40/20%) e tabela completa de mecânicas.": "Tank & DPS requirements, Digimon picks (Shoutmon DX / Icymagnamon), HP stops (80/60/40/20%), and full mechanics table.",
  "Passo a passo das mecânicas do Bagramon: Troopmon, veneno, círculo de sobrevivência (insta-kill), debuff de cura e gestão de Tank Busters.": "Step-by-step Bagramon mechanics: Troopmon, poison, survival circle (insta-kill), heal block debuff, and Tank Buster management.",
  "Estratégia de Skip Run com 3 OX (All Delete), timing dos meteoros, mecânica crítica dos Impmons (40%) e finalização aos 11% de HP.": "Skip Run strategy with 3 OX (All Delete), meteor timings, critical Impmon mechanic (40%), and 11% HP finish.",
  "Tabela completa de HP (89% ao 10%), invocação de Towers, círculos verdes de sobrevivência (30%) e DPS check final de 1 minuto.": "Full HP table (89% to 10%), Tower spawns, green survival circles (30%), and 1-minute final DPS check.",
  "Estratégia de Skip Run: rotações de 63%–60%, controle de HP do Raguelmon (não matar!), minions aos 48% e ordem dos Devas (11%–9%).": "Skip Run strategy: 63%–60% rotations, Raguelmon HP control (do not kill!), 48% minions, and Devas order (11%–9%).",
  "Mecânicas do 1º Boss (uso do item pelo Top DPS), Lilith aos 50% de HP e fase de invulnerabilidade aos 30% (sem AOE!).": "1st Boss mechanics (Top DPS item use), Lilith at 50% HP, and invulnerability phase at 30% (no AOE!).",
  "Mecânicas de Meteors, Omae, círculos de sobrevivência aos 30% e 10% de HP e cálculo de dano acumulado do veneno (4k por tick).": "Meteors, Omae, survival circles at 30% & 10% HP, and stacked poison damage calculation (4k per tick).",
  "Recomendações de status (75k+ HP), como mitigar os 70k de dano do Omae, Small Circle aos 50% e DPS Check final.": "Recommended stats (75k+ HP), how to mitigate 70k Omae damage, Small Circle at 50%, and final DPS Check.",
  "Requisitos de SSS+ Vaccine e Tankers, timing do F3 aos 88% e 31% para pular mecânicas, variações de RNG (70%–39%) e DPS Check final.": "SSS+ Vaccine & Tank requirements, F3 timing at 88% & 31% to skip mechanics, RNG variations (70%–39%), and final DPS Check.",
  "Composição (Examon X / Fanglongmon Shin), janelas de F3 para skip (69%–62% e 29%–22%), Stacks de 70k e Huge Split Circles.": "Composition (Examon X / Fanglongmon Shin), F3 skip windows (69%–62% & 29%–22%), 70k Stacks, and Huge Split Circles.",
  "Requisitos de CT (300%+) e composição, debuffs de +20% dano recebido, parada obrigatória aos 60%–59% (Northern Impact) e meteoros finais.": "CT requirements (300%+) & comp, +20% damage taken debuffs, mandatory stop at 60%–59% (Northern Impact), and final meteors.",
  "Recomendações de status (81k+ HP contra o Omae de 80k), títulos defensivos, skip aos 87%, mecânica de 1 pessoa por círculo (29%) e DPS Check final.": "Recommended stats (81k+ HP vs 80k Omae), defensive titles, 87% skip, 1-person-per-circle mechanic (29%), and final DPS Check.",
  "Status recomendados (90k+ HP), mecânica dos Housemons nos cantos (70% e 30%), fase do Housemon Minion (50%) e Small Blue Circles finais.": "Recommended stats (90k+ HP), corner Housemon mechanic (70% & 30%), Housemon Minion phase (50%), and final Small Blue Circles.",
  "Mecânicas de Stack/Unstack, eliminação rápida dos 2 minions aos 49% (evitando Nuke Damage), Blue Circles (24%) e Max Power Burst aos 8%.": "Stack/Unstack mechanics, fast kill on 2 minions at 49% (avoiding Nuke Damage), Blue Circles (24%), and Max Power Burst at 8%.",
  "Tabela completa (95% ao 10%), LadyDevimon (80%), truque de aggro nos Evilmons (60%–55%), Tank Buster de 120k (UVF) e sequência roxa final.": "Full table (95% to 10%), LadyDevimon (80%), Evilmon aggro trick (60%–55%), 120k Tank Buster (UVF), and final purple sequence.",
  "Roteiro completo das 3 salas: Room 1 (Exa/Jes/Gankoo), Room 2 (DexDorugoramon), Room 3 Parte 1 (Death-X-mon) e Parte 2 (AOA + sequência de F3).": "Full 3-room walkthrough: Room 1 (Exa/Jes/Gankoo), Room 2 (DexDorugoramon), Room 3 Part 1 (Death-X-mon), and Part 2 (AOA + F3 sequence).",
  "Roteiro completo dos 4 bosses: MetalSeadramon, Puppetmon (Housemon), Mugendramon (hit de 100k + stack de dano) e Piedmon (UFM Shield e sequências).": "Full 4-boss guide: MetalSeadramon, Puppetmon (Housemon), Mugendramon (100k hit + damage stack), and Piedmon (UFM Shield & sequences).",
  "Composição (WarGreymon Shin + 3 OMM), rotações de Stack/Split aos 70% e 35%, ordem exata de cura (Choco/HoH/CC) e alerta de Feel the Pain invisível.": "Composition (WarGreymon Shin + 3 OMM), Stack/Split rotations at 70% & 35%, exact heal order (Choco/HoH/CC), and invisible Feel the Pain alert.",
  "Roteiro dos 3 chefes: sequências do MetalGarurumon, posicionamento atrás da torre no WarGreymon, mecânica dos 3 itens no Ordine (50%) e DPS Check final do OMM.": "3-boss guide: MetalGarurumon sequences, behind-tower positioning on WarGreymon, 3-item mechanic on Ordine (50%), and OMM final DPS Check.",
  "Tabela completa (95% ao 10%), ciclos de 30s (Big Split e HB Meteors), Omae de 76k aos 55% e sequência de Stack/Split aos 35%, 30% e 25%.": "Full table (95% to 10%), 30s cycles (Big Split & HB Meteors), 76k Omae at 55%, and Stack/Split sequence at 35%, 30%, and 25%.",
  "Tabela de direções por cor (Oeste/Sul/Leste/Norte), posição dos 3 Devas (64%), ordem dos círculos aos 50% e regras de sobrevivência.": "Color-coded direction table (West/South/East/North), 3 Devas positions (64%), circle order at 50%, and survival rules.",
  "Guia completo de farm de Tera: horários e canais da Spiral Tour (3,6T), cronograma da Forest Tour (2,4T + Unique Data) e rota combinada (3,1T).": "Complete Tera farming guide: Spiral Tour schedules & channels (3.6T), Forest Tour schedule (2.4T + Unique Data), and combined route (3.1T).",
  "Chegada do evento de Novembro, ajustes em raids e melhorias de qualidade de vida.": "Arrival of the November event, raid adjustments, and quality-of-life improvements.",
  "Guia de Raid: Void Space [Hard] — Apocalymon": "Raid Guide: Void Space [Hard] — Apocalymon",
  "Roteiro completo das 3 fases: Apocalymon (debuffs opostos), mensagens enganosas, regra do MetalEtemon e rotação de cura dos 30%.": "Complete 3-phase walkthrough: Apocalymon (opposite debuffs), deceptive messages, MetalEtemon golden rule, and 30% healing rotation.",
};

// Substituições parciais para frases repetidas dentro das tabelas de raid
const substituicoesParciaisEN = [
  [/de Novembro, 2026/g, "November, 2026"],
  [/Guia de Dungeons DMW/g, "DMW Dungeons Guide"],
  [/Guia Oficial DMW/g, "Official DMW Guide"],
  [/Guia de Farm DMW/g, "DMW Farming Guide"],
  [/seguido de/g, "followed by"],
  [/seguidos de/g, "followed by"],
  [/seguida de/g, "followed by"],
  [/aparecem na arena/g, "appear in the arena"],
  [/Vários/g, "Multiple"],
  [/vários/g, "multiple"],
  [/aproximadamente/g, "approximately"],
  [/causa/g, "deals"],
  [/de dano/g, "damage"],
  [/Invocação de Minion/g, "Minion Spawn"],
  [/Invocação de/g, "Spawn of"],
  [/Lembrete de Requisitos \(Staff\):/g, "Staff Stat Requirements:"],
  [/Exige também:/g, "Also requires:"],
  [/Status Compatíveis/g, "Compatible Stats"]
];

window.mudarIdioma = function(lang) {
  localStorage.setItem('digilab_lang', lang);
  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location.reload();
  }, 300);
};

window.addEventListener('load', () => {
  const idiomaSalvo = localStorage.getItem('digilab_lang') || 'pt';
  const btnPt = document.getElementById('btn-lang-pt');
  const btnEn = document.getElementById('btn-lang-en');

  if (btnPt && btnEn) {
    btnPt.classList.toggle('ativo', idiomaSalvo === 'pt');
    btnEn.classList.toggle('ativo', idiomaSalvo === 'en');
  }

  window.aplicarTraducao();
});


