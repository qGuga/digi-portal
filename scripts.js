// ========================================================
// 1. BANCO DE DADOS DO PORTAL (COM MINIATURA E BANNER)
// ========================================================
const guiasProgressao = [
  {
    titulo: "Iniciando a Conta: Roteiro Completo do Nível 1 ao 120",
    fase: "early",
    labelFase: "Early Game",
    classeTag: "tag-early",
    data: "23 de Novembro, 2026 • Guia Oficial DMW",
    imagem: "img/jumping.jpg", // Troque pela miniatura/banner deste guia
    resumo: "Roteiro organizado por etapas: evolução inicial, principais quests, acesso aos continentes, farm e preparação até o nível 120.",
    conteudo: `
      <p>Este guia organiza a conta por objetivos. Os requisitos exatos de algumas quests podem mudar após atualizações, por isso siga o <strong>ícone da missão no mapa</strong> e use esta página como checklist de progresso.</p>

      <div style="background: rgba(0, 229, 255, 0.08); border-left: 4px solid #00e5ff; padding: 14px 18px; border-radius: 6px; margin: 18px 0;">
        <strong>Regra principal:</strong> do nível 1 ao 120, faça primeiro as <strong>main quests</strong> necessárias para liberar o próximo mapa. Farm de nível e itens fica em segundo plano até que a progressão esteja destravada.
      </div>

      <h3>Etapa 1 — Níveis 1 a 30: Primeiros sistemas</h3>
      <ol>
        <li>Conclua o tutorial em <strong>Yokohama Village</strong> e aceite todas as quests indicadas pelos NPCs.</li>
        <li>Vá até a <strong>Village of Beginning</strong> e finalize as quests locais antes de avançar.</li>
        <li>Equipe seu Digimon com itens básicos e mantenha um estoque de cura e moedas para viagem rápida.</li>
        <li>Ao chegar no <strong>Tamer Lv 30</strong>, confira os requisitos da próxima linha de quests e libere o progresso necessário.</li>
      </ol>
      <figure style="margin: 24px 0; text-align: center;">
        <img src="img/Captura de tela 2026-11-23 123124.png" alt="Village of Beginning e NPCs iniciais" style="max-width: 100%; border-radius: 8px; border: 1px solid rgba(0, 229, 255, 0.3);">
        <figcaption style="font-size: 0.85rem; color: #94a3b8; margin-top: 6px;">Village of Beginning como ponto de preparação antes da progressão principal.</figcaption>
      </figure>


      <h3>Etapa 2 — Níveis 30 a 44: Entrada em File Island</h3>
      <ol>
        <li>Em <strong>Silver Lake</strong>, complete as quests principais até o desbloqueio da próxima área.</li>
        <li>Avance para <strong>Silent Forest</strong> assim que os requisitos forem exibidos e continue a saga da mesma cadeia de missão.</li>
        <li>Entre em <strong>Lost Historic Site</strong> somente após concluir o objetivo atual da cadeia de File Island.</li>
        <li>Não separe o progresso do Tamer e do Digimon: farm pequeno perto de uma área segura ajuda a evitar travas de nível.</li>
      </ol>

      <figure style="margin: 24px 0; text-align: center;">
        <img src="img/fileisland.png" alt="Silver Lake e Silent Forest" style="max-width: 100%; border-radius: 8px; border: 1px solid rgba(0, 229, 255, 0.3);">
        <figcaption style="font-size: 0.85rem; color: #94a3b8; margin-top: 6px;">Silver Lake: entrada em File Island.</figcaption>
        <img src="img/silentforest.png" alt="Silver Lake e Silent Forest" style="max-width: 100%; border-radius: 8px; border: 1px solid rgba(0, 229, 255, 0.3);">
        <figcaption style="font-size: 0.85rem; color: #94a3b8; margin-top: 6px;">Silent Forest: segunda área em File Island.</figcaption>
      </figure>

      <h3>Etapa 3 — Níveis 44 a 64: Região intermediária de File Island</h3>
      <ol>
        <li>Continue subindo o Digimon até <strong>Lv 44</strong> e confirme o requisito de Tamer Lv 30.</li>
        <li>Finalize as histórias disponíveis em File Island em sequência. Suba apenas o nível necessário para concluir o objetivo atual.</li>
        <li>Ao chegar em <strong>File Island Waterfront</strong>, procure o NPC responsável pela próxima missão da ilha e siga o marcador principal.</li>
        <li>Depois de concluir Waterfront, avance para <strong>Infinite Mountain</strong> conforme os requisitos de Tamer e Digimon forem liberados.</li>
      </ol>

      <figure style="margin: 24px 0; text-align: center;">
        <img src="img/losthistoricsite.png" alt="File Island Waterfront" style="max-width: 100%; border-radius: 8px; border: 1px solid rgba(0, 229, 255, 0.3);">
        <figcaption style="font-size: 0.85rem; color: #94a3b8; margin-top: 6px;">File Island Waterfront: região de transição em File Island.</figcaption>
        <img src="img/infinitemoutain.png" alt="Infinite Mountain" style="max-width: 100%; border-radius: 8px; border: 1px solid rgba(0, 229, 255, 0.3);">
        <figcaption style="font-size: 0.85rem; color: #94a3b8; margin-top: 6px;">Infinite Mountain: região final de File Island.</figcaption>
      </figure>

      <h3>Etapa 4 — Tamer Lv 64 ou superior: Server Continent</h3>
      <p>Server Continent começa após a conclusão das missões principais indicadas em File Island. Confirme o desbloqueio no NPC da travessia antes de voltar a subir nível em mapas antigos.</p>
      <ol>
        <li><strong>Desert:</strong> complete a cadeia principal e use o mapa para preparar seu Digimon para o próximo estágio.</li>
        <li><strong>Canyon:</strong> avance ao cumprir os requisitos da história e mantenha equipamentos compatíveis com o nível dos monstros.</li>
        <li><strong>Pyramid:</strong> finalize a progressão principal e prepare o caminho para os mapas posteriores e para a saga de Odaiba.</li>
      </ol>
      <figure style="margin: 24px 0; text-align: center;">
        <img src="img/desert.png" alt="Desert no Server Continent" style="max-width: 100%; border-radius: 8px; border: 1px solid rgba(0, 229, 255, 0.3);">
        <figcaption style="font-size: 0.85rem; color: #94a3b8; margin-top: 6px;">Desert: região inicial do Server Continent.</figcaption>
        <img src="img/canyon.png" alt="Canyon no Server Continent" style="max-width: 100%; border-radius: 8px; border: 1px solid rgba(0, 229, 255, 0.3);">
        <figcaption style="font-size: 0.85rem; color: #94a3b8; margin-top: 6px;">Canyon: região intermediária do Server Continent.</figcaption>
        <img src="img/pyramid.png" alt="Pyramid no Server Continent" style="max-width: 100%; border-radius: 8px; border: 1px solid rgba(0, 229, 255, 0.3);">
        <figcaption style="font-size: 0.85rem; color: #94a3b8; margin-top: 6px;">Pyramid: região final do Server Continent.</figcaption>
      </figure>

      <h3>Etapa 5 — Níveis 64 a 95: Preparação para Odaiba</h3>
      <ul>
        <li><strong>Montagem básica:</strong> use um Ring, Necklace, Earring e Bracelet com atributos úteis para seu papel.</li>
        <li><strong>Moedas:</strong> mantenha Tera reservada para evolução, equipamentos e viagens. Evite gastar tudo em itens temporários.</li>
        <li><strong>Seals:</strong> Farme os seals da sua classe que você escolheu (AA,SK ou TA).</li>
        <li><strong>Recomendação de Seals:</strong> AA: HP>AT>CT , SK: HP>SK>DS , TA: HP>DE>BLOCK.</li>
      </ul>

      <h3>Etapa 6 — Níveis 95 a 120: Tokyo-Odaiba</h3>
      <p>Depois de concluir o Server Continent e liberar <strong>Tokyo-Odaiba</strong>, procure no DATS Center, o NPC BanchoLeomon.</p>
      <ol>
        <li>Use os bônus de experiência ativos em finais de semana, antes de gastar tempo em mapas comuns.</li>
        <li>Monte uma Party com jogadores de nível próximo para aumentar o ganho de XP.</li>
        <li>Considere o Digimon pronto para o Lv 120 após conseguir farmar no mapa correspondente.</li>
      </ol>
      <figure style="margin: 24px 0; text-align: center;">
        <img src="img/banchodats.png" alt="Área de DATS e Bancho" style="max-width: 100%; border-radius: 8px; border: 1px solid rgba(0, 229, 255, 0.3);">
        <figcaption style="font-size: 0.85rem; color: #94a3b8; margin-top: 6px;">Use o DATS/Bancho ele te leva para mapa XP.</figcaption>
      </figure>

      <h3>Metas paralelas</h3>
      <ul>
        <li><strong>Western Village e Digimon Maze:</strong> use como opção de Tera ou itens quando o objetivo principal estiver travado.</li>
        <li><strong>Dungeons exclusivas:</strong> Recomendo fazer a DG Gizumon Trial, para pegar evos exclusivas do nosso server, como Agu, Lana, Gaoga, Falco.</li>
        <figure style="margin: 24px 0; text-align: center; display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
        <img src="img/Agumonruin.png" alt="Agumon" style="max-width: 45%; border-radius: 8px; border: 1px solid rgba(0, 229, 255, 0.3);">
        <img src="img/Gaomonruin.png" alt="Gaomon" style="max-width: 45%; border-radius: 8px; border: 1px solid rgba(0, 229, 255, 0.3);">
        <img src="img/lanamonruin.png" alt="Lalamon" style="max-width: 45%; border-radius: 8px; border: 1px solid rgba(0, 229, 255, 0.3);">
        <img src="img/falcomonruin.png" alt="Falcomon" style="max-width: 45%; border-radius: 8px; border: 1px solid rgba(0, 229, 255, 0.3);">
        <figcaption style="font-size: 0.85rem; color: #94a3b8; margin-top: 6px; width: 100%; text-align: center;">Digimons parceiros iniciais disponíveis SSS fazendo Gizumon Trial.</figcaption>
      </figure>
        <li><strong>Rank SSS e Jogress:</strong> participe dos eventos ativos e compare o custo real antes de investir todos os seus recursos.</li>
      </ul>

      <figure style="margin: 24px 0; text-align: center;">
        <img src="img/gizutrial.png" alt="DG Gizumon Trial" style="max-width: 100%; border-radius: 8px; border: 1px solid rgba(0, 229, 255, 0.3);">
        <figcaption style="font-size: 0.85rem; color: #94a3b8; margin-top: 6px;">DG Gizumon Trial: dungeon exclusiva para evos especiais do server.</figcaption>
        <img src="img/tradegizu.png" alt="DG Gizumon Trial" style="max-width: 100%; border-radius: 8px; border: 1px solid rgba(0, 229, 255, 0.3);">
        <figcaption style="font-size: 0.85rem; color: #94a3b8; margin-top: 6px;">DG Gizumon Trial: NPC de trade.</figcaption>
        <img src="img/shopgizu.png" alt="DG Gizumon Trial" style="max-width: 100%; border-radius: 8px; border: 1px solid rgba(0, 229, 255, 0.3);">
        <figcaption style="font-size: 0.85rem; color: #94a3b8; margin-top: 6px;">DG Gizumon Trial: shop trade.</figcaption>
      </figure>
    `
  },

  {
    titulo: "Rotação de Dungeons do Evento",
    fase: "mid",
    labelFase: "Mid Game",
    classeTag: "tag-mid",
    data: "18 de Novembro, 2026 • Por Admin",
    imagem: "img/gizutrial.png",
    resumo: "Quais dungeons estão dropando caixas especiais nesta semana e requisitos de entrada.",
    conteudo: `
      <p>Durante o período do evento sazonal, os chefes finais das dungeons listadas abaixo possuem 100% de chance de dropar o <strong>Baú de Recompensa Digital</strong>.</p>
      <h3>Cronograma Semanal</h3>
      <ul>
        <li><strong>Segunda a Quarta:</strong> Holy Beast Dungeons (EDG, ZDG, BDG, QDG).</li>
        <li><strong>Quinta a Domingo:</strong> Royal Base (Normal/Hard) e Venomous Vortex.</li>
      </ul>
    `
  },
  {
    titulo: "Challenger Rewards & Coliseu",
    fase: "end",
    labelFase: "End Game",
    classeTag: "tag-end",
    data: "15 de Novembro, 2026 • Por Admin",
    imagem: "img/shopgizu.png",
    resumo: "Lista de recompensas por pontuação, títulos exclusivos e preparação de status.",
    conteudo: `
      <p>O modo <strong>Coliseu (Arena)</strong> é a principal fonte semanal de itens de aprimoramento avançado no End-Game.</p>
      <h3>Composição Ideal de Grupo</h3>
      <ul>
        <li><strong>2 Attackers (DPS):</strong> Digimon SSS ou SSS+ com vantagem de atributo sobre os chefes.</li>
        <li><strong>1 Healer (Suporte):</strong> Focado em <em>Tree of Life High</em> e <em>Regenerate</em>.</li>
      </ul>
    `
  }
];

