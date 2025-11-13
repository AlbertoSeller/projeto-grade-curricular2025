// Exibe o semestre clicado e atualiza breadcrumb
const semestres = document.querySelectorAll('.semestre');
const tabs = document.querySelectorAll('.semester-tab');
const breadcrumbSpan = document.querySelector('.breadcrumb span:last-child');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const semestre = tab.getAttribute('data-semestre');
    semestres.forEach(s => s.classList.remove('active'));
    const ativo = document.querySelector(`.semestre[data-semestre="${semestre}"]`);
    if (ativo) ativo.classList.add('active');
    if (breadcrumbSpan) breadcrumbSpan.textContent = `${semestre}º Semestre`;
  });
});

// Ativa o primeiro semestre por padrão
if (semestres.length > 0) semestres[0].classList.add('active');
