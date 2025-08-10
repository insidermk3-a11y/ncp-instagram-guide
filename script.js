// Dados dos modais e conteúdos interativos
const modalContents = {
    recording: {
        title: "Como Gravar Conteúdo Profissional",
        content: `
            <div class="modal-section">
                <h3><i class="fas fa-video"></i> Configurações Técnicas</h3>
                <div class="tips-grid">
                    <div class="tip-card">
                        <h4>Formato</h4>
                        <p><strong>Vertical 9:16</strong> para Reels/Stories<br>
                        <strong>4:5</strong> para feed</p>
                    </div>
                    <div class="tip-card">
                        <h4>Iluminação</h4>
                        <p>Preferir <strong>luz natural</strong>, rosto voltado para luz. Se indoor, usar softbox frontal.</p>
                    </div>
                    <div class="tip-card">
                        <h4>Áudio</h4>
                        <p>Microfone de lapela para entrevistas; evitar reverberação.</p>
                    </div>
                    <div class="tip-card">
                        <h4>Duração</h4>
                        <p>Reels entre <strong>20-45s</strong>; pequenos cortes (3-6 cortes) funcionam bem.</p>
                    </div>
                </div>
            </div>
            
            <div class="modal-section">
                <h3><i class="fas fa-magic"></i> Dicas Criativas</h3>
                <ul class="creative-tips">
                    <li><strong>Hook:</strong> Primeiro 3 segundos com texto grande (ex.: "Últimas vagas!" / "Você sabia?").</li>
                    <li><strong>Legendas:</strong> Colocar legendas em todos os Reels (muitos veem sem som).</li>
                    <li><strong>Thumbnail:</strong> Salvar capa do Reel com rosto/CTA text overlay claro (não deixar preto).</li>
                    <li><strong>Capas:</strong> Criar capas consistentes (marca + título curto) para feed e reels.</li>
                </ul>
            </div>
            
            <div class="modal-section">
                <h3><i class="fas fa-camera"></i> Checklist de Gravação</h3>
                <div class="checklist">
                    <label><input type="checkbox"> Celular na vertical (9:16)</label>
                    <label><input type="checkbox"> Iluminação adequada</label>
                    <label><input type="checkbox"> Áudio limpo</label>
                    <label><input type="checkbox"> Hook preparado (3 primeiros segundos)</label>
                    <label><input type="checkbox"> CTA definido</label>
                    <label><input type="checkbox"> Capa/thumbnail planejada</label>
                </div>
            </div>
        `
    },
    
    templates: {
        title: "10 Templates de Reels Prontos",
        content: `
            <div class="templates-grid">
                <div class="template-card">
                    <div class="template-number">1</div>
                    <h4>Hook de Desconto</h4>
                    <p><strong>Hook:</strong> "Quer desconto? Vou te mostrar 3 maneiras de economizar no curso."</p>
                    <p><strong>Corpo:</strong> 3 bullets</p>
                    <p><strong>CTA:</strong> "Chama no WhatsApp"</p>
                </div>
                
                <div class="template-card">
                    <div class="template-number">2</div>
                    <h4>Tour da Escola</h4>
                    <p><strong>Hook:</strong> "Vem conhecer a NCP em 30 segundos."</p>
                    <p><strong>Corpo:</strong> Mostrar sala, professores, alunos</p>
                    <p><strong>CTA:</strong> Matrícula</p>
                </div>
                
                <div class="template-card">
                    <div class="template-number">3</div>
                    <h4>Depoimento</h4>
                    <p><strong>Estrutura:</strong> Aluno fala 20s sobre resultado</p>
                    <p><strong>Finalização:</strong> Corte para CTA</p>
                </div>
                
                <div class="template-card">
                    <div class="template-number">4</div>
                    <h4>Antes/Depois</h4>
                    <p><strong>Hook:</strong> "Antes eu não sabia… depois consegui emprego"</p>
                    <p><strong>Visual:</strong> Foto antes + vídeo depois</p>
                </div>
                
                <div class="template-card">
                    <div class="template-number">5</div>
                    <h4>FAQ Rápido</h4>
                    <p><strong>Perguntas:</strong> "Quanto custa?" → resposta direta</p>
                    <p><strong>Seguimento:</strong> "Tem parcelamento?" → CTA</p>
                </div>
                
                <div class="template-card">
                    <div class="template-number">6</div>
                    <h4>Prova Social</h4>
                    <p><strong>Estrutura:</strong> Compila 3 comentários de alunos</p>
                    <p><strong>Finalização:</strong> CTA</p>
                </div>
                
                <div class="template-card">
                    <div class="template-number">7</div>
                    <h4>Oferta Limitada</h4>
                    <p><strong>Hook:</strong> "Últimas vagas com X% off — só hoje!"</p>
                    <p><strong>Visual:</strong> Mostrar botão e prazo</p>
                </div>
                
                <div class="template-card">
                    <div class="template-number">8</div>
                    <h4>Mini-aula</h4>
                    <p><strong>Conteúdo:</strong> Ensinar 1 técnica prática (útil) em 45s</p>
                    <p><strong>CTA:</strong> Para curso completo</p>
                </div>
                
                <div class="template-card">
                    <div class="template-number">9</div>
                    <h4>Dia na Escola</h4>
                    <p><strong>Formato:</strong> Rotina de um aluno (B-roll acelerado)</p>
                    <p><strong>Finalização:</strong> CTA</p>
                </div>
                
                <div class="template-card">
                    <div class="template-number">10</div>
                    <h4>Entrevista</h4>
                    <p><strong>Duração:</strong> 30-45s com coordenador</p>
                    <p><strong>Foco:</strong> Um benefício-chave</p>
                </div>
            </div>
        `
    },
    
    captions: {
        title: "Modelos de Legendas e Hashtags",
        content: `
            <div class="modal-section">
                <h3><i class="fas fa-edit"></i> Modelos de Legendas</h3>
                
                <div class="caption-model">
                    <h4>Modelo 1 - Matrículas</h4>
                    <div class="caption-text">
                        🎓 Matrículas abertas! Turmas novas de [curso]. Quer garantir sua vaga? 👉 Clique no link da bio e fale com a gente no WhatsApp.
                    </div>
                    <button class="copy-btn" onclick="copyToClipboard(this)">Copiar</button>
                </div>
                
                <div class="caption-model">
                    <h4>Modelo 2 - Depoimento</h4>
                    <div class="caption-text">
                        ✨ Depoimento real: [nome]. Quer o mesmo resultado? Chama no direct ou no link da bio — sem compromisso.
                    </div>
                    <button class="copy-btn" onclick="copyToClipboard(this)">Copiar</button>
                </div>
                
                <div class="caption-model">
                    <h4>Modelo 3 - Urgência</h4>
                    <div class="caption-text">
                        📅 Vagas LIMITADAS! Inscrição com desconto até [data]. Fale agora: [link whatsapp]. #Jacobina #NCPcursos
                    </div>
                    <button class="copy-btn" onclick="copyToClipboard(this)">Copiar</button>
                </div>
            </div>
            
            <div class="modal-section">
                <h3><i class="fas fa-hashtag"></i> Hashtags Estratégicas</h3>
                
                <div class="hashtag-category">
                    <h4>Hashtags Locais (3-4 por post)</h4>
                    <div class="hashtag-list">
                        #Jacobina #CursosJacobina #EmpregoJacobina #NCPcursos
                    </div>
                    <button class="copy-btn" onclick="copyToClipboard(this)">Copiar</button>
                </div>
                
                <div class="hashtag-category">
                    <h4>Hashtags de Nicho (3-4 por post)</h4>
                    <div class="hashtag-list">
                        #FormacaoProfissional #CursoTec #CursoTecnico #CapacitacaoProfissional
                    </div>
                    <button class="copy-btn" onclick="copyToClipboard(this)">Copiar</button>
                </div>
                
                <div class="hashtag-category">
                    <h4>Hashtags Gerais (3-4 por post)</h4>
                    <div class="hashtag-list">
                        #VagasAbertas #Educacao #Carreira #Profissao #Futuro #Oportunidade
                    </div>
                    <button class="copy-btn" onclick="copyToClipboard(this)">Copiar</button>
                </div>
                
                <div class="hashtag-tip">
                    <strong>💡 Dica:</strong> Misture 6-12 hashtags: 3 locais + 3 de nicho + 3 gerais para máximo alcance.
                </div>
            </div>
        `
    },
    
    linktree: {
        title: "Estratégia Linktree - Funil de Conversão",
        content: `
            <div class="modal-section">
                <h3><i class="fas fa-link"></i> Estrutura Recomendada</h3>
                
                <div class="linktree-structure">
                    <div class="linktree-button" data-stage="topo">
                        <div class="button-position">1</div>
                        <div class="button-content">
                            <h4>🎓 Garanta sua vaga para os cursos de 2025</h4>
                            <p><strong>Objetivo:</strong> Atração e interesse</p>
                        </div>
                    </div>
                    
                    <div class="linktree-button" data-stage="meio">
                        <div class="button-position">2</div>
                        <div class="button-content">
                            <h4>🎯 Veja depoimentos e salários de ex-alunos</h4>
                            <p><strong>Objetivo:</strong> Prova social</p>
                        </div>
                    </div>
                    
                    <div class="linktree-button" data-stage="meio">
                        <div class="button-position">3</div>
                        <div class="button-content">
                            <h4>📥 Baixe nossa tabela de cursos e valores</h4>
                            <p><strong>Objetivo:</strong> Benefício rápido</p>
                        </div>
                    </div>
                    
                    <div class="linktree-button" data-stage="fundo">
                        <div class="button-position">4</div>
                        <div class="button-content">
                            <h4>💬 Fale agora no WhatsApp</h4>
                            <p><strong>Objetivo:</strong> Conversão direta</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="modal-section">
                <h3><i class="fas fa-funnel-dollar"></i> Integração com Funil</h3>
                
                <div class="funnel-stages">
                    <div class="funnel-stage">
                        <h4>Topo do Funil - Atração</h4>
                        <p>Conteúdo no Instagram gera curiosidade (posts, stories, reels)</p>
                        <div class="stage-arrow">↓</div>
                    </div>
                    
                    <div class="funnel-stage">
                        <h4>Meio do Funil - Consideração</h4>
                        <p>Linktree direciona para conteúdo educativo ou depoimentos</p>
                        <div class="stage-arrow">↓</div>
                    </div>
                    
                    <div class="funnel-stage">
                        <h4>Fundo do Funil - Conversão</h4>
                        <p>Botão de cotação no WhatsApp com urgência ou oferta</p>
                    </div>
                </div>
            </div>
            
            <div class="modal-section">
                <h3><i class="fas fa-exclamation-triangle"></i> Erros Comuns</h3>
                
                <div class="error-list">
                    <div class="error-item">
                        <span class="error-icon">❌</span>
                        <div>
                            <strong>Muitos links genéricos</strong>
                            <p>Isso gera dispersão. Quanto mais opções irrelevantes, menor a chance de conversão.</p>
                        </div>
                    </div>
                    
                    <div class="error-item">
                        <span class="error-icon">❌</span>
                        <div>
                            <strong>Não medir cliques</strong>
                            <p>Perde inteligência de funil e oportunidades de otimização.</p>
                        </div>
                    </div>
                    
                    <div class="error-item">
                        <span class="error-icon">❌</span>
                        <div>
                            <strong>Não atualizar conforme promoções</strong>
                            <p>Links desatualizados prejudicam a experiência do usuário.</p>
                        </div>
                    </div>
                </div>
                
                <div class="best-practice">
                    <strong>✅ Melhor prática:</strong> 3 a 5 links no máximo, todos com CTA claro e alinhados com a campanha que está rodando no Instagram.
                </div>
            </div>
        `
    }
};

