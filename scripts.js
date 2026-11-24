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
    const item = tipo === 'patch' ? listaPatches[id] : guiasProgressao[id];

    if (item) {
      document.title = `${item.titulo} • Digi-Portal`;
      const tagTexto = tipo === 'patch' ? item.versao : item.labelFase;
      const tagClasse = tipo === 'patch' ? 'tag-patch' : item.classeTag;
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
  const c0 = document.getElementById('cenario-0'), c1 = document.getElementById('cenario-1'), c2 = document.getElementById('cenario-2');
  const secProg = document.getElementById('progressao'), secPatch = document.getElementById('patch-notes');

  function atualizarCenario() {
    if (!c0 || !c1 || !c2 || !secProg || !secPatch) return;
    const s = window.scrollY, h = window.innerHeight;
    if (s < secProg.offsetTop - h * 0.55) { c0.style.opacity = 1; c1.style.opacity = 0; c2.style.opacity = 0; }
    else if (s < secPatch.offsetTop - h * 0.55) { c0.style.opacity = 0; c1.style.opacity = 1; c2.style.opacity = 0; }
    else { c0.style.opacity = 0; c1.style.opacity = 0; c2.style.opacity = 1; }
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