const listaPatches = [
  {
    versao: "Notas de Atualização 3.5.4",
    data: "22 de Novembro, 2026",
    titulo: "Novo Patch 3.5.4: Ajustes de Balanceamento & Eventos",
    imagem: "img/tradegizu.png",
    resumo: "Chegada do evento de Novembro, ajustes em raids e melhorias de qualidade de vida.",
    conteudo: `
      <p>Confira todas as mudanças aplicadas durante a manutenção semanal do servidor:</p>
      <h3>🔥 Novos Eventos</h3>
      <ul>
        <li><strong>Evento de Novembro:</strong> Disponível na DATS Center até a próxima manutenção mensal.</li>
        <li><strong>Bônus de Experiência:</strong> +300% EXP ativado em todos os mapas durante o fim de semana.</li>
      </ul>
    `
  },
  {
    versao: "Notas de Atualização 3.5.2",
    data: "10 de Novembro, 2026",
    titulo: "Patch 3.5.2: Descida dos Dragões Imperadores",
    imagem: "https://unsplash.com",
    resumo: "Evento especial de chefes, novos selos disponíveis e correções de interface.",
    conteudo: `
      <p>Resumo completo das novidades implementadas no Patch 3.5.2:</p>
      <h3>🐉 Invasão dos Dragões Imperadores</h3>
      <p>A cada 3 horas, chefes especiais aparecerão nos mapas de Server Continent.</p>
    `
  }
];

