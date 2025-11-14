// =========================================
// Controle de Abas da Matriz Curricular
// Com acessibilidade aprimorada (WCAG)
// =========================================

// Seleciona elementos principais
const tabs = document.querySelectorAll(".semester-tab");
const semestres = document.querySelectorAll(".semestre");

// Função principal para ativar o semestre
function ativarSemestre(numero) {

  // Remove estado ativo dos conteúdos
  semestres.forEach(sec => {
    sec.classList.remove("active");
    sec.setAttribute("aria-hidden", "true");
  });

  // Mostra o semestre correspondente
  const alvo = document.querySelector(`.semestre[data-semestre="${numero}"]`);
  if (alvo) {
    alvo.classList.add("active");
    alvo.setAttribute("aria-hidden", "false");
  }

  // Atualiza acessibilidade e classes das tabs
  tabs.forEach(tab => {
    const ativo = tab.getAttribute("data-semestre") === numero;
    tab.classList.toggle("active", ativo);
    tab.setAttribute("aria-selected", ativo ? "true" : "false");

    if (ativo) {
      tab.setAttribute("tabindex", "0");
    } else {
      tab.setAttribute("tabindex", "-1");
    }
  });

  // Atualiza breadcrumb (último item)
  const breadcrumbSpan = document.querySelector(".breadcrumb span:last-child");
  if (breadcrumbSpan) breadcrumbSpan.textContent = `${numero}º Semestre`;
}

// Adiciona eventos às abas (clique + teclado)
tabs.forEach(tab => {
  const numero = tab.getAttribute("data-semestre");

  // Clique do mouse
  tab.addEventListener("click", () => ativarSemestre(numero));

  // Acessibilidade via teclado
  tab.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      ativarSemestre(numero);
      tab.focus();
    }
  });
});

// Ativa a primeira aba ao carregar
if (tabs.length > 0) {
  tabs[0].setAttribute("tabindex", "0"); // ❤️ AGORA É FOCÁVEL PELO TAB
  ativarSemestre("1");
}