// Dados SWOT detalhados
const swotDetails = {
    strengths: {
        "Base sólida com 9k seguidores e bom volume de views (148k últimos 30 dias)": "A NCP já possui uma audiência estabelecida e engajada, com um volume significativo de visualizações que demonstra interesse ativo no conteúdo.",
        "Identidade visual consistente com cores amarelo e azul bem definidas": "A consistência visual fortalece o reconhecimento da marca e cria uma identidade profissional que transmite confiança.",
        "Conteúdo de prova social e eventos já estabelecido com depoimentos e gravações": "A escola já possui material valioso de prova social, fundamental para converter prospects em alunos matriculados."
    },
    weaknesses: {
        "Baixa descoberta por não-seguidores, limitando o crescimento orgânico": "Apenas 19.6% do alcance vem de não-seguidores, indicando que o conteúdo não está sendo otimizado para descoberta no algoritmo.",
        "Reels e thumbnails não otimizados para algoritmo de descoberta": "O formato e apresentação dos Reels não seguem as melhores práticas para maximizar alcance e engajamento.",
        "Stories não convertem suficientemente para leads via link/WhatsApp": "Apesar do bom uso de Stories, falta estratégia de conversão com CTAs claros e direcionamento efetivo."
    },
    opportunities: {
        "Transformar Stories em máquina de conversão com stickers e CTAs diários": "Implementar stickers interativos, enquetes e CTAs diretos pode aumentar significativamente a taxa de conversão.",
        "Batch de Reels (2 dias de gravação) para alimentar 30 dias de conteúdo": "Estratégia de produção em lote otimiza tempo e garante consistência na publicação de conteúdo de qualidade.",
        "Anúncios hiper-locais para mulheres 18-34 em Jacobina com pequeno budget": "Segmentação geográfica específica pode trazer leads altamente qualificados com investimento reduzido."
    },
    threats: {
        "Sem diversificação de Reels, o crescimento pode estagnar": "A falta de variedade no conteúdo pode levar à fadiga da audiência e redução do alcance orgânico.",
        "Postagens sem CTA claro perdem oportunidades de gerar leads": "Cada post sem direcionamento claro representa uma oportunidade perdida de conversão."
    }
};

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    initializeInteractivity();
    initializeCharts();
    initializeAnimations();
});