document.addEventListener("DOMContentLoaded", () => {
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

      containerArtigo.innerHTML = `
        ${bannerHtml}
        <span class="badge-tag ${tagClasse}">${tagTexto}</span>
        <h1 style="font-size: clamp(1.8rem, 4vw, 2.6rem); margin: 10px 0;">${item.titulo}</h1>
        <p style="color: #94a3b8; font-size: 0.9rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; margin-bottom: 30px;">
          📅 ${item.data}
        </p>
        <div class="corpo-texto">${item.conteudo}</div>
      `;
    } else {
      containerArtigo.innerHTML = `<h2>Artigo não encontrado.</h2>`;
    }
    return;
  }
  const gradeGuias = document.getElementById('grade-guias');
  const gradePatches = document.getElementById('grade-patches');
  const inputBusca = document.getElementById('busca-guia');
  let categoriaAtual = 'todos';

  function renderizarGuias() {
    if (!gradeGuias) return;
    const termo = inputBusca ? inputBusca.value.toLowerCase() : '';
    gradeGuias.innerHTML = '';

    guiasProgressao.forEach((guia, index) => {
      const bateCategoria = categoriaAtual === 'todos' || guia.fase === categoriaAtual;
      const bateBusca = guia.titulo.toLowerCase().includes(termo) || guia.resumo.toLowerCase().includes(termo);

      if (bateCategoria && bateBusca) {
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

  const cenario0 = document.getElementById('cenario-0');
  const cenario1 = document.getElementById('cenario-1');
  const cenario2 = document.getElementById('cenario-2');
  const secProgressao = document.getElementById('progressao');
  const secPatch = document.getElementById('patch-notes');

  function atualizarCenario() {
    if (!cenario0 || !cenario1 || !cenario2 || !secProgressao || !secPatch) return;
    const scrollPos = window.scrollY;
    const alturaTela = window.innerHeight;
    const gatilhoProg = secProgressao.offsetTop - alturaTela * 0.55;
    const gatilhoPatch = secPatch.offsetTop - alturaTela * 0.55;

    if (scrollPos < gatilhoProg) {
      cenario0.style.opacity = 1; cenario1.style.opacity = 0; cenario2.style.opacity = 0;
    } else if (scrollPos >= gatilhoProg && scrollPos < gatilhoPatch) {
      cenario0.style.opacity = 0; cenario1.style.opacity = 1; cenario2.style.opacity = 0;
    } else {
      cenario0.style.opacity = 0; cenario1.style.opacity = 0; cenario2.style.opacity = 1;
    }
  }

  window.addEventListener('scroll', atualizarCenario);
  atualizarCenario();

  function deslizarPara(elementoDestino, duracao = 1200) {
    const posicaoInicial = window.scrollY;
    const posicaoFinal = elementoDestino.getBoundingClientRect().top + posicaoInicial - 40;
    const distancia = posicaoFinal - posicaoInicial;
    let tempoInicio = null;

    function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }

    function animar(tempoAtual) {
      if (!tempoInicio) tempoInicio = tempoAtual;
      const tempoDecorrido = tempoAtual - tempoInicio;
      const progresso = Math.min(tempoDecorrido / duracao, 1);
      window.scrollTo(0, posicaoInicial + distancia * easeOutQuart(progresso));

      if (tempoDecorrido < duracao) {
        requestAnimationFrame(animar);
      } else {
        elementoDestino.classList.remove('destaque-chegada');
        void elementoDestino.offsetWidth;
        elementoDestino.classList.add('destaque-chegada');
      }
    }
    requestAnimationFrame(animar);
  }

  document.querySelectorAll('.link-suave').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const secao = document.querySelector(this.getAttribute('href'));
      if (secao) deslizarPara(secao, 1200);
    });
  });
});
