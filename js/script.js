document.addEventListener('DOMContentLoaded', () => {
    const USER_STORAGE_KEY = 'nota1000_student_profile';
    const ADS_REMOVED_STORAGE_KEY = 'nota1000_ads_removed';
    const REMOVE_ADS_CODE = 'NOTA1000-10';
    const authScreen = document.getElementById('auth-screen');
    const authForm = document.getElementById('auth-form');
    const studentNameInput = document.getElementById('student-name');
    const studentEmailInput = document.getElementById('student-email');
    const studentDisplayName = document.getElementById('student-display-name');
    const btnLogout = document.getElementById('btn-logout');
    const btnRemoveAds = document.getElementById('btn-remove-ads');
    const adsModal = document.getElementById('ads-modal');
    const closeAdsModal = document.querySelector('.close-ads-modal');
    const removeAdsForm = document.getElementById('remove-ads-form');
    const removeAdsCodeInput = document.getElementById('remove-ads-code');
    const removeAdsError = document.getElementById('remove-ads-error');

    function getStudentProfile() {
        try {
            return JSON.parse(localStorage.getItem(USER_STORAGE_KEY));
        } catch {
            return null;
        }
    }

    function enterApp(profile) {
        studentDisplayName.innerText = profile?.name || 'Estudante';
        document.body.classList.remove('auth-locked');
        authScreen.classList.add('hidden');
    }

    function applyAdsState() {
        const adsRemoved = localStorage.getItem(ADS_REMOVED_STORAGE_KEY) === 'true';
        document.body.classList.toggle('ads-removed', adsRemoved);
        document.body.classList.toggle('ads-enabled', !adsRemoved);
        btnRemoveAds.innerHTML = adsRemoved
            ? '<i class="fa-solid fa-circle-check"></i>'
            : '<i class="fa-solid fa-rectangle-ad"></i>';
        btnRemoveAds.title = adsRemoved ? 'Anúncios removidos' : 'Remover anúncios';
    }

    const savedProfile = getStudentProfile();
    if(savedProfile?.name && savedProfile?.email) {
        enterApp(savedProfile);
    }
    applyAdsState();

    authForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const profile = {
            name: studentNameInput.value.trim(),
            email: studentEmailInput.value.trim().toLowerCase(),
            createdAt: new Date().toISOString()
        };

        if(!profile.name || !profile.email) return;

        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(profile));
        enterApp(profile);
    });

    btnLogout.addEventListener('click', () => {
        localStorage.removeItem(USER_STORAGE_KEY);
        document.body.classList.add('auth-locked');
        authScreen.classList.remove('hidden');
        studentNameInput.focus();
    });

    btnRemoveAds.addEventListener('click', () => {
        adsModal.classList.add('active');
    });

    closeAdsModal.addEventListener('click', () => adsModal.classList.remove('active'));
    adsModal.addEventListener('click', (event) => {
        if(event.target === adsModal) adsModal.classList.remove('active');
    });

    removeAdsForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const typedCode = removeAdsCodeInput.value.trim().toUpperCase();

        if(typedCode === REMOVE_ADS_CODE) {
            localStorage.setItem(ADS_REMOVED_STORAGE_KEY, 'true');
            removeAdsError.innerText = '';
            adsModal.classList.remove('active');
            applyAdsState();
            return;
        }

        removeAdsError.innerText = 'Código inválido. Confira o código recebido após o pagamento.';
        removeAdsCodeInput.focus();
    });

    // ===== 1. NAVEGAÇÃO E TEMA =====
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.page-section');
    const pageTitle = document.getElementById('page-title');
    const themeToggle = document.getElementById('theme-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarBackdrop = document.getElementById('sidebar-backdrop');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');

    const pageTitles = {
        dashboard: 'Dashboard',
        competencias: 'Competências',
        modelos: 'Redações Nota 1000',
        atividades: 'Atividades ENEM',
        'modelos-prontos': 'Modelos de Redação',
        inteligencia: 'O que mais cai',
        temas: 'Temas e Ideias',
        repertorio: 'Repertório',
        dicionario: 'Dicionário Avançado',
        conectivos: 'Conectivos',
        gerador: 'Gerador de Estrutura',
        correcao: 'Correção Simulada',
        anotacoes: 'Anotações'
    };

    function closeSidebar() {
        sidebar.classList.remove('open');
        document.body.classList.remove('menu-open');
        sidebarBackdrop.hidden = true;
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

    function openSidebar() {
        sidebar.classList.add('open');
        document.body.classList.add('menu-open');
        sidebarBackdrop.hidden = false;
        mobileMenuToggle.setAttribute('aria-expanded', 'true');
        mobileMenuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }

    function showSection(targetId, updateHash = true) {
        const section = document.getElementById(targetId);
        if(!section) return;

        navItems.forEach(n => n.classList.toggle('active', n.getAttribute('data-target') === targetId));
        sections.forEach(s => s.classList.toggle('active', s.id === targetId));
        pageTitle.innerText = pageTitles[targetId] || targetId;

        if(updateHash && window.location.hash !== `#${targetId}`) {
            history.pushState(null, '', `#${targetId}`);
        }

        closeSidebar();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    mobileMenuToggle.addEventListener('click', () => {
        sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
    });

    sidebarBackdrop.addEventListener('click', closeSidebar);
    window.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') closeSidebar();
    });

    if(localStorage.getItem('theme') === 'light') {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        document.body.classList.toggle('dark-mode');
        const isLight = document.body.classList.contains('light-mode');
        themeToggle.innerHTML = isLight ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            showSection(item.getAttribute('data-target'));
        });
    });

    window.addEventListener('popstate', () => {
        showSection((window.location.hash || '#dashboard').slice(1), false);
    });

    const initialSection = (window.location.hash || '#dashboard').slice(1);
    if(document.getElementById(initialSection)) {
        showSection(initialSection, false);
    }

    // ===== 2. DICA DIÁRIA =====
    const tipEl = document.getElementById('daily-tip');
    if(tipEl && typeof dicasDiarias !== 'undefined') {
        const dayIndex = new Date().getDate() % dicasDiarias.length;
        tipEl.innerText = dicasDiarias[dayIndex];
    }

    // ===== 3. COMPETÊNCIAS =====
    const compTabs = document.querySelectorAll('.comp-tab');
    const compContent = document.getElementById('comp-content');

    function renderComp(id) {
        const d = competenciasData[id];
        compContent.innerHTML = `
            <h2>${d.title}</h2>
            <p>${d.desc}</p>
            <div class="comp-grid">
                <div class="comp-do glass-panel">
                    <h3><i class="fa-solid fa-check-circle"></i> O que fazer</h3>
                    <ul>${d.do.map(i => `<li>${i}</li>`).join('')}</ul>
                </div>
                <div class="comp-dont glass-panel">
                    <h3><i class="fa-solid fa-times-circle"></i> O que evitar</h3>
                    <ul>${d.dont.map(i => `<li>${i}</li>`).join('')}</ul>
                </div>
            </div>`;
    }
    compTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            compTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderComp(tab.getAttribute('data-comp'));
        });
    });
    renderComp(1);

    // ===== 4. REDAÇÕES NOTA 1000 =====
    const modelsContainer = document.getElementById('models-container');
    const essayYearFilter = document.getElementById('essay-year-filter');
    const essaySearch = document.getElementById('essay-search');
    const modalOverlay = document.getElementById('essay-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close-modal');

    const officialYears = [...new Set(temasOficiaisEnemData.map(t => t.ano))].sort((a, b) => b - a);
    essayYearFilter.innerHTML = '<option value="all">Todos os anos</option>' + officialYears.map(y => `<option value="${y}">${y}</option>`).join('');

    function getEssaysForTheme(theme) {
        return modelosData.filter(m => m.ano === theme.ano || m.tema === theme.tema);
    }

    function renderEssayArchive() {
        const selectedYear = essayYearFilter.value;
        const term = essaySearch.value.trim().toLowerCase();
        modelsContainer.innerHTML = '';

        temasOficiaisEnemData
            .filter(theme => selectedYear === 'all' || String(theme.ano) === selectedYear)
            .filter(theme => [theme.tema, theme.eixo, theme.fonte].join(' ').toLowerCase().includes(term))
            .forEach(theme => {
                const essays = getEssaysForTheme(theme);
                const card = document.createElement('div');
                card.className = 'model-card glass-panel essay-archive-card';

                if(essays.length) {
                    card.innerHTML = `
                        <span class="year-badge">${theme.ano}</span>
                        <h3>${theme.tema}</h3>
                        <p class="model-author"><i class="fa-solid fa-tag"></i> ${theme.eixo}</p>
                        <div class="model-snippet">${essays.length} redações/análises no banco local para este tema.</div>
                        <div class="mini-list">${essays.slice(0, 5).map((m, index) => `<button class="link-button" onclick="openModal(${modelosData.indexOf(m)})">Ver estratégia ${index + 1}</button>`).join('')}</div>`;
                } else {
                    card.innerHTML = `
                        <span class="year-badge">${theme.ano}</span>
                        <h3>${theme.tema}</h3>
                        <p class="model-author"><i class="fa-solid fa-tag"></i> ${theme.eixo}</p>
                        <div class="model-snippet">Tema oficial registrado. Ainda sem texto completo autorizado no banco local.</div>
                        <ul class="analysis-tags">
                            <li>Treine tese com 2 causas.</li>
                            <li>Use repertório pertinente ao eixo.</li>
                            <li>Finalize com intervenção C5 completa.</li>
                        </ul>
                        <p class="source-note">Fonte: ${theme.fonte}</p>`;
                }

                modelsContainer.appendChild(card);
            });

        if(!modelsContainer.innerHTML) {
            modelsContainer.innerHTML = '<p class="section-desc">Nenhum resultado encontrado.</p>';
        }
    }

    window.openModal = (i) => {
        const m = modelosData[i];
        modalBody.innerHTML = `
            <h2 style="color:var(--accent-primary);margin-bottom:8px;">${m.title}</h2>
            <p style="color:var(--text-secondary);margin-bottom:20px;">${m.author} — Tema: ${m.tema}</p>
            <div style="line-height:1.8;">
                <h3 style="color:var(--success);margin:16px 0 8px;">Introdução</h3><p>${m.intro}</p>
                <h3 style="color:var(--warning);margin:16px 0 8px;">Desenvolvimento 1</h3><p>${m.d1}</p>
                <h3 style="color:var(--warning);margin:16px 0 8px;">Desenvolvimento 2</h3><p>${m.d2}</p>
                <h3 style="color:var(--accent-primary);margin:16px 0 8px;">Conclusão (Intervenção)</h3><p>${m.conclusao}</p>
                <hr style="margin:20px 0;border:none;border-top:1px solid var(--border-color);">
                <h3 style="color:var(--success);margin:16px 0 8px;">Ver estratégia da redação</h3>
                <p>${m.analise}</p>
                <div class="strategy-grid">
                    <span>Repertório produtivo</span>
                    <span>Projeto de texto claro</span>
                    <span>Conectivos funcionais</span>
                    <span>Intervenção detalhada</span>
                </div>
            </div>`;
        modalOverlay.classList.add('active');
    };

    closeModal.addEventListener('click', () => modalOverlay.classList.remove('active'));
    modalOverlay.addEventListener('click', (e) => { if(e.target === modalOverlay) modalOverlay.classList.remove('active'); });
    essayYearFilter.addEventListener('change', renderEssayArchive);
    essaySearch.addEventListener('input', renderEssayArchive);
    renderEssayArchive();

    // ===== 4B. ATIVIDADES ENEM =====
    const activityTopicFilter = document.getElementById('activity-topic-filter');
    const activityLevelFilter = document.getElementById('activity-level-filter');
    const activityCard = document.getElementById('activity-card');
    const questionBankSize = document.getElementById('question-bank-size');
    const activityCorrect = document.getElementById('activity-correct');
    const activityWrong = document.getElementById('activity-wrong');
    let currentQuestionIndex = 0;
    let filteredQuestions = atividadesData;

    activityTopicFilter.innerHTML = '<option value="all">Todos os assuntos</option>' + activityTopics.map(t => `<option value="${t.id}">${t.label}</option>`).join('');
    activityLevelFilter.innerHTML = '<option value="all">Todos os níveis</option>' + activityLevels.map(l => `<option value="${l}">${l}</option>`).join('');
    questionBankSize.innerText = atividadesData.length;

    function getActivityStats() {
        return JSON.parse(localStorage.getItem('enem_activity_stats') || '{"correct":0,"wrong":0,"answered":0}');
    }

    function saveActivityStats(stats) {
        localStorage.setItem('enem_activity_stats', JSON.stringify(stats));
        updateDashboardStats();
    }

    function renderActivityStats() {
        const stats = getActivityStats();
        activityCorrect.innerText = stats.correct;
        activityWrong.innerText = stats.wrong;
    }

    function filterQuestions() {
        filteredQuestions = atividadesData.filter(q => {
            const topicMatch = activityTopicFilter.value === 'all' || q.topic === activityTopicFilter.value;
            const levelMatch = activityLevelFilter.value === 'all' || q.level === activityLevelFilter.value;
            return topicMatch && levelMatch;
        });
        currentQuestionIndex = 0;
        renderQuestion();
    }

    function renderQuestion() {
        const q = filteredQuestions[currentQuestionIndex % filteredQuestions.length];
        if(!q) {
            activityCard.innerHTML = '<p class="section-desc">Nenhuma questão encontrada para este filtro.</p>';
            return;
        }

        activityCard.innerHTML = `
            <div class="question-meta">
                <span>${q.topicLabel}</span>
                <span>${q.level}</span>
                <span>${q.competence}</span>
                <span>${currentQuestionIndex + 1} / ${filteredQuestions.length}</span>
            </div>
            <h3>${q.stem}</h3>
            <div class="question-options">
                ${q.options.map((option, index) => `<button class="option-button" data-option="${index}"><strong>${String.fromCharCode(65 + index)}</strong>${option}</button>`).join('')}
            </div>
            <div id="question-feedback" class="question-feedback hidden"></div>
            <button id="next-question" class="btn-primary mt-4" type="button">Próxima questão</button>`;

        activityCard.querySelectorAll('.option-button').forEach(button => {
            button.addEventListener('click', () => {
                const selected = Number(button.dataset.option);
                const isCorrect = selected === q.answer;
                const feedback = document.getElementById('question-feedback');
                const stats = getActivityStats();
                stats.answered += 1;
                if(isCorrect) stats.correct += 1;
                else stats.wrong += 1;
                saveActivityStats(stats);
                renderActivityStats();

                activityCard.querySelectorAll('.option-button').forEach(btn => {
                    btn.disabled = true;
                    const optionIndex = Number(btn.dataset.option);
                    btn.classList.toggle('correct', optionIndex === q.answer);
                    btn.classList.toggle('wrong', optionIndex === selected && !isCorrect);
                });

                feedback.className = `question-feedback ${isCorrect ? 'good' : 'bad'}`;
                feedback.innerHTML = `<strong>${isCorrect ? 'Acertou!' : 'Quase.'}</strong> ${q.explanation}`;
            });
        });

        document.getElementById('next-question').addEventListener('click', () => {
            currentQuestionIndex += 1;
            renderQuestion();
        });
    }

    activityTopicFilter.addEventListener('change', filterQuestions);
    activityLevelFilter.addEventListener('change', filterQuestions);
    renderActivityStats();
    renderQuestion();

    // ===== 4C. MODELOS PRONTOS E INTELIGÊNCIA =====
    const readyModelAxisFilter = document.getElementById('ready-model-axis-filter');
    const readyModelsContainer = document.getElementById('ready-models-container');
    const intelligenceContainer = document.getElementById('intelligence-container');
    const officialThemesContainer = document.getElementById('official-themes-container');
    const sourcesContainer = document.getElementById('sources-container');

    readyModelAxisFilter.innerHTML = '<option value="all">Todos os eixos</option>' + modelosProntosData.map(m => `<option value="${m.eixo}">${m.eixo}</option>`).join('');

    function renderReadyModels() {
        readyModelsContainer.innerHTML = modelosProntosData
            .filter(m => readyModelAxisFilter.value === 'all' || m.eixo === readyModelAxisFilter.value)
            .map(m => `
                <article class="template-card glass-panel">
                    <span class="year-badge">${m.eixo}</span>
                    <h3>Estrutura adaptável</h3>
                    <h4>Introdução</h4><p>${m.introducao}</p>
                    <h4>Desenvolvimento</h4><p>${m.desenvolvimento}</p>
                    <h4>Conclusão</h4><p>${m.conclusao}</p>
                </article>`).join('');
    }

    readyModelAxisFilter.addEventListener('change', renderReadyModels);
    renderReadyModels();

    intelligenceContainer.innerHTML = inteligenciaEnemData.map(item => `
        <article class="intel-card glass-panel">
            <span>${item.indicador}</span>
            <h3>${item.titulo}</h3>
            <p>${item.detalhe}</p>
        </article>`).join('');

    officialThemesContainer.innerHTML = temasOficiaisEnemData.map(theme => `
        <div class="timeline-item">
            <strong>${theme.ano}</strong>
            <div><h4>${theme.tema}</h4><p>${theme.eixo} · Fonte: ${theme.fonte}</p></div>
        </div>`).join('');

    sourcesContainer.innerHTML = fontesConfiaveisData.map(source => `
        <li><a href="${source.url}" target="_blank" rel="noopener">${source.nome}</a><span>${source.uso}</span></li>`).join('');

    // ===== 5. TEMAS =====
    const themesContainer = document.getElementById('themes-container');
    function renderThemes(filter = "") {
        themesContainer.innerHTML = '';
        const f = filter.toLowerCase();
        temasData.forEach(t => {
            if(t.tema.toLowerCase().includes(f) || t.eixo.toLowerCase().includes(f)) {
                themesContainer.innerHTML += `
                    <div class="theme-card glass-panel">
                        <h3>${t.tema}</h3>
                        <p style="color:var(--text-secondary);"><i class="fa-solid fa-tag"></i> ${t.eixo}</p>
                        <div class="theme-suggestions">
                            <div class="suggestion-box"><h4><i class="fa-solid fa-brain"></i> Argumentos:</h4>
                                <ul style="margin-left:20px;font-size:.9rem;color:var(--text-secondary);">${t.argumentos.map(a=>`<li>${a}</li>`).join('')}</ul>
                            </div>
                            <div class="suggestion-box"><h4><i class="fa-solid fa-book-open"></i> Repertório:</h4><p>${t.repertorio}</p></div>
                        </div>
                    </div>`;
            }
        });
        if(!themesContainer.innerHTML) themesContainer.innerHTML = '<p style="color:var(--text-secondary);">Nenhum tema encontrado.</p>';
    }
    renderThemes();
    document.getElementById('search-themes').addEventListener('input', (e) => renderThemes(e.target.value));

    // ===== 6. REPERTÓRIO =====
    const repContainer = document.getElementById('rep-container');
    const repFilters = document.querySelectorAll('.rep-filter');

    function renderRep(type) {
        repContainer.innerHTML = '';
        repertorioData.forEach(r => {
            if(type === 'all' || r.tipo === type) {
                repContainer.innerHTML += `
                    <div class="rep-card glass-panel">
                        <h3>${r.nome}</h3><span class="badge">${r.autor}</span>
                        <p><strong>Uso:</strong> ${r.aplicacao}</p>
                        <div class="uso"><strong>Exemplo:</strong><br>"${r.exemplo}"</div>
                    </div>`;
            }
        });
    }
    renderRep('all');
    repFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            repFilters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderRep(btn.getAttribute('data-filter'));
        });
    });

    // ===== 7. DICIONÁRIO =====
    const dictBody = document.getElementById('dict-body');
    dicionarioData.forEach(w => {
        dictBody.innerHTML += `<tr>
            <td class="word-bad">${w.bad}</td><td class="word-good">${w.good}</td>
            <td>${w.desc}</td><td style="font-style:italic;color:var(--text-secondary);">"${w.ex}"</td></tr>`;
    });

    // ===== 8. CONECTIVOS =====
    const conContainer = document.getElementById('connectives-container');
    conectivosData.forEach(c => {
        conContainer.innerHTML += `
            <div class="con-category glass-panel"><h3>${c.cat}</h3>
            <ul class="con-list">${c.itens.map(i => `<li><strong>${i.nome}</strong><span>${i.uso}</span></li>`).join('')}</ul></div>`;
    });

    // ===== 9. GERADOR =====
    const btnGen = document.getElementById('btn-generate');
    const genTheme = document.getElementById('generator-theme');
    const genOut = document.getElementById('generator-output');

    btnGen.addEventListener('click', () => {
        if(!genTheme.value.trim()) return alert("Digite um tema!");
        genOut.classList.remove('hidden');
        genOut.innerHTML = `
            <div class="gen-block glass-panel"><h3>1. Introdução</h3>
                <p><b>Contextualização:</b> Abra com um repertório (Constituição, filme ou filósofo) conectado ao tema.</p>
                <p><b>Tese:</b> Afirme que "${genTheme.value}" é um problema no Brasil, motivado por <b>(Causa 1)</b> e <b>(Causa 2)</b>.</p>
                <p><b>Modelo:</b> "Conforme [REPERTÓRIO], [explicação]. Nesse contexto, é inegável que [PROBLEMA DO TEMA] persiste na sociedade brasileira, sustentado não só por [CAUSA 1], mas também por [CAUSA 2]."</p></div>
            <div class="gen-block glass-panel"><h3>2. Desenvolvimento 1 (Causa 1)</h3>
                <p><b>Tópico:</b> "Diante desse cenário, cabe destacar [CAUSA 1] como fator agravante."</p>
                <p><b>Repertório:</b> Cidadão de Papel (Dimenstein) ou Contrato Social (Hobbes) ou Necropolítica (Mbembe).</p>
                <p><b>Argumento:</b> Explique COMO e POR QUE essa causa existe. Dê consequências.</p>
                <p><b>Fechamento:</b> "Logo, fica clara a necessidade de reverter esse cenário."</p></div>
            <div class="gen-block glass-panel"><h3>3. Desenvolvimento 2 (Causa 2)</h3>
                <p><b>Tópico:</b> "Ademais, é imperativo pontuar [CAUSA 2] como fator que perpetua o problema."</p>
                <p><b>Repertório:</b> Modernidade Líquida (Bauman) ou Banalidade do Mal (Arendt) ou Chomsky.</p>
                <p><b>Argumento:</b> Mostre como a sociedade/mídia/família contribui para a manutenção do problema.</p>
                <p><b>Fechamento:</b> "Dessa maneira, enquanto persistir [CAUSA 2], o revés não será superado."</p></div>
            <div class="gen-block glass-panel"><h3>4. Conclusão (C5 — 5 Elementos)</h3>
                <p><b>AGENTE:</b> Ministério competente (Educação, Saúde, Direitos Humanos, etc.).</p>
                <p><b>AÇÃO:</b> Criar programas, campanhas ou políticas públicas.</p>
                <p><b>MEIO:</b> "Por meio de investimentos, parcerias público-privadas, capacitação profissional..."</p>
                <p><b>DETALHAMENTO:</b> "...que contarão com profissionais capacitados, como psicólogos e assistentes sociais..."</p>
                <p><b>FINALIDADE:</b> "A fim de mitigar [PROBLEMA] e garantir [DIREITO da Constituição]."</p>
                <p style="margin-top:12px;padding:12px;background:rgba(16,185,129,0.1);border-radius:8px;"><b>Modelo completo:</b> "Portanto, cabe ao <b>[AGENTE]</b>, por meio de <b>[MEIO]</b>, <b>[AÇÃO]</b> — que contará com <b>[DETALHAMENTO]</b> — a fim de <b>[FINALIDADE]</b>."</p></div>`;
    });

    // ===== 10. CORREÇÃO SIMULADA =====
    const btnCorrect = document.getElementById('btn-correct');
    const essayInput = document.getElementById('essay-input');
    const analysisOutput = document.getElementById('analysis-output');
    const essaysCounter = document.getElementById('essays-counter');

    btnCorrect.addEventListener('click', () => {
        const text = essayInput.value.trim();
        if(text.length < 100) return alert("Texto muito curto!");
        analysisOutput.classList.remove('hidden');

        let scores = {c1:200,c2:200,c3:200,c4:200,c5:200};
        let critiques = [];
        const words = text.split(/\s+/).length;
        const paragraphs = text.split(/\n+/).filter(p => p.length > 20).length;
        const lower = text.toLowerCase();

        // C1: Norma culta
        if(lower.includes(' tá ') || lower.includes(' né ') || lower.includes(' aí ')) { scores.c1 -= 40; critiques.push({t:'warn',m:'Possível marca de oralidade detectada (C1).'});}
        else critiques.push({t:'good',m:'Não foram detectadas marcas de oralidade (C1).'});

        // C2: Estrutura
        if(paragraphs < 3 || paragraphs > 5) { scores.c2 -= 80; critiques.push({t:'bad',m:`Estrutura: ${paragraphs} parágrafos (ideal: 4).`});}
        else critiques.push({t:'good',m:`Boa estrutura com ${paragraphs} parágrafos.`});

        if(words < 250) { scores.c2 -= 40; critiques.push({t:'warn',m:`Texto curto (${words} palavras). Ideal: 400+.`});}

        // C3: Argumentação
        const repWords = ['segundo','conforme','de acordo','na obra','no filme','afirma','conceito'];
        let repCount = repWords.filter(w => lower.includes(w)).length;
        if(repCount < 2) { scores.c3 -= 40; critiques.push({t:'warn',m:'Poucos indícios de repertório sociocultural (C2/C3).'});}
        else critiques.push({t:'good',m:`${repCount} marcadores de repertório detectados.`});

        // C4: Conectivos
        const conWords = ['portanto','ademais','entretanto','nesse sentido','sob esse viés','logo','contudo','todavia','outrossim','diante','dessa forma','haja vista'];
        let conFound = conWords.filter(c => lower.includes(c));
        if(conFound.length < 3) { scores.c4 -= 80; critiques.push({t:'warn',m:`Poucos conectivos: ${conFound.length} (ideal: 5+). Enriqueça a C4!`});}
        else critiques.push({t:'good',m:`Bom uso de conectivos (${conFound.join(', ')}).`});

        // C5: Intervenção
        const c5Words = ['deve','por meio de','a fim de','mediante','com o intuito de','com o fito de','cabe ao','ministério'];
        let c5Found = c5Words.filter(c => lower.includes(c));
        if(c5Found.length < 2) { scores.c5 -= 80; critiques.push({t:'bad',m:'Faltam elementos da proposta de intervenção (C5).'});}
        else if(c5Found.length < 4) { scores.c5 -= 40; critiques.push({t:'warn',m:'Intervenção parcial. Lembre dos 5 elementos: Agente+Ação+Meio+Finalidade+Detalhamento.'});}
        else critiques.push({t:'good',m:'Elementos de intervenção detectados na C5!'});

        const suggestions = [];
        if(paragraphs !== 4) suggestions.push('Ajuste para 4 parágrafos: introdução, dois desenvolvimentos e conclusão.');
        if(words < 350) suggestions.push('Aprofunde causas, consequências e exemplos para se aproximar de 350 a 450 palavras.');
        if(repCount < 2) suggestions.push('Inclua repertórios legitimados e explique a relação deles com o argumento.');
        if(conFound.length < 5) suggestions.push('Varie conectivos entre e dentro dos parágrafos para fortalecer a C4.');
        if(c5Found.length < 4) suggestions.push('Na conclusão, explicite agente, ação, meio, detalhamento e finalidade.');

        const total = scores.c1 + scores.c2 + scores.c3 + scores.c4 + scores.c5;
        const color = total >= 900 ? 'var(--success)' : total >= 700 ? 'var(--warning)' : 'var(--danger)';

        analysisOutput.innerHTML = `
            <h3>Resultado Simulado</h3>
            <div class="score-display" style="color:${color}">${total} / 1000</div>
            <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-bottom:20px;text-align:center;">
                <div class="glass-panel" style="padding:12px;"><small>C1</small><br><b>${scores.c1}</b></div>
                <div class="glass-panel" style="padding:12px;"><small>C2</small><br><b>${scores.c2}</b></div>
                <div class="glass-panel" style="padding:12px;"><small>C3</small><br><b>${scores.c3}</b></div>
                <div class="glass-panel" style="padding:12px;"><small>C4</small><br><b>${scores.c4}</b></div>
                <div class="glass-panel" style="padding:12px;"><small>C5</small><br><b>${scores.c5}</b></div>
            </div>
            <ul class="critique-list">
                ${critiques.map(c => `<li class="${c.t}"><i class="fa-solid fa-${c.t==='good'?'check':c.t==='warn'?'triangle-exclamation':'xmark'}"></i> ${c.m}</li>`).join('')}
            </ul>
            <div class="analysis-summary">
                <h4>Diagnóstico rápido</h4>
                <p><strong>${words}</strong> palavras · <strong>${paragraphs}</strong> parágrafos · <strong>${conFound.length}</strong> conectivos detectados · <strong>${repCount}</strong> marcadores de repertório.</p>
                <h4>Sugestões de melhoria</h4>
                <ul>${(suggestions.length ? suggestions : ['Texto bem encaminhado. Revise pontuação fina, autoria e conexão entre repertório e tese.']).map(s => `<li>${s}</li>`).join('')}</ul>
            </div>
            <p style="margin-top:20px;font-size:.85rem;color:var(--text-secondary);">*Correção simulada por critérios e palavras-chave. Não substitui avaliação humana nem a correção oficial do Inep.</p>`;

        let c = parseInt(localStorage.getItem('essays_count') || '0') + 1;
        localStorage.setItem('essays_count', c);
        essaysCounter.innerText = c;
        updateDashboardStats();
    });

    // ===== 11. ANOTAÇÕES =====
    const btnNewNote = document.getElementById('btn-new-note');
    const btnSaveNote = document.getElementById('btn-save-note');
    const noteTitle = document.getElementById('note-title');
    const noteBody = document.getElementById('note-body');
    const notesList = document.getElementById('notes-list');
    const notesCounter = document.getElementById('notes-counter');
    let notes = JSON.parse(localStorage.getItem('enem_notes')) || [];
    let currentNoteIndex = -1;

    function renderNotes() {
        notesList.innerHTML = '';
        notes.forEach((n, i) => {
            const li = document.createElement('li');
            li.className = `note-item ${i === currentNoteIndex ? 'active' : ''}`;
            li.innerHTML = `<h4>${n.title || 'Sem título'}</h4><p>${n.date}</p>`;
            li.addEventListener('click', () => { currentNoteIndex = i; noteTitle.value = n.title; noteBody.value = n.body; renderNotes(); });
            notesList.appendChild(li);
        });
        notesCounter.innerText = notes.length;
    }

    btnNewNote.addEventListener('click', () => { currentNoteIndex = -1; noteTitle.value = ''; noteBody.value = ''; renderNotes(); });

    btnSaveNote.addEventListener('click', () => {
        if(!noteTitle.value.trim() && !noteBody.value.trim()) return;
        const note = { title: noteTitle.value, body: noteBody.value, date: new Date().toLocaleDateString('pt-BR') };
        if(currentNoteIndex >= 0) notes[currentNoteIndex] = note;
        else { notes.unshift(note); currentNoteIndex = 0; }
        localStorage.setItem('enem_notes', JSON.stringify(notes));
        renderNotes();
        updateDashboardStats();
        btnSaveNote.innerHTML = '<i class="fa-solid fa-check"></i> Salvo!';
        setTimeout(() => { btnSaveNote.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Salvar'; }, 2000);
    });

    // ===== 12. DASHBOARD =====
    const questionsCounter = document.getElementById('questions-counter');
    const accuracyCounter = document.getElementById('accuracy-counter');
    const streakCounter = document.getElementById('streak-counter');
    const studyPlan = document.getElementById('study-plan');
    const progressLabel = document.getElementById('progress-label');
    const progressFill = document.getElementById('progress-fill');

    function updateStudyStreak() {
        const today = new Date().toLocaleDateString('pt-BR');
        const streakData = JSON.parse(localStorage.getItem('enem_streak') || '{"last":"","count":0}');
        if(streakData.last !== today) {
            streakData.count = Math.max(1, Number(streakData.count || 0) + 1);
            streakData.last = today;
            localStorage.setItem('enem_streak', JSON.stringify(streakData));
        }
        streakCounter.innerText = streakData.count || 1;
    }

    function updateDashboardStats() {
        const stats = getActivityStats();
        const essays = parseInt(localStorage.getItem('essays_count') || '0');
        const notesCount = JSON.parse(localStorage.getItem('enem_notes') || '[]').length;
        const answered = stats.answered || 0;
        const accuracy = answered ? Math.round((stats.correct / answered) * 100) : 0;
        const progress = Math.min(100, Math.round(((essays * 8) + (answered * 0.8) + (notesCount * 3)) / 2));

        essaysCounter.innerText = essays;
        notesCounter.innerText = notesCount;
        questionsCounter.innerText = answered;
        accuracyCounter.innerText = `${accuracy}%`;
        progressLabel.innerText = `${progress}% do ciclo básico`;
        progressFill.style.width = `${progress}%`;
    }

    function renderStudyPlan() {
        studyPlan.innerHTML = [
            'Responder 10 questões de atividades ENEM.',
            'Ler uma estratégia de redação nota 1000.',
            'Escrever uma introdução para um tema oficial antigo.',
            'Salvar uma anotação com repertório novo.'
        ].map(item => `<li>${item}</li>`).join('');
    }

    // Init
    updateStudyStreak();
    updateDashboardStats();
    renderStudyPlan();
    renderNotes();

    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js').catch(() => {});
    }
});
