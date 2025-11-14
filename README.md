---

# 📘 Matriz Curricular — Sistemas de Informação (UniSantos)

Este projeto apresenta a matriz curricular do curso **Sistemas de Informação** da **Universidade Católica de Santos (UniSantos)**, organizada em abas por semestre, com foco em **acessibilidade**, **responsividade**, **boa arquitetura de código** e **fácil manutenção**.

---

## 🚀 Tecnologias Utilizadas

* **HTML5 semântico**
* **CSS3** (Custom Properties, responsividade, acessibilidade visual)
* **JavaScript Vanilla** (Tabs dinâmicas com ARIA e suporte a teclado)
* **WCAG 2.1 Guidelines** (acessibilidade reforçada)

---

## 🎯 Objetivo do Projeto

Oferecer aos estudantes e professores uma visualização:

* Clara e intuitiva dos semestres
* Acessível a leitores de tela
* Totalmente responsiva (mobile-first)
* Fácil de atualizar para futuras revisões da matriz curricular

---

## 📑 Funcionalidades Principais

### ✔ Sistema de Tabs com Acessibilidade (WCAG)

* Navegação com **Enter** e **Espaço**
* Uso correto de `role="tab"` e `role="tabpanel"`
* Estado da aba via `aria-selected`
* Conteúdos ocultos com `aria-hidden="true"`

### ✔ Breadcrumb Dinâmico

Mostra automaticamente qual semestre está sendo visualizado.

### ✔ Tabelas Responsivas

Em telas pequenas, as tabelas transformam-se em **cards amigáveis**, evitando scroll horizontal.

### ✔ Código Otimizado

* CSS organizado, comentado e modular
* JavaScript enxuto, estruturado e sem dependências externas
* HTML semântico e acessível

---

## 📂 Estrutura do Repositório

```
projeto-grade-curricular/
│
├── index.html
├── README.md
├── CHANGELOG.md
│
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── style.min.css
│   ├── js/
│   │   ├── script.js
│   │   └── script.min.js
│   └── img/
│       ├── logo.png
│       └── logotipo.png
```

---

## 📎 PDF Oficial da Matriz

A página inclui um botão para download do PDF oficial disponibilizado pela universidade.

---

## 🛠 Como Editar ou Expandir o Projeto

### 🔧 Alterar disciplinas

Edite as tabelas dentro das `<section data-semestre="">` conforme necessário.

### 🎨 Ajustar cores

As cores estão centralizadas em **CSS Custom Properties**, facilitando troca de tema:

```css
:root {
  --primary: #004080;
  --secondary: #003366;
}
```

---

## 🌱 Melhorias Futuras Sugeridas

* Tema **Dark Mode**
* Busca por disciplinas
* Exportação direta para PDF com layout personalizado
* Consumir matriz via **JSON / API**
* Animações acessíveis (prefeições por redução de movimento)

---

## 👨‍💻 Autor

Projeto desenvolvido e otimizado com apoio de Inteligência Artificial para fins **acadêmicos**, **profissionais** e **demonstrativos**.

---

## 📝 Licença

Este projeto é distribuído sob a **MIT License**, permitindo livre uso, modificação e distribuição.

---

Se quiser, posso **criar badges**, **colocar GIF demonstrativo**, **adicionar instruções de instalação**, ou **melhorar a identidade visual** do README.

