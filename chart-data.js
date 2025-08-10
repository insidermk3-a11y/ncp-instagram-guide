// Dados para gráficos de projeção baseados no PDF estratégico
const chartData = {
    // Projeção de crescimento de seguidores (30 dias)
    followersProjection: {
        labels: ['Atual', 'Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [{
            label: 'Seguidores',
            data: [9000, 9200, 9500, 9900, 10500],
            borderColor: '#1e3a8a',
            backgroundColor: 'rgba(30, 58, 138, 0.1)',
            fill: true,
            tension: 0.4
        }]
    },
    
    // Projeção de alcance de não-seguidores
    reachProjection: {
        labels: ['Atual', 'Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [{
            label: 'Alcance Não-Seguidores (%)',
            data: [19.6, 22, 26, 30, 35],
            borderColor: '#f59e0b',
            backgroundColor: 'rgba(245, 158, 11, 0.1)',
            fill: true,
            tension: 0.4
        }]
    },
    
    // Projeção de visitas ao perfil
    profileVisitsProjection: {
        labels: ['Atual', 'Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [{
            label: 'Visitas ao Perfil',
            data: [1900, 2100, 2300, 2400, 2500],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            fill: true,
            tension: 0.4
        }]
    },
    
    // Projeção de cliques no link
    linkClicksProjection: {
        labels: ['Atual', 'Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [{
            label: 'Cliques no Link',
            data: [273, 300, 340, 370, 400],
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            fill: true,
            tension: 0.4
        }]
    },
    
    // Projeção de leads WhatsApp
    whatsappLeadsProjection: {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [{
            label: 'Leads WhatsApp',
            data: [8, 15, 20, 25],
            borderColor: '#25d366',
            backgroundColor: 'rgba(37, 211, 102, 0.1)',
            fill: true,
            tension: 0.4
        }]
    },
    
    // Comparativo de métricas atual vs meta
    metricsComparison: {
        labels: ['Alcance Não-Seguidores', 'Visitas ao Perfil', 'Cliques no Link', 'Leads WhatsApp'],
        datasets: [{
            label: 'Atual',
            data: [19.6, 1900, 273, 0],
            backgroundColor: 'rgba(30, 58, 138, 0.8)',
            borderColor: '#1e3a8a',
            borderWidth: 2
        }, {
            label: 'Meta (30 dias)',
            data: [35, 2500, 400, 50],
            backgroundColor: 'rgba(245, 158, 11, 0.8)',
            borderColor: '#f59e0b',
            borderWidth: 2
        }]
    },
    
    // Distribuição de conteúdo semanal
    contentDistribution: {
        labels: ['Stories', 'Reels', 'Posts Feed', 'Lives'],
        datasets: [{
            data: [28, 12, 8, 4], // Por mês
            backgroundColor: [
                '#fbbf24',
                '#3b82f6',
                '#10b981',
                '#ef4444'
            ],
            borderColor: [
                '#f59e0b',
                '#1e40af',
                '#059669',
                '#dc2626'
            ],
            borderWidth: 2
        }]
    },
    
    // ROI projetado com investimento em anúncios
    roiProjection: {
        labels: ['Sem Anúncios', 'R$ 300/mês', 'R$ 600/mês', 'R$ 900/mês'],
        datasets: [{
            label: 'Leads Estimados',
            data: [25, 45, 70, 95],
            backgroundColor: 'rgba(30, 58, 138, 0.8)',
            borderColor: '#1e3a8a',
            borderWidth: 2
        }, {
            label: 'Matrículas Estimadas',
            data: [5, 9, 14, 19],
            backgroundColor: 'rgba(245, 158, 11, 0.8)',
            borderColor: '#f59e0b',
            borderWidth: 2
        }]
    }
};

// Configurações padrão para os gráficos
const defaultChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
            labels: {
                font: {
                    family: 'Inter',
                    size: 12
                }
            }
        },
        title: {
            display: true,
            font: {
                family: 'Inter',
                size: 16,
                weight: 'bold'
            }
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
                font: {
                    family: 'Inter',
                    size: 11
                }
            }
        },
        x: {
            grid: {
                color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
                font: {
                    family: 'Inter',
                    size: 11
                }
            }
        }
    }
};

// Função para criar gráfico de linha
function createLineChart(ctx, data, title) {
    return new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            ...defaultChartOptions,
            plugins: {
                ...defaultChartOptions.plugins,
                title: {
                    ...defaultChartOptions.plugins.title,
                    text: title
                }
            }
        }
    });
}

// Função para criar gráfico de barras
function createBarChart(ctx, data, title) {
    return new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            ...defaultChartOptions,
            plugins: {
                ...defaultChartOptions.plugins,
                title: {
                    ...defaultChartOptions.plugins.title,
                    text: title
                }
            }
        }
    });
}

// Função para criar gráfico de pizza
function createDoughnutChart(ctx, data, title) {
    return new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            family: 'Inter',
                            size: 12
                        }
                    }
                },
                title: {
                    display: true,
                    text: title,
                    font: {
                        family: 'Inter',
                        size: 16,
                        weight: 'bold'
                    }
                }
            }
        }
    });
}

