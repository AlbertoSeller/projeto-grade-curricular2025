// =========================================
// Controle de Abas da Matriz Curricular
// Acessibilidade WCAG + ARIA
// Autor: Luiz Barbosa
// Otimizado com apoio de Inteligência Artificial
// Para fins acadêmicos, profissionais e demonstrativos
// =========================================

// Seleciona abas e conteúdos
const tabs = document.querySelectorAll(".semester-tab");
const semestres = document.querySelectorAll(".semestre");

// Função principal
function ativarSemestre(numero) {
  // Atualiza os conteúdos
  semestres.forEach(sec => {
    const ativo = sec.getAttribute("data-semestre") === numero;
    sec.classList.toggle("active", ativo);
    sec.setAttribute("aria-hidden", ativo ? "false" : "true");
  });

  // Atualiza abas
  tabs.forEach(tab => {
    const ativo = tab.getAttribute("data-semestre") === numero;

    tab.classList.toggle("active", ativo);
    tab.setAttribute("aria-selected", ativo ? "true" : "false");
    tab.setAttribute("tabindex", ativo ? "0" : "-1");

    if (ativo) tab.focus(); // garante foco no tab correto
  });

  // Breadcrumb (último item)
  const breadcrumbSpan = document.querySelector(".breadcrumb span:last-child");
  if (breadcrumbSpan) {
    breadcrumbSpan.textContent = `${numero}º Semestre`;
  }
}

// Eventos das abas
tabs.forEach(tab => {
  const numero = tab.getAttribute("data-semestre");

  // Clique
  tab.addEventListener("click", () => ativarSemestre(numero));

  // Teclado (Enter ou Espaço)
  tab.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      ativarSemestre(numero);
    }
  });
});

// Ativar primeira aba no carregamento
if (tabs.length > 0) {
  tabs[0].setAttribute("tabindex", "0");
  ativarSemestre("1");
}
