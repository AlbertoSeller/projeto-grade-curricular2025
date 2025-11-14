/* ============================================================
   CONTROLE DE TABS / SEMESTRES
   ------------------------------------------------------------
   - Alterna entre os semestres ao clicar nas abas
   - Atualiza o texto do breadcrumb
   - Mantém acessibilidade via teclado
   ============================================================ */

// Seletores principais
const semestres = document.querySelectorAll('.semestre');
const tabs = document.querySelectorAll('.semester-tab');
const breadcrumbSpan = document.querySelector('.breadcrumb span:last-child');

// Função para ativar um semestre
function ativarSemestre(numero) {
  // Remove "active" de todos os semestres
  semestres.forEach(s => s.classList.remove('active'));

  // Seleciona o semestre correspondente
  const ativo = document.querySelector(`.semestre[data-semestre="${numero}"]`);
  if (ativo) ativo.classList.add('active');

  // Atualiza breadcrumb
  if (breadcrumbSpan) {
    breadcrumbSpan.textContent = `${numero}º Semestre`;
  }

  // Atualiza estado visual dos botões
  tabs.forEach(tab => tab.classList.remove('active'));
  const botaoAtivo = document.querySelector(`.semester-tab[data-semestre="${numero}"]`);
  if (botaoAtivo) botaoAtivo.classList.add('active');
}

// Adiciona eventos de clique nas tabulações
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const semestre = tab.getAttribute('data-semestre');
    ativarSemestre(semestre);
  });

  // Acessibilidade: permite navegação por teclado
  tab.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const semestre = tab.getAttribute('data-semestre');
      ativarSemestre(semestre);
    }
  });
});

// Ativa automaticamente o primeiro semestre
if (semestres.length > 0) {
  ativarSemestre(1);
}

