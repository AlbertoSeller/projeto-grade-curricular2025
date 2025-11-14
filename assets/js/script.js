/* ============================================================
   CONTROLE DE TABS / SEMESTRES
   ------------------------------------------------------------
   - Alterna entre os semestres ao clicar nas abas
   - Atualiza o breadcrumb dinamicamente
   - Marca visualmente a aba ativa
   - Permite navegação via teclado (acessibilidade)
   ============================================================ */

// Seletores principais
const semestres = document.querySelectorAll('.semestre');
const tabs = document.querySelectorAll('.semester-tab');
const breadcrumbSpan = document.querySelector('.breadcrumb span:last-child');

/**
 * Ativa o semestre selecionado
 * @param {string|number} numero - Número do semestre (1 a 8)
 */
function ativarSemestre(numero) {
  // Remove o estado ativo de todos os semestres
  semestres.forEach(s => s.classList.remove('active'));

  // Mostra o semestre correspondente
  const ativo = document.querySelector(`.semestre[data-semestre="${numero}"]`);
  if (ativo) ativo.classList.add('active');

  // Atualiza o breadcrumb
  if (breadcrumbSpan) {
    breadcrumbSpan.textContent = `${numero}º Semestre`;
  }

  // Atualiza visual das tabs
  tabs.forEach(tab => tab.classList.remove('active'));
  const tabAtiva = document.querySelector(`.semester-tab[data-semestre="${numero}"]`);
  if (tabAtiva) tabAtiva.classList.add('active');
}

// Adiciona evento de clique nas tabs
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const semestre = tab.getAttribute('data-semestre');
    ativarSemestre(semestre);
  });

  // Acessibilidade: permite ativar com teclado
  tab.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const semestre = tab.getAttribute('data-semestre');
      ativarSemestre(semestre);
    }
  });
});

// Ativa automaticamente o primeiro semestre ao carregar
if (semestres.length > 0) {
  ativarSemestre(1);
}