// Função principal de inicialização
function initializeInteractivity() {
    // Timeline controls
    initializeTimeline();
    
    // SWOT modal interactions
    initializeSWOT();
    
    // Tool modals
    initializeToolModals();
    
    // Modal close functionality
    initializeModals();
    
    // Checklist interactions
    initializeChecklist();
}

// Timeline functionality
function initializeTimeline() {
    const timelineButtons = document.querySelectorAll('.timeline-btn');
    const timelineWeeks = document.querySelectorAll('.timeline-week');
    
    timelineButtons.forEach(button => {
        button.addEventListener('click', function() {
            const week = this.dataset.week;
            
            // Remove active class from all buttons and weeks
            timelineButtons.forEach(btn => btn.classList.remove('active'));
            timelineWeeks.forEach(week => week.classList.remove('active'));
            
            // Add active class to clicked button and corresponding week
            this.classList.add('active');
            document.querySelector(`[data-week="${week}"].timeline-week`).classList.add('active');
        });
    });
}

// SWOT modal functionality
function initializeSWOT() {
    const swotItems = document.querySelectorAll('.swot-item');
    const modal = document.getElementById('swotModal');
    const modalContent = document.getElementById('swotModalContent');
    
    swotItems.forEach(item => {
        item.addEventListener('click', function() {
            const detail = this.dataset.detail;
            const quadrant = this.closest('.swot-quadrant').dataset.type;
            const title = this.querySelector('span').textContent;
            
            modalContent.innerHTML = `
                <h2>${title}</h2>
                <div class="swot-detail">
                    <p><strong>Análise:</strong> ${detail}</p>
                    <div class="swot-insight">
                        <h3>Insights Estratégicos:</h3>
                        <p>${swotDetails[quadrant][detail] || 'Análise detalhada não disponível.'}</p>
                    </div>
                </div>
            `;
            
            modal.style.display = 'block';
        });
    });
}

