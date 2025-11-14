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

// 🎯 NAVEGAÇÃO POR TECLADO - NOVA IMPLEMENTAÇÃO
function configurarNavegacaoTeclado() {
  tabs.forEach((tab, index) => {
    // Clique
    tab.addEventListener("click", () => {
      const numero = tab.getAttribute("data-semestre");
      ativarSemestre(numero);
    });

    // Teclado
    tab.addEventListener("keydown", (e) => {
      const currentIndex = index;
      let nextIndex;

      switch(e.key) {
        case "Enter":
        case " ":
          e.preventDefault();
          const numero = tab.getAttribute("data-semestre");
          ativarSemestre(numero);
          break;

        case "ArrowRight":
        case "ArrowDown":
          e.preventDefault();
          nextIndex = (currentIndex + 1) % tabs.length;
          tabs[nextIndex].focus();
          break;

        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
          tabs[nextIndex].focus();
          break;

        case "Home":
          e.preventDefault();
          tabs[0].focus();
          break;

        case "End":
          e.preventDefault();
          tabs[tabs.length - 1].focus();
          break;
      }
    });
  });
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  configurarNavegacaoTeclado();
  
  // Ativar primeira aba no carregamento
  if (tabs.length > 0) {
    tabs[0].setAttribute("tabindex", "0");
    ativarSemestre("1");
  }
});