// Tool modals functionality
function initializeToolModals() {
    const toolCards = document.querySelectorAll('.tool-card');
    const modal = document.getElementById('toolModal');
    const modalContent = document.getElementById('toolModalContent');
    
    toolCards.forEach(card => {
        const button = card.querySelector('.tool-btn');
        button.addEventListener('click', function() {
            const tool = card.dataset.tool;
            const content = modalContents[tool];
            
            if (content) {
                modalContent.innerHTML = `
                    <h2>${content.title}</h2>
                    ${content.content}
                `;
                modal.style.display = 'block';
            }
        });
    });
}

// Modal close functionality
function initializeModals() {
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');
    
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    });
}

// Checklist functionality
function initializeChecklist() {
    const checklistItems = document.querySelectorAll('.checklist-item');
    
    checklistItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('completed');
            
            // Add completion animation
            if (this.classList.contains('completed')) {
                this.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                this.style.color = 'white';
                
                // Add checkmark
                const header = this.querySelector('.checklist-header');
                if (!header.querySelector('.checkmark')) {
                    const checkmark = document.createElement('i');
                    checkmark.className = 'fas fa-check checkmark';
                    checkmark.style.color = 'white';
                    header.appendChild(checkmark);
                }
            } else {
                this.style.background = '';
                this.style.color = '';
                
                // Remove checkmark
                const checkmark = this.querySelector('.checkmark');
                if (checkmark) {
                    checkmark.remove();
                }
            }
        });
    });
}

// Charts initialization
function initializeCharts() {
    // Main projection chart
    const ctx = document.getElementById('projectionChart');
    if (ctx) {
        createProjectionChart(ctx);
    }
}

// Create main projection chart
function createProjectionChart(ctx) {
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Atual', 'Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
            datasets: [
                {
                    label: 'Seguidores',
                    data: [9000, 9200, 9500, 9900, 10500],
                    borderColor: '#1e3a8a',
                    backgroundColor: 'rgba(30, 58, 138, 0.1)',
                    fill: false,
                    tension: 0.4,
                    yAxisID: 'y'
                },
                {
                    label: 'Alcance Não-Seguidores (%)',
                    data: [19.6, 22, 26, 30, 35],
                    borderColor: '#f59e0b',
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    fill: false,
                    tension: 0.4,
                    yAxisID: 'y1'
                },
                {
                    label: 'Visitas ao Perfil',
                    data: [1900, 2100, 2300, 2400, 2500],
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    fill: false,
                    tension: 0.4,
                    yAxisID: 'y'
                },
                {
                    label: 'Leads WhatsApp',
                    data: [0, 8, 15, 20, 25],
                    borderColor: '#25d366',
                    backgroundColor: 'rgba(37, 211, 102, 0.1)',
                    fill: false,
                    tension: 0.4,
                    yAxisID: 'y2'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Projeção de Crescimento - Estratégia NCP Cursos (30 dias)',
                    font: {
                        family: 'Inter',
                        size: 18,
                        weight: 'bold'
                    }
                },
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            family: 'Inter',
                            size: 12
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleFont: {
                        family: 'Inter'
                    },
                    bodyFont: {
                        family: 'Inter'
                    }
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Período',
                        font: {
                            family: 'Inter',
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Seguidores / Visitas',
                        font: {
                            family: 'Inter',
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Alcance (%)',
                        font: {
                            family: 'Inter',
                            weight: 'bold'
                        }
                    },
                    grid: {
                        drawOnChartArea: false,
                    },
                    max: 40
                },
                y2: {
                    type: 'linear',
                    display: false,
                    max: 30
                }
            }
        }
    });
}

// Animation initialization
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.checklist-item, .swot-quadrant, .tool-card, .metric-card, .timeline-day');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
    
    // Progress bar animations
    animateProgressBars();
}

// Animate progress bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                progressBar.style.width = '0%';
                
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 200);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
}

// Copy to clipboard functionality
function copyToClipboard(button) {
    const textElement = button.previousElementSibling;
    const text = textElement.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copiado!';
        button.style.background = '#10b981';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
    });
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add dynamic content loading for timeline days
function loadTimelineContent(week, day) {
    // This could be expanded to load specific content for each day
    const contentMap = {
        1: {
            1: { stories: "Bastidores da escola", reel: "Tour da NCP", feed: null },
            2: { stories: "Depoimentos rápidos", reel: null, feed: "Carrossel de cursos" },
            3: { stories: "Dicas de carreira", reel: "FAQ sobre matrículas", feed: null },
            4: { stories: "Prova social", reel: null, feed: "Post de resultados" },
            5: { stories: "Urgência de vagas", reel: "Oferta especial", feed: null, live: "Q&A ao vivo" }
        }
        // Outras semanas podem ser adicionadas aqui
    };
    
    return contentMap[week] && contentMap[week][day] ? contentMap[week][day] : null;
}

// Add hover effects for interactive elements
document.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('swot-item') || 
        e.target.classList.contains('timeline-day') || 
        e.target.classList.contains('tool-card')) {
        e.target.style.transform = 'translateY(-5px)';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.classList.contains('swot-item') || 
        e.target.classList.contains('timeline-day') || 
        e.target.classList.contains('tool-card')) {
        e.target.style.transform = '';
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const openModal = document.querySelector('.modal[style*="block"]');
        if (openModal) {
            openModal.style.display = 'none';
        }
    }
});

// Performance optimization: Lazy load charts
function lazyLoadCharts() {
    const chartContainers = document.querySelectorAll('.chart-container');
    
    const chartObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Load chart when container becomes visible
                const canvas = entry.target.querySelector('canvas');
                if (canvas && !canvas.chart) {
                    initializeCharts();
                }
            }
        });
    }, { threshold: 0.1 });
    
    chartContainers.forEach(container => {
        chartObserver.observe(container);
    });
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadCharts);

